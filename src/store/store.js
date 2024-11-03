import { configureStore } from "@reduxjs/toolkit";
import habitsReducer from "./habit-slice";

const store = configureStore({
  reducer: {
    habits: habitsReducer,
  },
});

export default store;
