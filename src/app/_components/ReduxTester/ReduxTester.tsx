"use client";
import { Item } from "@/components/item";
import { TestComponent1, TestComponent2 } from "@/components/testComponent";
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
    <div>
      <Item item={item} isChecked={isChecked} handleCheck={handleCheck} />
      <TestComponent2 />
    </div>
  );
});

export function ReduxTester() {
  return (
    <Providers>
      <div className="p-4">
        <TestComponent1 />
        {items.map((item) => (
          <ReduxTesterItem key={item.name} item={item} />
        ))}
      </div>
    </Providers>
  );
}
