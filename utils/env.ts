import dotenv from "dotenv";
import { NotFoundError } from "./errors";

export interface IEnv {
  RPC_URL: string | undefined;
}

export function initEnv(): IEnv {
  dotenv.config();

  let _env: IEnv | undefined = undefined;

  _env = {
    RPC_URL: process.env.ALCHEMY_RPC_URL,
  };

  for (const [key, value] of Object.entries(_env)) {
    if (!value) {
      throw new NotFoundError(`[error] Missing environment variable: ${key}`);
    }
  }

  return _env;
}
