import React from "react";
import logo from "./logo.svg";
// import './App.css';
import SelectCom from "./components/SelectCom";
import TypographyComp from "./components/TypographyComp";
import ButtonsComp from "./components/ButtonsComp";
import { Box, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import TextInputComp from "./components/TextInputComp";
import SignInSide from "./components/SignInSide";
import RadioButton from "./components/RadioButton";

function App() {
  return (
    <div className="App">
      {/* <IconButton aria-label="Send button">
        <SendIcon />
      </IconButton> */}
      {/* <TextInputComp /> */}
      <SelectCom/>
      {/* <TypographyComp/> */}
      {/* <ButtonsComp /> */}
      {/* <SignInSide/> */}
      <RadioButton/>
    </div>
  );
}

export default App;
