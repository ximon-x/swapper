import { getOrder } from "@/app/database/db";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const orderId = request.nextUrl.searchParams.get("orderId");
  try {
    const order = await getOrder(new ObjectId(orderId!));

    return NextResponse.json({ order });
  } catch (error) {
    console.log(`Error: ${error}`);
    return NextResponse.json({ error });
  }
}
