"use client";
import { Item } from "@/components/item";
import { TestComponent1, TestComponent2 } from "@/components/testComponent";
import { RenderingDisplayedWrapper } from "@/components/testComponent/RenderingDisplayedWrapper";
import { items } from "@/data/item";
import { selectSelectedItem, selectedItemSliceActions } from "@/lib/redux";
import { Providers } from "@/lib/redux/providers";
import { TItem } from "@/types/Item";
import { ChangeEventHandler, memo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

type TReduxTesterItemProps = {
  item: TItem;
};
const ReduxTesterItem = memo(function ReduxTesterItem({
  item,
}: TReduxTesterItemProps) {
  const selectedItem = useSelector(selectSelectedItem);
  const dispatch = useDispatch();

  const handleCheck: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      if (e.target.checked) {
        dispatch(selectedItemSliceActions.select(item));
      } else {
        dispatch(selectedItemSliceActions.unselect());
      }
    },
    [dispatch, item]
  );

  const isChecked = selectedItem?.name === item.name;

  return (
    <RenderingDisplayedWrapper>
      <Item item={item} isChecked={isChecked} handleCheck={handleCheck} />
      <TestComponent2 />
    </RenderingDisplayedWrapper>
  );
});

export function ReduxTester() {
  return (
    <Providers>
      <RenderingDisplayedWrapper>
        <TestComponent1 />
        {items.map((item) => (
          <ReduxTesterItem key={item.name} item={item} />
        ))}
      </RenderingDisplayedWrapper>
    </Providers>
  );
}
