import { ChainInfo, Contracts } from "./types";

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

export const CONTRACTS: Contracts = {
  sepolia: {
    SwapperToken: "0xd4a1477715D621604D4564448e5BD048F68Ff531",
    CatToken: "0x6AD7a5c473cC2cfa0fFE653BE9e045Ec1FE2BE42",
    DogToken: "0xB7855bb9652E038525459ECCd22D4D90EcE6935A",
  },
};
