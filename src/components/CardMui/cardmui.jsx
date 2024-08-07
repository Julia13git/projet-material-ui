import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import logo from "../../logo.svg";

export default function CardMui() {
  return (
    <Box width="300px" m={2}>
      <Card>
        <CardMedia
          component="img"
          height={140}
          image={logo}
          alt="react image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Card component
          </Typography>
          <Typography variant="body2" color="text.secondary">
            React is a JavaScript library for building user interfaces. React
            can be used as a base in the development of single-page or mobile
            applications.
          </Typography>
        </CardContent>
        <CardActions>
          <Button>Share</Button>
          <Button>Learn more</Button>
        </CardActions>
      </Card>
    </Box>
  );
}
