"use client";
import { TItem } from "@/types/Item";
import { createContext, useContext } from "react";

type TSelectedItemContext = {
  selectedItem: TItem | null;
};

type TSelectedItemDispatchContext = {
  selectItem: (item: TItem) => void;
  unselectItem: (item: TItem) => void;
};

export const SelectedItemContext = createContext<TSelectedItemContext>({
  selectedItem: null,
});

export const SelectedItemDispatchContext =
  createContext<TSelectedItemDispatchContext>({
    selectItem() {},
    unselectItem() {},
  });

export const useSelectedItemContext = () => useContext(SelectedItemContext);
export const useSelectedItemDispatchContext = () =>
  useContext(SelectedItemDispatchContext);
