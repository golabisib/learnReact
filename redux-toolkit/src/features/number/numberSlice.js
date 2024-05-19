import { createSlice } from "@reduxjs/toolkit";
import { increment as incrementCounter } from "../counter/counterSlice";
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
  extraReducers: (builder) => {
    builder.addCase(incrementCounter, (state) => {
        state.numberValue++;
    });
  },
});

export default numberSlice.reducer;
export const { increment, decrement } = numberSlice.actions;
export const selectNumber = (state) => state.number.numberValue;
