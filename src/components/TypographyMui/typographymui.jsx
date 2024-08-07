import { Stack, Typography } from "@mui/material";

export default function TypographyMui() {
  return (
    <Stack>
      {/* Le composant Typography */}
      <Typography variant="h1">Heading-h1</Typography>
      <Typography variant="h2">Heading-h2</Typography>
      <Typography variant="h3">Heading-h3</Typography>
      <Typography variant="h4">Heading-h4</Typography>
      <Typography variant="h5">Heading-h5</Typography>
      <Typography variant="h6">Heading-h6</Typography>
      <Typography variant="subtitle1">Heading-subtitle1</Typography>
      <Typography variant="subtitle2">Heading-subtitle2</Typography>

      {/* body === <p></p> */}
      <Typography variant="body1">Heading-body1</Typography>
      <Typography variant="body2">Heading-body2</Typography>

      {/* le role de h2 mais le style de h4 */}
      <Typography variant="h4" component="h2">
        Heading-style-h4 le role-h2
      </Typography>

      {/* gutterBottom === margin-bottom: 0.35em;    */}
      <Typography variant="h5" component="h3" gutterBottom>
        Heading- gutterBottom(margin 0.35em)
      </Typography>
    </Stack>
  );
}
