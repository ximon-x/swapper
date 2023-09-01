import { CreateInputItem } from "@opensea/seaport-js/lib/types";
import { create } from "zustand";

interface IOfferState {
  offers: Map<string, CreateInputItem>;
  add: (key: string, value: CreateInputItem) => void;
  remove: (key: string) => void;
  clear: () => void;
}

export const useOfferStore = create<IOfferState>()((set) => ({
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

  clear: () => {
    set((state) => {
      const offers = state.offers;
      offers.clear();
      return { offers };
    });
  },
}));
