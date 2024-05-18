import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numberValue: 5,
};

const numberSlice = createSlice({
  name: "number",
  initialState,
  reducers: {
    increment: (state) => {
      state.numberValue += 1;
    },
    decrement: (state) => {
      state.numberValue -= 1;
    },
  },
});

export default numberSlice.reducer;
export const { increment, decrement } = numberSlice.actions;
export const selectNumber = (state) => state.number.numberValue;
