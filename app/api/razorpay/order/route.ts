import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";
import { getDb } from "@/lib/firebase-admin";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID || process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "",
      key_secret: process.env.RAZORPAY_KEY_SECRET || "",
    });

    const { bookingDetails, couponCode } = await req.json();

    let finalAmount = 49900; // default 499 INR
    
    // Check coupon logic again to prevent frontend bypass
    if (couponCode === "TEST1RUP") {
      const db = getDb();
      if (db) {
        const snapshot = await db.collection("bookings")
          .where("couponCode", "==", "TEST1RUP")
          .where("status", "==", "paid")
          .get();
        if (snapshot.size < 5) {
          finalAmount = 100; // 1 INR
        } else {
          return NextResponse.json({ error: "Coupon expired or reached maximum limit" }, { status: 400 });
        }
      }
    }

    const options = {
      amount: finalAmount, // dynamic amount
      currency: "INR",
      receipt: "receipt_order_" + Math.random().toString(36).substring(7),
    };

    const order = await razorpay.orders.create(options);

    let documentId = null;
    const db = getDb();
    if (db && bookingDetails) {
      const docRef = await db.collection("bookings").add({
        ...bookingDetails,
        couponCode: couponCode || null,
        orderId: order.id,
        status: "pending",
        createdAt: new Date().toISOString(),
      });
      documentId = docRef.id;
    }

    // Return the key_id securely from the server so the frontend doesn't need it in the browser bundle
    const keyId = process.env.RAZORPAY_KEY_ID || process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;

    return NextResponse.json({ order, documentId, keyId }, { status: 200 });
  } catch (error: any) {
    console.error("Error creating Razorpay order:", error);
    return NextResponse.json(
      { error: error?.description || "Error creating order. Check your API keys if this persists." },
      { status: 500 }
    );
  }
}
