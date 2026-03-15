"use client";

import { useState, useEffect, FormEvent } from "react";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { PhoneCall, Calendar, Clock, User, Mail, CheckCircle, ArrowRight, Tag } from "lucide-react";

declare global {
  interface Window {
    Razorpay: any;
  }
}

const generateTimeSlots = () => {
  const slots = [];
  const startHour = 10;
  const endHour = 17;

  for (let hour = startHour; hour <= endHour; hour++) {
    for (let min of ["00", "30"]) {
      if (hour === endHour && min === "30") continue; // End at 5:00 PM
      const formattedHour = hour > 12 ? hour - 12 : hour;
      const ampm = hour >= 12 ? "PM" : "AM";
      slots.push(`${formattedHour}:${min} ${ampm}`);
    }
  }
  return slots;
};

export default function BookCallPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
  });

  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<{ code: string; discountPrice: number } | null>(null);
  const [isApplyingCoupon, setIsApplyingCoupon] = useState(false);

  const slots = generateTimeSlots();
  
  // Calculate minimum date (2 days from now)
  const minDateObj = new Date();
  minDateObj.setDate(minDateObj.getDate() + 2);
  const minDate = minDateObj.toISOString().split("T")[0];

  useEffect(() => {
    // Dynamically load Razorpay SDK
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleTimeSelect = (timeSlot: string) => {
    setFormData((prev) => ({ ...prev, time: timeSlot }));
  };

  const handleApplyCoupon = async () => {
    if (!couponCode.trim()) return;
    setIsApplyingCoupon(true);

    try {
      const res = await fetch("/api/coupon/validate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ couponCode: couponCode.trim() }),
      });
      
      const data = await res.json();
      
      if (res.ok && data.valid) {
        setAppliedCoupon({ code: couponCode.trim().toUpperCase(), discountPrice: data.discountPrice });
        toast({
          title: "Success!",
          description: data.message || "Coupon applied successfully.",
        });
      } else {
        setAppliedCoupon(null);
        toast({
          title: "Invalid Coupon",
          description: data.error || "This coupon is invalid or expired.",
          variant: "destructive",
        });
      }
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to validate coupon. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsApplyingCoupon(false);
    }
  };

  const currentPrice = appliedCoupon ? appliedCoupon.discountPrice / 100 : 499;

  const handlePayment = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.time) {
      toast({
        title: "Time Slot Required",
        description: "Please select a preferred time slot.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // 1. Create Order and Pending Document on Backend
      const res = await fetch("/api/razorpay/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          bookingDetails: formData,
          couponCode: appliedCoupon?.code || null
        })
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to create order");
      }

      const { order, documentId, keyId } = data;

      if (!window.Razorpay) {
          throw new Error("Payment gateway is still loading. Please try again.");
      }

      if (!keyId) {
          throw new Error("Failed to securely retrieve payment gateway keys.");
      }

      // 2. Initialize Razorpay Checkout
      const options = {
        key: keyId, // Use securely fetched key instead of process.env which was failing
        amount: order.amount,
        currency: order.currency,
        name: "Rajashekar Tech Labs",
        description: "1-on-1 Strategy Call",
        image: "/icon.svg", 
        order_id: order.id,
        handler: async function (response: any) {
          // 3. Verify Payment Signature & Confirm Database
          try {
            const verifyRes = await fetch("/api/razorpay/verify", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_order_id: response.razorpay_order_id,
                razorpay_signature: response.razorpay_signature,
                firebaseDocumentId: documentId, // update the pending doc
                couponCode: appliedCoupon?.code || null,
                bookingDetails: formData, // fallback context
              }),
            });

            if (verifyRes.ok) {
              setIsSuccess(true);
            } else {
              toast({
                title: "Payment Verification Failed",
                description: "Please contact support if amount was deducted.",
                variant: "destructive",
              });
            }
          } catch (error) {
            toast({
              title: "Verification Error",
              description: "An error occurred during verification.",
              variant: "destructive",
            });
          }
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone,
        },
        theme: {
          color: "#0f172a", // Slate 900
        },
      };

      const razorpay = new window.Razorpay(options);
      
      razorpay.on('payment.failed', function (response: any) {
        toast({
          title: "Payment Failed",
          description: response.error.description || "An error occurred during payment.",
          variant: "destructive",
        });
      });

      razorpay.open();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Something went wrong. Please check your connection or try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navigation />
        <main className="flex-1 flex flex-col items-center justify-center pt-24 px-4">
          <div className="max-w-md w-full text-center space-y-6 bg-card border border-border p-10 rounded-2xl shadow-xl">
            <CheckCircle className="h-20 w-20 text-green-500 mx-auto" />
            <h1 className="text-3xl font-bold text-foreground">Call Booked!</h1>
            <p className="text-muted-foreground text-lg">
              Thank you, {formData.name}. We've received your booking and payment. A confirmation email has been sent to {formData.email} with your meeting details.
            </p>
            <div className="pt-4">
              <Button onClick={() => window.location.href = '/'} className="w-full">
                Return to Home
              </Button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Details */}
          <div className="space-y-8">
            <div>
              <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-2">Strategy Call</p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Book a 1-on-1 Consultation
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Need expert advice on architecture, a code review, or planning your next big startup? Let's sit down for a focused 30-minute block and solve your technical challenges.
              </p>
            </div>

            <div className="space-y-6 bg-card border border-primary/10 rounded-2xl p-8">
              <div className="flex items-center justify-between">
                <span className="text-lg font-medium text-muted-foreground">Session Duration</span>
                <span className="text-lg font-bold text-foreground">30 Minutes</span>
              </div>
              <div className="h-px bg-border" />
              <div className="flex items-center justify-between">
                <span className="text-lg font-medium text-muted-foreground">Session Cost</span>
                <span className="text-2xl font-bold text-primary">₹{currentPrice}</span>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">What you can expect:</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span>Actionable feedback on your current codebase or architecture.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span>Clear guidance on technology stack choices tailored to your problem.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span>Strategic roadmap planning for MVP or scaling phases.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-card border border-border shadow-2xl shadow-primary/5 rounded-3xl p-8 md:p-10">
            <h2 className="text-2xl font-bold mb-8 flex items-center">
              <Calendar className="mr-3 text-primary h-6 w-6" /> 
              Schedule Your Date & Time
            </h2>

            <form onSubmit={handlePayment} className="space-y-8">
              
              {/* Step 1: Personal Details */}
              <div className="space-y-5">
                <h3 className="font-semibold text-foreground border-b pb-2 flex items-center">
                  <User className="mr-2 h-4 w-4 text-muted-foreground" /> Your Details
                </h3>
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" name="name" required placeholder="John Doe" value={formData.name} onChange={handleInputChange} />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" required placeholder="john@example.com" value={formData.email} onChange={handleInputChange} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" name="phone" type="tel" required placeholder="+91 98765 43210" value={formData.phone} onChange={handleInputChange} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2: Date & Time */}
              <div className="space-y-5">
                <h3 className="font-semibold text-foreground border-b pb-2 flex items-center">
                  <Clock className="mr-2 h-4 w-4 text-muted-foreground" /> Select Time
                </h3>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Preferred Date (Earliest: 48 hours from today)</Label>
                    <Input 
                      id="date" 
                      name="date" 
                      type="date" 
                      required 
                      min={minDate} 
                      value={formData.date} 
                      onChange={handleInputChange}
                      className="w-full sm:w-auto"
                    />
                  </div>

                  {formData.date && (
                    <div className="space-y-3 pt-2">
                      <Label>Select an available time block</Label>
                      <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                        {slots.map((slot) => (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => handleTimeSelect(slot)}
                            className={`py-2 px-1 text-sm rounded-md transition-all border ${
                              formData.time === slot 
                                ? "bg-primary text-primary-foreground border-primary shadow-sm"
                                : "bg-transparent border-border hover:border-primary/50 text-foreground hover:bg-muted"
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Step 3: Coupon Section */}
              <div className="space-y-4 pt-2 border-t mt-6">
                <Label htmlFor="coupon" className="flex items-center">
                  <Tag className="mr-2 h-4 w-4 text-muted-foreground" /> 
                  Have a coupon code?
                </Label>
                <div className="flex space-x-2">
                  <Input 
                    id="coupon" 
                    placeholder="Enter code" 
                    value={couponCode} 
                    onChange={(e) => setCouponCode(e.target.value)}
                    disabled={!!appliedCoupon || isApplyingCoupon}
                  />
                  <Button 
                    type="button" 
                    variant={appliedCoupon ? "outline" : "secondary"}
                    onClick={appliedCoupon ? () => { setAppliedCoupon(null); setCouponCode(""); } : handleApplyCoupon}
                    disabled={(!couponCode && !appliedCoupon) || isApplyingCoupon}
                  >
                    {isApplyingCoupon ? "Checking..." : appliedCoupon ? "Remove" : "Apply"}
                  </Button>
                </div>
                {appliedCoupon && (
                  <p className="text-sm text-green-600 font-medium">
                    Coupon '{appliedCoupon.code}' applied successfully!
                  </p>
                )}
              </div>

              <div className="pt-6">
                <Button type="submit" size="lg" className="w-full text-lg h-14" disabled={isLoading || !formData.date || !formData.time}>
                  {isLoading ? "Processing..." : (
                    <>
                      Proceed to Pay ₹{currentPrice} <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
                <p className="text-center text-xs text-muted-foreground mt-4 flex items-center justify-center gap-1">
                  Payments are secure and processed via Razorpay.
                </p>
              </div>

            </form>
          </div>

        </div>
      </main>
    </div>
  );
}
