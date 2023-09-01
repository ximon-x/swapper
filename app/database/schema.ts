import { Address } from "@/utils/types";
import { OrderWithCounter } from "@opensea/seaport-js/lib/types";

export type OrderSchema = {
  offerer: Address;
  fulfiller: Address | null;
  order: OrderWithCounter;
  fulfilled: boolean;
  cancelled: boolean;
  created: Date;
  updated: Date;
};
