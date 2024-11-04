import { configureStore } from "@reduxjs/toolkit";
import habitsReducer from "./habit-slice";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("habits");
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (err) {
    console.warn("Error loading state from localStorage", err);
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state.habits.habits);
    localStorage.setItem("habits", serializedState);
  } catch (err) {
    console.error("Error saving state to localStorage", err);
  }
};

const store = configureStore({
  reducer: {
    habits: habitsReducer,
  },
  preloadedState: { habits: { habits: loadState() || [] } },
});

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
