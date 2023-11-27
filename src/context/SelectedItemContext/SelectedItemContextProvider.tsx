import { PropsWithChildren, useState } from "react";
import {
  SelectedItemContext,
  SelectedItemDispatchContext,
} from "./SelectedItemContext";
import { TItem } from "@/types/Item";

type TAction = { type: "SET" } | { type: "UNSET" };

const reducer = (state: TItem, action: TAction) => {
  switch (action.type) {
    case "SET":
  }
};

type TSelectedItemContextProvider = PropsWithChildren;
export const SelectedItemContextProvider = ({
  children,
}: TSelectedItemContextProvider) => {
  return (
    <SelectedItemContext.Provider>
      <SelectedItemDispatchContext.Provider>
        {children}
      </SelectedItemDispatchContext.Provider>
    </SelectedItemContext.Provider>
  );
};
