import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Salami from "@/models/Salami";
import { getWeightedAmount, getWheelIndex, sanitizeName } from "@/lib/salami-utils";
import { BANGLA_MESSAGES } from "@/lib/constants";

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    const body = await req.json();
    const rawName = body.name;
    const name = sanitizeName(rawName);

    if (!name) {
      return NextResponse.json(
        { success: false, message: BANGLA_MESSAGES.NAME_REQUIRED },
        { status: 400 }
      );
    }

    await dbConnect();

    // Logic for weighted random amount
    const amount = getWeightedAmount();
    
    // Save to DB
    const newEntry = await Salami.create({
      name,
      amount,
    });

    // We also return the target index for the wheel to land on
    const targetIndex = getWheelIndex(amount);

    return NextResponse.json({
      success: true,
      name: newEntry.name,
      amount: newEntry.amount,
      targetIndex,
      message: BANGLA_MESSAGES.YOU_WON.replace("$amount", amount.toString()),
    });
  } catch (error) {
    console.error("Spin API error:", error);
    return NextResponse.json(
      { success: false, message: "সার্ভারে সমস্যা হয়েছে। আবার চেষ্টা করো।" },
      { status: 500 }
    );
  }
}
