import { configureStore } from "@reduxjs/toolkit";
import sliceReducer from "./calcSlice";

export default configureStore({
  reducer: {
    calculator: sliceReducer,
    /*
    converter,
    chess,
    todo,
    */
  },
});
