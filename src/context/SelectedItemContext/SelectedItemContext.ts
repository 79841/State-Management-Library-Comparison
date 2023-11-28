"use client";
import { TItem } from "@/types/Item";
import { createContext, useContext } from "react";

export type TSelectedItemContext = TItem | null;

export type TSelectedItemDispatchContext = {
  selectItem: (item: TItem) => void;
  unselectItem: () => void;
};

export const SelectedItemContext = createContext<TSelectedItemContext>(null);

export const SelectedItemDispatchContext =
  createContext<TSelectedItemDispatchContext>({
    selectItem() {},
    unselectItem() {},
  });

export const useSelectedItemContext = () => useContext(SelectedItemContext);
export const useSelectedItemDispatchContext = () =>
  useContext(SelectedItemDispatchContext);
