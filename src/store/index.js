import { configureStore } from "@reduxjs/toolkit";
import calcReducer from "./calcSlice";
import todoReducer from './todoSlice'

export default configureStore({
  reducer: {
    calculator: calcReducer,
    todo: todoReducer,

    /*
    converter,
    chess,
    */
  },
});
