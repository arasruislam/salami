import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Salami from "@/models/Salami";

export const dynamic = "force-dynamic";

export async function GET(request) {
  try {
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 10;
    const skip = (page - 1) * limit;

    // 1. Get Top 3 Winners (All time, by amount then date)
    const topWinners = await Salami.find({})
      .sort({ amount: -1, createdAt: -1 })
      .limit(3)
      .lean();

    const topIds = topWinners.map(w => w._id);

    // 2. Get Recent Winners (Excluding Top 3, paginated)
    const recentWinners = await Salami.find({ _id: { $nin: topIds } })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();

    // 3. Get total count for pagination (Excluding Top 3)
    const totalRecentCount = await Salami.countDocuments({ _id: { $nin: topIds } });

    // 4. Get total amount of all winnings
    const totalAmountResult = await Salami.aggregate([
      { $group: { _id: null, total: { $sum: "$amount" } } }
    ]);
    const totalAmount = totalAmountResult.length > 0 ? totalAmountResult[0].total : 0;

    return NextResponse.json({
      topWinners,
      recentWinners,
      totalRecentCount,
      totalAmount,
      currentPage: page,
      totalPages: Math.ceil(totalRecentCount / limit)
    });
  } catch (error) {
    console.error("History API error:", error);
    return NextResponse.json(
      { success: false, message: "ইতিহাস লোড করতে সমস্যা হয়েছে।" },
      { status: 500 }
    );
  }
}
