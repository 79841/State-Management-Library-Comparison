"use client";
import { items } from "@/data/item";
import { TItem } from "@/types/Item";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { selectedItemAtom } from "@/lib/recoil/selectedItem";
import { ChangeEventHandler, memo, useCallback } from "react";
import { TestComponent1, TestComponent2 } from "@/components/testComponent";
import { Item } from "@/components/item";
import { RenderingDisplayedWrapper } from "@/components/testComponent/RenderingDisplayedWrapper";

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
    <RenderingDisplayedWrapper>
      <Item item={item} isChecked={isChecked} handleCheck={handleCheck} />
      <TestComponent2 />
    </RenderingDisplayedWrapper>
  );
});

export function RecolilTester() {
  return (
    <RecoilRoot>
      <RenderingDisplayedWrapper>
        <TestComponent1 />
        {items.map((item) => (
          <RecoilTesterItem key={item.name} item={item} />
        ))}
      </RenderingDisplayedWrapper>
    </RecoilRoot>
  );
}
