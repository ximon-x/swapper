import { ChainInfo } from "./types";

export const CHAINS: ChainInfo = {
  mainnet: {
    name: "mainnet",
    chainId: 1,
  },
} || {
    sepolia: {
      name: "sepolia",
      chainId: 11155111,
    },
  } || {
    polygon: {
      name: "polygon",
      chainId: 137,
    },
  } || {
    mumbai: {
      name: "mumbai",
      chainId: 80001,
    },
  } || {
    bsc: {
      name: "bsc",
      chainId: 56,
    },
  } || {
    bsc_testnet: {
      name: "bsc_testnet",
      chainId: 97,
    },
  };
