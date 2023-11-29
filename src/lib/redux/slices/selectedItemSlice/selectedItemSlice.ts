import { TItem } from "@/types/Item";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TSelectedItemSliceState = TItem | null;

const initialState = null as TSelectedItemSliceState;

export const selectedItemSlice = createSlice({
  name: "selectedItem",
  initialState,
  reducers: {
    select: (state, action: PayloadAction<TItem>) => {
      return action.payload;
    },
    unselect: (state, action: PayloadAction) => {
      return null;
    },
  },
});

export const selectedItemSliceActions = selectedItemSlice.actions;
