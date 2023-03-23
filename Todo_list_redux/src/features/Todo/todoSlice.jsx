import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 0,
    todo: "work",
    compelete: false,
  },
  {
    id: 1,
    todo: "read",
    compelete: false,
  },
];

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodoItem: (state, action) => {
      state.push(action.payload);
    },
    removeTodoItem: (state, action) => {
      state.splice(
        state.findIndex((item) => item.id === action.payload),
        1
      );
    },
    compeleteTodoItem: (state, action) => {
      if (
        state[state.findIndex((item) => item.id === action.payload)]
          .compelete === false
      ) {
        state[
          state.findIndex((item) => item.id === action.payload)
        ].compelete = true;
      } else {
        state[
          state.findIndex((item) => item.id === action.payload)
        ].compelete = false;
      }
    },
  },
});

export const { addTodoItem, removeTodoItem, compeleteTodoItem } =
  todoSlice.actions;
export default todoSlice.reducer;
