import Calendar from "react-calendar";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import "react-calendar/dist/Calendar.css";

const HabitHistory = ({ habitId }) => {
  const { habits } = useSelector((state) => state.habits);
  const habit = habits.find((h) => h.id === habitId);

  const getTileClass = ({ date, view }) => {
    if (view === "month") {
      const dateString = date.toISOString().split("T")[0];
      return habit?.completedDates.includes(dateString) ? "highlight" : null;
    }
    return null;
  };

  return (
    <div style={{ margin: "20px" }}>
      <Typography variant="h6" gutterBottom>
        Habit History for {habit?.name}
      </Typography>
      <Calendar tileClassName={getTileClass} maxDate={new Date()} />
      <style>
        {`
          .highlight {
            background-color: #4caf50 !important;
            color: white !important;
            border-radius: 50%;
          }
        `}
      </style>
    </div>
  );
};

export default HabitHistory;
