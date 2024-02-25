import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "converter",
  initialState: {
    type: 'length',
    input1: '',
    input2: '',
  },
  reducers: {
    changeType: (state, action) => {
      state.type = (action.payload);
    },
    
    changeInput1: (state, action) => {
      state.input1 = (action.payload);
    },

    changeInput2: (state, action) => {
      state.input2 = (action.payload);
    },

    calcResult: (state, action) => {
      state.value = eval(action.payload);
    },
  },
});

export const {changeType, changeInput1, changeInput2, calcResult } = slice.actions;

export default slice.reducer;