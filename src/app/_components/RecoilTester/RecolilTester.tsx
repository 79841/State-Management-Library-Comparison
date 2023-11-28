"use client";
import { items } from "@/data/item";
import { TItem } from "@/types/Item";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { selectedItemAtom } from "@/lib/recoil/selectedItem";
import { ChangeEventHandler } from "react";

type TRecoillTesterItemProps = {
  item: TItem;
};

function RecoilTesterItem({ item }: TRecoillTesterItemProps) {
  const selectedItem = useRecoilValue(selectedItemAtom);
  const setSelectedItemState = useSetRecoilState(selectedItemAtom);

  const handleCheck: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.checked) {
      setSelectedItemState((_) => item);
    } else {
      setSelectedItemState((_) => null);
    }
  };

  const isChecked = selectedItem?.name == item.name;

  return (
    <div>
      <input type="checkbox" onChange={handleCheck} checked={isChecked} />
      <span>{item.name}</span>
      <TestComponent2 />
    </div>
  );
}

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

function TestComponent1() {
  return <div className="m-4">test component 1</div>;
}

function TestComponent2() {
  return <div className="m-4">test component 2</div>;
}
