import React from "react";
import { Typography } from "@mui/material";

const TypographyComp = () => {
  return (
    <>
      <Typography sx={{color: 'red', my: '50px'}} variant="h1">TypographyComp</Typography>
      <Typography variant="h2">TypographyComp</Typography>
      <Typography variant="h3">TypographyComp</Typography>
      <Typography variant="h4">TypographyComp</Typography>
      <Typography variant="h5">TypographyComp</Typography>
      <Typography>TypographyComp</Typography>
      <Typography variant="body1">TypographyComp</Typography>
      <Typography variant="body2">TypographyComp</Typography>
      <Typography variant="subtitle1">TypographyComp</Typography>
    </>
  );
};

export default TypographyComp;
