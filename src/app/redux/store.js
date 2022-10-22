
import { configureStore } from '@reduxjs/toolkit';
import bananas from "./counterSlice";

export const store = configureStore({
  reducer: {
    counterReducer: bananas,
  },
})

