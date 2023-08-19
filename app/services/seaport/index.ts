import { Seaport } from "@opensea/seaport-js";
import { ethers } from "ethers";
import config from "@/utils/config";
import { ItemType } from "@opensea/seaport-js/lib/constants";
import { CreateOrderParams, FulfillOrderParams } from "@/utils/types";
import {
  ISwapperError,
  SwapFailure,
  SwapStatus,
  SwapSuccess,
} from "@/utils/errors";

const env = config.getEnv();
const currentChain = config.currentChain;
const seaport = initSeaport();

function initSeaport(): Seaport {
  return new Seaport(
    new ethers.providers.JsonRpcProvider(env.RPC_URL, {
      name: currentChain.name,
      chainId: currentChain.chainId,
    })
  );
}

export async function createOrder(
  offerType: ItemType.ERC20 | ItemType.ERC721,
  considerationType: ItemType.ERC20 | ItemType.ERC721,
  extraParams: CreateOrderParams
): Promise<
  SwapStatus<ItemType.ERC20 | ItemType.ERC721, ItemType.ERC20 | ItemType.ERC721>
> {
  try {
    const { offerer, offer, consideration } = extraParams;

    const { executeAllActions } = await seaport.createOrder(
      {
        offer,
        consideration,
      },
      offerer
    );

    // TODO: Store the order in a database.
    const order = await executeAllActions();
    console.log(`Order: ${JSON.stringify(order, null, 2)}`);

    return new SwapSuccess(offerType, considerationType);
  } catch (error) {
    return new SwapFailure(
      offerType,
      considerationType,
      error as ISwapperError
    );
  }
}

export async function fulfillOrder(
  offerType: ItemType.ERC20 | ItemType.ERC721,
  considerationType: ItemType.ERC20 | ItemType.ERC721,
  extraParams: FulfillOrderParams
): Promise<
  SwapStatus<ItemType.ERC20 | ItemType.ERC721, ItemType.ERC20 | ItemType.ERC721>
> {
  try {
    const { order, fulfiller } = extraParams;

    const { executeAllActions: executeAllFulfillActions } =
      await seaport.fulfillOrder({
        order,
        accountAddress: fulfiller,
      });

    const transaction = await executeAllFulfillActions();
    const receipt = await transaction.wait(6);

    // TODO: Store the transaction hash in a database.
    console.log(`Transaction receipt: ${JSON.stringify(receipt, null, 2)}`);

    // TODO: Add a link to the transaction on etherscan.
    alert(`Transaction Hash: ${receipt.transactionHash}`);

    return new SwapSuccess(offerType, considerationType);
  } catch (error) {
    return new SwapFailure(
      offerType,
      considerationType,
      error as ISwapperError
    );
  }
}
