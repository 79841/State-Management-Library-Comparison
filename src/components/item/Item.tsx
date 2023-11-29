import { TItem } from "@/types/Item";
import { ChangeEventHandler, ComponentPropsWithoutRef, memo } from "react";

type TItemProps = {
  item: TItem;
  isChecked: boolean;
  handleCheck: ChangeEventHandler<HTMLInputElement>;
};
export const Item = memo(function Item({
  item,
  isChecked,
  handleCheck,
}: TItemProps) {
  return (
    <div>
      <input type="checkbox" checked={isChecked} onChange={handleCheck} />
      <span>{item.name}</span>
    </div>
  );
});
