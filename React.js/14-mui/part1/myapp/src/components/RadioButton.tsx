import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  FormControlLabel,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  Typography,
  TextField,
} from "@mui/material";

const RadioButton = () => {
  const [value, setValue] = useState("");
  const [randomInput, setRandomInput] = useState("");
  const renders = useRef(0); //value presist = same between renders
  // value change does not trigger rerenders
  const inputElement = useRef<HTMLInputElement>(null);
  const previousInputValue = useRef("");

  const focusInput = () => {
    if (inputElement && inputElement.current !== null)
      inputElement.current.focus();
  };

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setValue(ev.target.value);
  };
  const handleTextInput = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setRandomInput(ev.target.value);
    // renders.current++;
  };

  useEffect(() => {
    renders.current++;
  });

  useEffect(() => {

    previousInputValue.current = randomInput;
  }, [randomInput]);

  return (
    <Box>
      <FormControl>
        <FormLabel id="fav-animal-group-label">Favorite Animal</FormLabel>
        <RadioGroup
          name="fav-animal-group"
          aria-labelledby="fav-animal-group-label"
          value={value}
          onChange={handleChange}
          row
        >
          <FormControlLabel control={<Radio size="small" color="secondary"/>} label="cat" value="cat" />
          <FormControlLabel control={<Radio />} label="dog" value="dog" />
          <FormControlLabel control={<Radio />} label="rabbit" value="rabbit" />
        </RadioGroup>
      </FormControl>

      <TextField
        value={randomInput}
        label={"Random"}
        onChange={handleTextInput}
      />
      <Typography>Renders: {renders.current}</Typography>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>

      <h2>Current Value: {randomInput}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2>
    </Box>
  );
};

export default RadioButton;
