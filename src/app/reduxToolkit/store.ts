import { configureStore } from "@reduxjs/toolkit";
import increamentReducer from "@/app/reduxToolkit/slice";
export const store = configureStore({
  reducer: {
    increamentReducer,
  },
});

export type Dispatch=typeof store.dispatch;

