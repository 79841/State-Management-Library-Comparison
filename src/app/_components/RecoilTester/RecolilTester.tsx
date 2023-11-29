"use client";
import { items } from "@/data/item";
import { TItem } from "@/types/Item";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { selectedItemAtom } from "@/lib/recoil/selectedItem";
import { ChangeEventHandler, memo, useCallback } from "react";
import { TestComponent1, TestComponent2 } from "@/components/testComponent";
import { Item } from "@/components/item";

type TRecoillTesterItemProps = {
  item: TItem;
};

const RecoilTesterItem = memo(function RecoilTesterItem({
  item,
}: TRecoillTesterItemProps) {
  const selectedItem = useRecoilValue(selectedItemAtom);
  const setSelectedItemState = useSetRecoilState(selectedItemAtom);

  const handleCheck: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      if (e.target.checked) {
        setSelectedItemState((_) => item);
      } else {
        setSelectedItemState((_) => null);
      }
    },
    [item, setSelectedItemState]
  );

  const isChecked = selectedItem?.name == item.name;

  return (
    <div>
      <Item item={item} isChecked={isChecked} handleCheck={handleCheck} />
      <TestComponent2 />
    </div>
  );
});

export function RecolilTester() {
  return (
    <RecoilRoot>
      <div className="p-4">
        <TestComponent1 />
        {items.map((item) => (
          <RecoilTesterItem key={item.name} item={item} />
        ))}
      </div>
    </RecoilRoot>
  );
}
