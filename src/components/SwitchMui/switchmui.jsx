import {
  Box,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function SwitchMui() {
  const [checked, setChecked] = useState(false);
  const [skills, setSkills] = useState([]);

  const handleSkills = (event) => {
    const index = skills.indexOf(event.target.value);
    if (index === -1) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills(skills.filter((skill) => skill !== event.target.value));
    }
  };
  //   console.log({ skills });

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  //   console.log({ checked });

  return (
    <Stack spacing={2}>
      <Typography variant="h3">Switch component</Typography>
      <Box>
        <FormControlLabel
          label="Dark mode"
          control={<Switch checked={checked} onChange={handleChange} />}
        />
      </Box>
      <Box>
        <FormControlLabel
          label="Dark mode"
          control={
            <Switch
              checked={checked}
              onChange={handleChange}
              size="small"
              color="success"
            />
          }
        />
      </Box>
      <Box>
        <FormControl error>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="HTML"
              control={
                <Switch
                  value="html"
                  checked={skills.includes("html")}
                  onChange={handleSkills}
                />
              }
            />
            <FormControlLabel
              label="CSS"
              control={
                <Switch
                  value="css"
                  checked={skills.includes("css")}
                  onChange={handleSkills}
                />
              }
            />
            <FormControlLabel
              label="JavaScript"
              control={
                <Switch
                  value="javascript"
                  checked={skills.includes("javascript")}
                  onChange={handleSkills}
                />
              }
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Stack>
  );
}
