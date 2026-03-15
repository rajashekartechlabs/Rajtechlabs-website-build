import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/firebase-admin";

export async function POST(req: NextRequest) {
  try {
    const { couponCode } = await req.json();

    if (!couponCode) {
      return NextResponse.json({ valid: false, error: "Coupon code is required" }, { status: 400 });
    }

    if (couponCode.toUpperCase() !== "TEST1RUP") {
      return NextResponse.json({ valid: false, error: "Invalid coupon code" }, { status: 400 });
    }

    const db = getDb();
    if (!db) {
      // Allow testing without DB in dev if needed, or throw error.
      // Better to fail to be safe for coupons.
      return NextResponse.json({ valid: false, error: "Database connection failed" }, { status: 500 });
    }

    // Check Firebase for existing uses of this coupon
    // We only care about payments that completely succeeded
    const snapshot = await db.collection("bookings")
      .where("couponCode", "==", "TEST1RUP")
      .where("status", "==", "paid")
      .get();

    const usedCount = snapshot.size;

    if (usedCount >= 5) {
      return NextResponse.json({
        valid: false,
        error: "This coupon has reached its maximum usage limit (2 times)."
      }, { status: 400 });
    }

    return NextResponse.json({
      valid: true,
      discountPrice: 100, // 100 paise = 1 INR
      originalPrice: 49900,
      message: `Coupon applied! ${2 - usedCount} uses remaining.`
    }, { status: 200 });

  } catch (error) {
    console.error("Error validating coupon:", error);
    return NextResponse.json({ valid: false, error: "Failed to validate coupon" }, { status: 500 });
  }
}
