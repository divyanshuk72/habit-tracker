import { Paper, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const HabitStatistics = () => {
  const { habits } = useSelector((state) => state.habits);

  const getCompletedToday = () => {
    const today = new Date().toISOString().split("T")[0];
    return habits.filter((habit) => habit.completedDates.includes(today))
      .length;
  };

  const getStreak = (habit) => {
    let streak = 0;
    const currentDate = new Date();

    while (true) {
      const dateString = currentDate.toISOString().split("T")[0];

      if (habit.completedDates.includes(dateString)) {
        streak++;
        currentDate.setDate(currentDate.getDate() - 1);
      } else {
        break;
      }
    }

    return streak;
  };

  const getLongestStreak = () => {
    return Math.max(...habits.map(getStreak), 0);
  };

  return (
    <Paper elevation={2} sx={{ p: 2, mt: 4 }}>
      <Typography variant="h6" gutterBottom>
        Habit Statistics
      </Typography>
      <Typography variant="body1">Total Habits : {habits.length}</Typography>
      <Typography variant="body1">
        Completed Today : {getCompletedToday()}
      </Typography>
      <Typography variant="body1">
        Longest Streak : {getLongestStreak()}
      </Typography>
    </Paper>
  );
};

export default HabitStatistics;
