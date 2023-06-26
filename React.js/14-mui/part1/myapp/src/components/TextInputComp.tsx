import {
  Paper,
  TextField,
  Container,
  Stack,
  InputAdornment,
} from "@mui/material";
import React from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const TextInputComp = () => {
  return (
    <Container>
      <Paper sx={{ mt: 5 }}>
        <Stack width={"250px"} spacing={5}>
          <TextField
            type="email"
            required
            variant="outlined"
            label="email"
            color="secondary"
          />
          <TextField variant="filled" label="name" color="success" />
          <TextField
            variant="standard"
            label="password"
            color="warning"
            type={"password"}
            InputProps={{
              readOnly: true,
              endAdornment: (
                <InputAdornment position="end">
                  <RemoveRedEyeIcon />
                </InputAdornment>
              ),
            }}
          />
        </Stack>
      </Paper>
      <TextField
        type="number"
        label="amount"
        sx={{ my: 5 }}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
          endAdornment: <InputAdornment position="end"></InputAdornment>,
        }}
      />
    </Container>
  );
};

export default TextInputComp;
