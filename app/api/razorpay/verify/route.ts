import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { getDb } from "@/lib/firebase-admin";
import { sendBookingEmail } from "@/lib/email";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const { 
      razorpay_order_id, 
      razorpay_payment_id, 
      razorpay_signature,
      bookingDetails,
      couponCode,
      firebaseDocumentId // Receiving the ID created in the order step
    } = await req.json();

    const sign = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSign = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET || "")
      .update(sign.toString())
      .digest("hex");

    if (razorpay_signature === expectedSign) {
      // Payment is successful and verified
      try {
        // 1. Save to Firebase Firestore
        const db = getDb();
        if (db && firebaseDocumentId) {
          // Update the pending document to paid
          await db.collection("bookings").doc(firebaseDocumentId).update({
            paymentId: razorpay_payment_id,
            status: "paid",
            updatedAt: new Date().toISOString(),
          });
        } else if (db && !firebaseDocumentId) {
          // Fallback: create an entirely new document if the frontend couldn't pass it
          await db.collection("bookings").add({
            paymentId: razorpay_payment_id,
            orderId: razorpay_order_id,
            name: bookingDetails?.name,
            email: bookingDetails?.email,
            phone: bookingDetails?.phone,
            date: bookingDetails?.date,
            time: bookingDetails?.time,
            couponCode: couponCode || null,
            status: "paid",
            createdAt: new Date().toISOString(),
          });
        }
        
        // 2. Send Automated Emails using Nodemailer
        await sendBookingEmail({
          name: bookingDetails.name,
          email: bookingDetails.email,
          phone: bookingDetails.phone,
          date: bookingDetails.date,
          time: bookingDetails.time,
          paymentId: razorpay_payment_id,
        });
        
      } catch (err) {
        // If emails or db fail, we still verified payment, but log the error
        console.error("Post-payment processing error:", err);
      }

      return NextResponse.json(
        { message: "Payment verified successfully" },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { error: "Invalid payment signature" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Error verifying payment:", error);
    return NextResponse.json(
      { error: "Error verifying payment" },
      { status: 500 }
    );
  }
}
