import { TItem } from "@/types/Item";
import { ChangeEventHandler, ComponentPropsWithoutRef, memo } from "react";
import { RenderingDisplayedWrapper } from "../testComponent/RenderingDisplayedWrapper";

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
    <RenderingDisplayedWrapper>
      <input type="checkbox" checked={isChecked} onChange={handleCheck} />
      <span>{item.name}</span>
    </RenderingDisplayedWrapper>
  );
});
