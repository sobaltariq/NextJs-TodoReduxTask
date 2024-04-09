"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const TasksSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrementByAmount: (state, action) => {
      state.value -= action.payload;
    },
  },
});

export const { increment, incrementByAmount } = TasksSlice.actions;

export default TasksSlice.reducer;
