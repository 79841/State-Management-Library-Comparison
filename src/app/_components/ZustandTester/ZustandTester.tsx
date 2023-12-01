"use client";

import { Item } from "@/components/item";
import { TestComponent1, TestComponent2 } from "@/components/testComponent";
import { RenderingDisplayedWrapper } from "@/components/testComponent/RenderingDisplayedWrapper";
import { items } from "@/data/item";
import { useSelectedItemStore } from "@/lib/zustand/selectedItem";
import { TItem } from "@/types/Item";
import {
  ChangeEventHandler,
  memo,
  useCallback,
  useEffect,
  useState,
} from "react";

type TZustandTesterProps = {
  item: TItem;
};

const ZustandTesterItem = memo(function ZustandTesterItem({
  item,
}: TZustandTesterProps) {
  const { selectedItem, select, unselect } = useSelectedItemStore();
  const handleCheck: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      if (e.target.checked) {
        select(item);
      } else {
        unselect();
      }
    },
    [item, select, unselect]
  );
  const isChecked = selectedItem?.name === item.name;
  return (
    <RenderingDisplayedWrapper>
      <Item item={item} isChecked={isChecked} handleCheck={handleCheck} />
      <TestComponent2 />
    </RenderingDisplayedWrapper>
  );
});

export function ZustandTester() {
  return (
    <RenderingDisplayedWrapper>
      <TestComponent1 />
      {items.map((item) => (
        <ZustandTesterItem key={item.name} item={item} />
      ))}
    </RenderingDisplayedWrapper>
  );
}
