import React, { useEffect, useState } from "react";
import {
  Stack,
  Button,
  IconButton,
  Box,
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ReplyIcon from "@mui/icons-material/Reply";

const ButtonsComp = () => {
  const [direction, setDirection] = useState<string | null>("");

  const handleChange = (
    ev: React.MouseEvent<HTMLElement>,
    newDirection: string | null
  ) => {
    setDirection(newDirection);
  };

  useEffect(() => {
    console.log(direction);
  }, [direction]);
  return (
    <>
      <Stack spacing={2} direction={"row"}>
        <Button variant="text">Click</Button>
        <Button variant="outlined">Click</Button>
        <Button variant="contained">Click</Button>
      </Stack>
      <Stack spacing={2} direction={"row"}>
        <Button variant="text" color="secondary" size="large">
          Click
        </Button>
        <Button variant="outlined" color="error" size="medium">
          Click
        </Button>
        <Button variant="contained">Click</Button>
      </Stack>
      <Stack spacing={2} direction={"row"}>
        <Button
          startIcon={<SendIcon />}
          variant="contained"
          color="secondary"
          size="large"
          onClick={() => {
            console.log("hi");
          }}
        >
          Send
        </Button>
        <Button
          endIcon={<ReplyIcon />}
          variant="contained"
          color="error"
          size="medium"
        >
          Reply
        </Button>
        <Button variant="contained">Click</Button>
      </Stack>
      <Stack direction={"row"}>
        <ButtonGroup variant="outlined" orientation="vertical">
          <Button
            onClick={() => {
              console.log("left");
            }}
          >
            Left
          </Button>
          <Button>center</Button>
          <Button>right</Button>
        </ButtonGroup>
      </Stack>
      <ToggleButtonGroup exclusive value={direction} onChange={handleChange}>
        <ToggleButton value="left">left</ToggleButton>
        <ToggleButton value="center">center</ToggleButton>
        <ToggleButton value="right">right</ToggleButton>
      </ToggleButtonGroup>
    </>
  );
};

export default ButtonsComp;
