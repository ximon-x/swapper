import { sendToken } from "@/app/services/swap";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { recipient } = await request.json();
  const receipt = await sendToken(recipient);

  // TODO: Store receipt in database

  return NextResponse.json({ receipt });
}
