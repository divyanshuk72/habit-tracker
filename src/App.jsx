import { Box, Container, Typography } from "@mui/material";
import AddHabitForm from "./components/add-habit-form";
import HabitList from "./components/habit-list";
import HabitStatistics from "./components/habit-stats";

function App() {
  return (
    <>
      <Container maxWidth="md">
        <Box sx={{ my: 4 }}>
          <Typography component="h1" variant="h2" align="center">
            Habit Tracker
          </Typography>
          <AddHabitForm />
          <HabitList />
          <HabitStatistics />
        </Box>
      </Container>
    </>
  );
}

export default App;
