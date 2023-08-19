import { Address } from "@/utils/types";
import { OrderWithCounter } from "@opensea/seaport-js/lib/types";

export type Order = {
  id: string;
  offerer: Address;
  fullfiller: Address | null;
  order: OrderWithCounter;
  fulfilled: boolean;
  cancelled: boolean;
  created: Date;
  updated: Date;
};
