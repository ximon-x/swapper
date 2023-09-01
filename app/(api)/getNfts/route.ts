import config from "@/utils/config";
import { NextRequest, NextResponse } from "next/server";

const env = config.getEnv();
const { ALCHEMY_KEY } = env;
const alchemy = config.getAlchemyClient(ALCHEMY_KEY!);

export async function GET(request: NextRequest) {
  const user = request.nextUrl.searchParams.get("user");
  const nfts = await alchemy.nft.getNftsForOwner(user!);

  return NextResponse.json({ nfts });
}
