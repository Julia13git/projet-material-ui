import {
  Button,
  Stack,
  Typography,
  IconButton,
  ButtonGroup,
} from "@mui/material";

import SendIcon from "@mui/icons-material/Send";

export default function ButtonMui() {
  return (
    <>
      <Typography variant="h3">Buttons types</Typography>
      <Stack direction="row" spacing={2} mb={2}>
        <Button variant="text">Text</Button>
        <Button variant="text" href="https://google.com">
          Text-Link
        </Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      <Typography variant="h3">Buttons size</Typography>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </Stack>
      <Typography variant="h3">Buttons and icons</Typography>
      <Stack direction="row" spacing={2}>
        {/* with box-shadow: 0px 3px 1px -2px ....*/}
        <Button variant="contained" startIcon={<SendIcon />}>
          Send{" "}
        </Button>
        {/* without ripple effect */}
        <Button variant="contained" startIcon={<SendIcon />} disableRipple>
          disableRipple{" "}
        </Button>
        {/* disableElevation === box-shadow: none */}
        <Button variant="contained" endIcon={<SendIcon />} disableElevation>
          disableElevation{" "}
        </Button>
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          onClick={() => alert("Clicked!")}
        >
          Clicked!{" "}
        </Button>
        <IconButton>
          <SendIcon aria-label="send" color="success" size="small"></SendIcon>
        </IconButton>
        <IconButton>
          <SendIcon aria-label="send" color="success" size="large"></SendIcon>
        </IconButton>
      </Stack>
      <Typography variant="h3">Buttons colors</Typography>
      <Stack direction="row" spacing={2} mb={2}>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
      </Stack>
      <Typography variant="h3">Button Group</Typography>
      <Stack direction="row">
        <ButtonGroup variant="contained" aria-label="alignment button group">
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
      <Typography variant="h4">Vertical Button Group</Typography>
      <Stack direction="row">
        <ButtonGroup
          variant="text"
          orientation="vertical"
          size="small"
          color="secondary"
          aria-label="alignment button group"
        >
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
    </>
  );
}
