import { createSlice } from "@reduxjs/toolkit";
import uniqueId from "lodash.uniqueid";

const slice = createSlice({
  name: "todo",
  initialState: {
    value: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.value.push({
        text: action.payload,
        id: uniqueId(),
        completed: false,
      });
    },

    removeTodo: (state, action) => {
      state.value = state.value.filter((todo) => todo.id !== action.payload);
    },

    toggleComplete: (state, action) => {
      const toggleTodo = state.value.find((todo) => todo.id === action.payload);
      toggleTodo.completed = !toggleTodo.completed;
    },

    renameTodo: (state, action) => {
      const renameTodo = state.value.find((todo) => todo.id === action.payload);
      renameTodo.text = prompt("Введите новое имя для задачи", renameTodo.text);
    },
  },
});

export const { addTodo, removeTodo, renameTodo, toggleComplete } =
  slice.actions;

export default slice.reducer;
