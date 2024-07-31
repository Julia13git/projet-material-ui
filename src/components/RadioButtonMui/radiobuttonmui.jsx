import {
  Box,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function RadioButtonMui() {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  // console.log({ value });
  return (
    <Stack spacing={2}>
      <Typography variant="h3">Radio Button component</Typography>
      <Box>
        <FormControl>
          <FormLabel id="job-experience-group-label" error>
            Years of experience
          </FormLabel>
          <RadioGroup
            name="job-experience-group"
            aria-labelledby="job-experience-group-label"
            value={value}
            onChange={handleChange}
            row
          >
            <FormControlLabel
              control={<Radio size="medium" color="secondary" />}
              label="0-2"
              value="0-2"
            />
            <FormControlLabel control={<Radio />} label="3-5" value="3-5" />
            <FormControlLabel control={<Radio />} label="6-10" value="6-10" />
          </RadioGroup>
          <FormHelperText>Invalid selection</FormHelperText>
        </FormControl>
      </Box>
    </Stack>
  );
}
