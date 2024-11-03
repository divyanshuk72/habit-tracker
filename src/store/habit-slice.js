import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  habits: [],
};

const habitSlice = createSlice({
  name: "habits",
  initialState,
  reducers: {
    addHabit: (state, action) => {
      const newHabit = {
        id: Date.now().toString(),
        name: action.payload.name,
        frequency: action.payload.frequency,
        completedDates: [],
        createdAt: new Date().toISOString(),
      };
      state.habits.push(newHabit);
    },
  },
});

export const { addHabit } = habitSlice.actions;
export default habitSlice.reducer;
