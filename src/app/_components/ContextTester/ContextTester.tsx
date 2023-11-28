"use client";
import {
  SelectedItemContextProvider,
  useSelectedItemContext,
  useSelectedItemDispatchContext,
} from "@/context/SelectedItemContext";
import { items } from "@/data/item";
import { TItem } from "@/types/Item";
import { ChangeEventHandler, memo, useState } from "react";

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
      <TestComponent2 />
    </div>
  );
}

export function ContextTester() {
  return (
    <SelectedItemContextProvider>
      <div className="p-4">
        <TestComponent1 />
        {items.map((item: TItem) => (
          <ContextTesterItem key={item.name} item={item} />
        ))}
      </div>
    </SelectedItemContextProvider>
  );
}

function TestComponent1() {
  return <div className="m-4">test component 1</div>;
}

const TestComponent2 = memo(function TestComponent2() {
  return <div className="m-4">test component 2</div>;
});
