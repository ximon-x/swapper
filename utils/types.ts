import {
  ConsiderationInputItem,
  CreateInputItem,
  OrderWithCounter,
} from "@opensea/seaport-js/lib/types";

export type Address = string;

export type ChainInfo = {
  [key: string]: {
    name: string;
    chainId: number;
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
