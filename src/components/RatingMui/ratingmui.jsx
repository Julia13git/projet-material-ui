import { Rating, Stack, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";

export default function RatingMui() {
  const [value, setValue] = useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log({ value });

  return (
    <Stack spacing={2}>
      <Typography variant="h3">Rating component</Typography>
      <Rating value={value} onChange={handleChange} />
      <Rating
        value={value}
        onChange={handleChange}
        precision={0.5}
        size="large"
      />
      <Rating
        value={value}
        onChange={handleChange}
        precision={0.5}
        size="large"
        icon={<FavoriteIcon fontSize="inherit" color="error" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
      <Rating
        value={3}
        onChange={handleChange}
        size="small"
        icon={<FavoriteIcon fontSize="inherit" color="error" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        readOnly
      />
      <Rating
        value={3}
        onChange={handleChange}
        size="small"
        icon={<FavoriteIcon fontSize="inherit" color="error" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        highlightSelectedOnly
      />
    </Stack>
  );
}
