import { TItem } from "@/types/Item";
import { atom } from "recoil";

type TSelectedItem = TItem | null;

export const selectedItemAtom = atom<TSelectedItem>({
  key: "selectedItem",
  default: null,
});
