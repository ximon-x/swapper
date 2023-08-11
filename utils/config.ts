import { IEnv, initEnv } from "./env";
import { CHAINS } from "./constants";

// Single source of truth for the current chain
const currentChain = CHAINS.sepolia;

// Returns environment variables and errors if any are missing
export function getEnv(): IEnv {
  let _env = initEnv();

  return _env;
}

const config = {
  currentChain,
  getEnv,
};

export default config;
