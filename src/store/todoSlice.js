import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'todo',
    initialState: {
        value: {},
    },
    reducers: {
        addTodo: (state, action) => {

        },
        removeTodo: (state, action) => {

        },
        completeTodo: (state, action) => {

        },
        renameTodo: (state, action) => {

        }
    }
})

export const { addTodo, removeTodo, renameTodo, completeTodo} = slice.actions;

export default slice.reducer;