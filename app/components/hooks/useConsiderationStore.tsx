import { ConsiderationInputItem } from "@opensea/seaport-js/lib/types";
import { create } from "zustand";

interface IOfferState {
  offers: Map<string, ConsiderationInputItem>;
  add: (key: string, value: ConsiderationInputItem) => void;
  remove: (key: string) => void;
}

export const useConsiderationStore = create<IOfferState>()((set) => ({
  offers: new Map(),

  add: (key, value) => {
    set((state) => {
      const offers = state.offers;
      offers.set(key, value);
      return { offers };
    });
  },

  remove: (key) => {
    set((state) => {
      const offers = state.offers;
      offers.delete(key);
      return { offers };
    });
  },
}));
