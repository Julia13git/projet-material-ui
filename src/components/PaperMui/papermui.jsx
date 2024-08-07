import { Paper, Typography } from "@mui/material";

export default function PaperMui() {
  return (
    <Paper sx={{ padding: "32px", margin: "15px" }} elevation={4}>
      <Typography variant="h3">Paper component</Typography>
    </Paper>
  );
}
