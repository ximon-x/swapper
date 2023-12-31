import { MongoClient, ServerApiVersion } from "mongodb";
import { IEnv, initEnv } from "./env";
import { CHAINS } from "./constants";
import { ethers } from "ethers";
import { Alchemy, Network } from "alchemy-sdk";

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

function getDbClient(mongodbUri: string) {
  const client = new MongoClient(mongodbUri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  return client;
}

function getAlchemyClient(apiKey: string) {
  const settings = {
    apiKey,
    network: Network.ETH_SEPOLIA,
  };

  const alchemy = new Alchemy(settings);
  return alchemy;
}

const config = {
  currentChain,
  getEnv,
  getProvider,
  getDbClient,
  getAlchemyClient,
};

export default config;
