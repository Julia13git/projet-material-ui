import { Box, Grid, Stack, Typography } from "@mui/material";

export default function GridMui() {
  return (
    <Stack spacing={2}>
      <Typography variant="h3">Grid component</Typography>
      <Grid container my={4} rowSpacing={2} columnSpacing={1}>
        {/* Five breakpoints: xs="mobiles"/ sm="tablets"/ md="desktop"/ xl(lg)="larger monitors" */}
        {/* there are 12 available columns for an item. for example,  xs="3" === 25% et xs="9" ===
        75% */}
        {/* xs="auto" takes the width an item needs */}
        <Grid item xs={12} sm={6}>
          <Box bgcolor="primary.light" p={2}>
            Item 1
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box bgcolor="primary.light" p={2}>
            Item 2
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box bgcolor="primary.light" p={2}>
            Item 3
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box bgcolor="primary.light" p={2}>
            Item 4
          </Box>
        </Grid>
      </Grid>
    </Stack>
  );
}
