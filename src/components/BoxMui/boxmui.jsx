import { Box, Stack, Typography } from "@mui/material";

export default function BoxMui() {
  return (
    <Stack spacing={2}>
      <Typography variant="h3">Box component</Typography>
      <Box>Codevolution</Box>
      <Box
        component="span"
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          height: "100px",
          width: "100px",
          padding: "16px",
          "&:hover": {
            backgroundColor: "primary.light",
          },
        }}
      >
        Codevolution
      </Box>
      <Box
        display="flex"
        height="100px"
        width="100px"
        bgcolor="success.light"
        p={2} // p={2} = 16px
      ></Box>
    </Stack>
  );
}
