import dotenv from "dotenv";
import { NotFoundError } from "./errors";

export interface IEnv {
  API_KEY: string | undefined;
  RPC_URL: string | undefined;
  PRIVATE_KEY: string | undefined;
}

export function initEnv(): IEnv {
  dotenv.config();

  let _env: IEnv | undefined = undefined;

  _env = {
    API_KEY: process.env.ETHERSCAN_API_KEY,
    RPC_URL: process.env.ALCHEMY_RPC_URL,
    PRIVATE_KEY: process.env.METAMASK_PRIVATE_KEY,
  };

  for (const [key, value] of Object.entries(_env)) {
    if (!value) {
      throw new NotFoundError(`[error] Missing environment variable: ${key}`);
    }
  }

  return _env;
}
