import { Autocomplete, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

const skills = ["HTML", "CSS", "JavaScript", "TypeScript", "React"];

export default function AutocompleteMui() {
  const [value, setValue] = useState(null);
  //   console.log({ value });

  const [skill, setSkill] = useState(null);
  //   console.log({ skill });

  const skillsOptions = skills.map((skill, index) => ({
    id: index + 1,
    label: skill,
  }));

  return (
    <Stack spacing={2}>
      <Typography variant="h3">Autocomplete component</Typography>
      <Stack spacing={2} width="250px">
        <Autocomplete
          options={skills}
          renderInput={(params) => <TextField {...params} label="Skills" />}
          value={value}
          onChange={(event, newValue) => setValue(newValue)}
          freeSolo
        />
        <Autocomplete
          options={skillsOptions}
          renderInput={(params) => <TextField {...params} label="Skills" />}
          value={skill}
          onChange={(event, newValue) => setSkill(newValue)}
        />
      </Stack>
    </Stack>
  );
}
