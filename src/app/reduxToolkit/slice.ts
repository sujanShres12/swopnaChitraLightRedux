import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  number: 1,
};

const Slice = createSlice({
  name: "checkSlice",
  initialState,
  reducers: {
    increase: (state) => {
      state.number = state.number + 1;
    },
  },
});

export const { increase } = Slice.actions;
export default Slice.reducer;
