import { ConsiderationInputItem } from "@opensea/seaport-js/lib/types";
import { create } from "zustand";

interface IConsiderationState {
  consideration: Map<string, ConsiderationInputItem>;
  add: (key: string, value: ConsiderationInputItem) => void;
  remove: (key: string) => void;
  clear: () => void;
}

export const useConsiderationStore = create<IConsiderationState>()((set) => ({
  consideration: new Map(),

  add: (key, value) => {
    set((state) => {
      const consideration = state.consideration;
      consideration.set(key, value);
      return { consideration };
    });
  },

  remove: (key) => {
    set((state) => {
      const consideration = state.consideration;
      consideration.delete(key);
      return { consideration };
    });
  },

  clear: () => {
    set((state) => {
      const consideration = state.consideration;
      consideration.clear();
      return { consideration };
    });
  },
}));
