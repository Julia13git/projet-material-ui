import { Box, MenuItem, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function SelectMui() {
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState([]);

  // console.log({ country });
  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  // console.log({ countries });
  const handleChangeCountries = (event) => {
    setCountries(event.target.value);
  };

  return (
    <Stack spacing={2}>
      <Typography variant="h3">Select component</Typography>
      <Box width="250px">
        <TextField
          fullWidth
          label="Select country"
          select
          value={country}
          onChange={handleChange}
        >
          <MenuItem value="IN">India</MenuItem>
          <MenuItem value="US">USA</MenuItem>
          <MenuItem value="AU">Australia</MenuItem>
        </TextField>
      </Box>
      <Box width="250px">
        <TextField
          fullWidth
          label="Select country"
          select
          value={countries}
          onChange={handleChangeCountries}
          SelectProps={{ multiple: true }}
          size="small"
          color="secondary"
          helperText="Please, select your country"
          error
        >
          <MenuItem value="IN">India</MenuItem>
          <MenuItem value="US">USA</MenuItem>
          <MenuItem value="AU">Australia</MenuItem>
        </TextField>
      </Box>
    </Stack>
  );
}
