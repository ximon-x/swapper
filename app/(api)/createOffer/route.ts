import { createOrder } from "@/app/database/db";
import { OrderSchema } from "@/app/database/schema";
import { Address } from "@/utils/types";
import { OrderWithCounter } from "@opensea/seaport-js/lib/types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const order = (await request.json()) as OrderWithCounter;

  try {
    const params: OrderSchema = {
      offerer: order.parameters.offerer as Address,
      fulfiller: null,
      order: order,
      fulfilled: false,
      cancelled: false,
      created: new Date(),
      updated: new Date(),
    };

    const receipt = await createOrder(params);

    return NextResponse.json({ receipt });
  } catch (error) {
    console.log(`Error: ${error}`);
    return NextResponse.json({ error });
  }

  // TODO: Store receipt in database
}
