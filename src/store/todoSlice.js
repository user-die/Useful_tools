import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'todo',
    initialState: {
        value: {},
    },
    reducers: {
        addTodo,
        removeTodo,
        completeTodo,
        renameTodo
    }
})

export const { addTodo, removeTodo, renameTodo, completeTodo} = slice.actions;

export default slice.reducer;