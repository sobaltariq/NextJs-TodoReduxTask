"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlicer";

// const rootReducer = combineReducers({
//   counter: counterReducer,
//   //add all your reducers here
// });

// export const store = configureStore({
//   reducer: rootReducer,
// });
export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
