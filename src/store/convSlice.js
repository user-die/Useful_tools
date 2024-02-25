import { createSlice } from "@reduxjs/toolkit";
import jsonData from "./../Components/data.json";

const slice = createSlice({
  name: "converter",
  initialState: {
    type: "length",
    select1: "",
    select2: "",
    input1: 0,
    input2: 0,
  },
  reducers: {
    changeType: (state, action) => {
      state.type = action.payload;
    },

    changeSelect1: (state, action) => {
      state.select1 = action.payload;
    },

    changeSelect2: (state, action) => {
      state.select2 = action.payload;
    },

    changeInput1: (state, action) => {
      state.input1 = Number(action.payload);
    },

    calculate: (state, action) => {
      const data = Object.entries(jsonData).filter(
        (el) => el[0] === state.type
      )[0];

      let number1 = data[1][state.select2];
      let number2 = data[1][state.select1];

      console.log(number1);

      state.input2 = parseFloat(
        ((number1 / number2) * state.input1).toFixed(10)
      );
    },
  },
});

export const {
  changeType,
  changeSelect1,
  changeSelect2,
  changeInput1,
  calculate,
} = slice.actions;

export default slice.reducer;
