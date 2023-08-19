import {
  ConsiderationInputItem,
  CreateInputItem,
  OrderWithCounter,
} from "@opensea/seaport-js/lib/types";

export type Address = `0x${string}`;

export type ChainInfo = {
  [key: string]: {
    name: string;
    chainId: number;
  };
};

export type Contracts = {
  [key: string]: {
    SwapperToken: Address;
    CatToken: Address;
    DogToken: Address;
  };
};

export type CreateOrderParams = {
  offer: CreateInputItem[];
  consideration: ConsiderationInputItem[];
  offerer: Address;
};

export type FulfillOrderParams = {
  order: OrderWithCounter;
  fulfiller: Address;
};
