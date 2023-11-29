import { selectedItemSlice } from "./slices/selectedItemSlice";

export const rootReducer = {
  selectedItem: selectedItemSlice.reducer,
};
