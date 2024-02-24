import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "calculator",
  initialState: {
    value: [],
  },
  reducers: {
    addSymbol: (state, action) => {
      state.value.push(action.payload);
    },

    removeSymbol: (state, action) => {
      state.value.pop(action.payload);
    },

    calcResult: (state, action) => {
      state.value = eval(action.payload);
    },
  },
});

export const { addSymbol, removeSymbol, calcResult } = slice.actions;

export default slice.reducer;
