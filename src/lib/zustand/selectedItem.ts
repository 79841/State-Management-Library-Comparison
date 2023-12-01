import { TItem } from "@/types/Item";
import { create } from "zustand";

type TState = {
  selectedItem: TItem | null;
};

type TActions = {
  select: (item: TItem) => void;
  unselect: () => void;
};

export const useSelectedItemStore = create<TState & TActions>((set) => ({
  selectedItem: null,
  select: (item: TItem) => set((prev) => ({ selectedItem: item })),
  unselect: () => set((prev) => ({ selectedItem: null })),
}));
