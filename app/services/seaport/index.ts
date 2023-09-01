import { Seaport } from "@opensea/seaport-js";
import { ethers } from "ethers";
import { CreateOrderParams, FulfillOrderParams } from "@/utils/types";
import {
  ISwapperError,
  SwapFailure,
  SwapStatus,
  SwapSuccess,
} from "@/utils/errors";
import { ExternalProvider } from "@ethersproject/providers";
import { OrderWithCounter } from "@opensea/seaport-js/lib/types";

export function initSeaport(provider: ExternalProvider): Seaport {
  return new Seaport(new ethers.providers.Web3Provider(provider));
}

export async function createOrder(
  seaport: Seaport,
  params: CreateOrderParams
): Promise<SwapStatus | OrderWithCounter> {
  try {
    const { offerer, offer, consideration } = params;

    const { executeAllActions } = await seaport.createOrder(
      {
        offer,
        consideration,
      },
      offerer
    );

    // TODO: Store the order in a database.
    const order = await executeAllActions();
    return order;
  } catch (error) {
    return new SwapFailure(error as ISwapperError);
  }
}

export async function fulfillOrder(
  seaport: Seaport,
  params: FulfillOrderParams
): Promise<SwapStatus> {
  try {
    const { order, fulfiller } = params;

    const { executeAllActions: executeAllFulfillActions } =
      await seaport.fulfillOrder({
        order,
        accountAddress: fulfiller,
      });

    const transaction = await executeAllFulfillActions();
    const receipt = await transaction.wait(6);

    // TODO: Store the transaction hash in a database.
    console.log(`Transaction receipt: ${JSON.stringify(receipt, null, 2)}`);

    return new SwapSuccess();
  } catch (error) {
    return new SwapFailure(error as ISwapperError);
  }
}
