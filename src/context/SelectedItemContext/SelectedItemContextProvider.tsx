import { PropsWithChildren, useReducer, useState } from "react";
import {
  SelectedItemContext,
  SelectedItemDispatchContext,
  TSelectedItemContext,
  TSelectedItemDispatchContext,
} from "./SelectedItemContext";
import { TItem } from "@/types/Item";

type TAction = { type: "SELECT"; item: TItem } | { type: "UNSELECT" };

const reducer = (state: TSelectedItemContext, action: TAction) => {
  switch (action.type) {
    case "SELECT":
      console.log(action);
      return action.item;
    case "UNSELECT":
      console.log(action);
      return null;
    default:
      return state;
  }
};

type TSelectedItemContextProvider = PropsWithChildren;
export const SelectedItemContextProvider = ({
  children,
}: TSelectedItemContextProvider) => {
  const [selectedItem, dispatchSelectedItem] = useReducer(reducer, null);
  const selectItem: TSelectedItemDispatchContext["selectItem"] = (
    item: TItem
  ) => {
    dispatchSelectedItem({ type: "SELECT", item });
  };
  const unselectItem: TSelectedItemDispatchContext["unselectItem"] = () => {
    dispatchSelectedItem({ type: "UNSELECT" });
  };
  return (
    <SelectedItemContext.Provider value={selectedItem}>
      <SelectedItemDispatchContext.Provider
        value={{ selectItem, unselectItem }}
      >
        {children}
      </SelectedItemDispatchContext.Provider>
    </SelectedItemContext.Provider>
  );
};
