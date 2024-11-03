import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";

const AddHabitForm = () => {
  const [name, setName] = useState("");
  const [frequency, setFrequency] = useState("Daily");

  return (
    <form>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <TextField
          label="Habit Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Enter Habit Name"
          fullWidth
        />
        <FormControl fullWidth>
          <InputLabel>Frequency</InputLabel>
          <Select
            value={frequency}
            onChange={(e) => {
              setFrequency(e.target.value);
            }}
          >
            <MenuItem value="Daily">Daily</MenuItem>
            <MenuItem value="Weekly">Weekly</MenuItem>
          </Select>
        </FormControl>
        <Button type="submit" variant="contained" color="primary">
          Add Habit
        </Button>
      </Box>
    </form>
  );
};

export default AddHabitForm;
