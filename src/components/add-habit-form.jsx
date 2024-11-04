import { useState } from "react";
import { useDispatch } from "react-redux";
import { addHabit } from "../store/habit-slice";
import { Button, MenuItem, TextField, Typography, Box } from "@mui/material";

const AddHabitForm = () => {
  const [name, setName] = useState("");
  const [frequency, setFrequency] = useState("daily");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      dispatch(addHabit({ name, frequency }));
      setName("");
      setFrequency("daily");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
    >
      <Typography variant="h6">Add New Habit</Typography>

      <TextField
        label="Habit Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <TextField
        select
        label="Frequency"
        value={frequency}
        onChange={(e) => setFrequency(e.target.value)}
      >
        <MenuItem value="daily">Daily</MenuItem>
        <MenuItem value="weekly">Weekly</MenuItem>
        <MenuItem value="monthly">Monthly</MenuItem>
      </TextField>

      <Button type="submit" variant="contained" color="primary">
        Add Habit
      </Button>
    </Box>
  );
};

export default AddHabitForm;
