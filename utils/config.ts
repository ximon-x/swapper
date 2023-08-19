import { IEnv, initEnv } from "./env";
import { CHAINS } from "./constants";
import { ethers } from "ethers";

// Single source of truth for the current chain
const currentChain = CHAINS.sepolia;

// Returns environment variables and errors if any are missing
function getEnv(): IEnv {
  let _env = initEnv();

  return _env;
}

function getProvider(apiKey: string) {
  const provider = new ethers.providers.AlchemyProvider(currentChain, apiKey);
  return provider;
}

const config = {
  currentChain,
  getEnv,
  getProvider,
};

export default config;
