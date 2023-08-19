import config from "@/utils/config";
import { Address } from "@/utils/types";
import { ethers } from "ethers";

const env = config.getEnv();
const { PRIVATE_KEY, ALCHEMY_KEY } = env;

const provider = config.getProvider(ALCHEMY_KEY!);
const signer = new ethers.Wallet(PRIVATE_KEY!, provider);

export async function sendToken(
  recipient: Address
): Promise<ethers.providers.TransactionResponse> {
  const tx = {
    to: recipient,
    from: signer.address,
    value: ethers.utils.parseEther("1000000"),
  };

  const sendPromise = signer.sendTransaction(tx);
  const receipt = await sendPromise;
  receipt.wait();
  return receipt;
}
