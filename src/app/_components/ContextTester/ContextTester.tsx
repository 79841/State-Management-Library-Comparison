"use client";
import { Item } from "@/components/item";
import { TestComponent1, TestComponent2 } from "@/components/testComponent";
import { RenderingDisplayedWrapper } from "@/components/testComponent/RenderingDisplayedWrapper";
import {
  SelectedItemContextProvider,
  useSelectedItemContext,
  useSelectedItemDispatchContext,
} from "@/context/SelectedItemContext";
import { items } from "@/data/item";
import { TItem } from "@/types/Item";
import { ChangeEventHandler, memo, useCallback } from "react";

type TContextTesterItemProps = {
  item: TItem;
};

const ContextTesterItem = memo(function ContextTesterItem({
  item,
}: TContextTesterItemProps) {
  const selectedItem = useSelectedItemContext();
  const { selectItem, unselectItem } = useSelectedItemDispatchContext();

  const handleCheck: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      if (e.target.checked) {
        selectItem(item);
      } else {
        unselectItem();
      }
    },
    [item, selectItem, unselectItem]
  );

  const isChecked = selectedItem?.name === item.name;

  return (
    <RenderingDisplayedWrapper>
      <Item item={item} isChecked={isChecked} handleCheck={handleCheck} />
      <TestComponent2 />
    </RenderingDisplayedWrapper>
  );
});

export function ContextTester() {
  return (
    <SelectedItemContextProvider>
      <RenderingDisplayedWrapper>
        <TestComponent1 />
        {items.map((item: TItem) => (
          <ContextTesterItem key={item.name} item={item} />
        ))}
      </RenderingDisplayedWrapper>
    </SelectedItemContextProvider>
  );
}
