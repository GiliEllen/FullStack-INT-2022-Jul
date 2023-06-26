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
    </div>
  );
}

export default App;
