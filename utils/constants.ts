import { ChainInfo, Contracts } from "./types";

import swapperTokenData from "../artifacts/contracts/Tokens.sol/SwapperToken.json";
import catTokenData from "../artifacts/contracts/Tokens.sol/CatToken.json";
import dogTokenData from "../artifacts/contracts/Tokens.sol/DogToken.json";

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

export const ABIS = {
  SwapperToken: swapperTokenData.abi,
  CatToken: catTokenData.abi,
  DogToken: dogTokenData.abi,
};

export const ASSETS_URIS = {
  SwapperToken: "",
  CatToken:
    "https://ipfs.io/ipfs/QmbjMQCK99nVMnFvNuNwg1UR92QYc2oHtAVKHK89K1o4iz",
  DogToken:
    "https://ipfs.io/ipfs/QmZW1VBnsUQrUjkU3bRoxotRXqByxcyg2AAcy2N2pHRxgc",
};
