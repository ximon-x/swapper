import { updateOrder } from "@/app/database/db";
import { SwapSuccess } from "@/utils/errors";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const params = await request.json();

  try {
    const { fulfiller, orderId } = params;
    await updateOrder(new ObjectId(orderId), fulfiller);

    return NextResponse.json({ SwapSuccess: new SwapSuccess() });
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}
