"use client";
import {
  SelectedItemContextProvider,
  useSelectedItemContext,
  useSelectedItemDispatchContext,
} from "@/context/SelectedItemContext";
import { items } from "@/data/item";
import { TItem } from "@/types/Item";
import { ChangeEventHandler } from "react";

type TContextTesterItemProps = {
  item: TItem;
};

function ContextTesterItem({ item }: TContextTesterItemProps) {
  const selectedItem = useSelectedItemContext();
  const { selectItem, unselectItem } = useSelectedItemDispatchContext();

  const handleCheck: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.checked) {
      selectItem(item);
    } else {
      unselectItem();
    }
  };
  const isChecked =
    selectedItem != null ? selectedItem.name === item.name : false;
  return (
    <div>
      <input type="checkbox" checked={isChecked} onChange={handleCheck} />
      <span>{item.name}</span>
    </div>
  );
}

export function ContextTester() {
  return (
    <SelectedItemContextProvider>
      <div>
        {items.map((item: TItem) => (
          <ContextTesterItem key={item.name} item={item} />
        ))}
      </div>
    </SelectedItemContextProvider>
  );
}
