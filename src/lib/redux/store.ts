import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";

export const reduxStore = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export type TReduxState = ReturnType<typeof reduxStore.getState>;
