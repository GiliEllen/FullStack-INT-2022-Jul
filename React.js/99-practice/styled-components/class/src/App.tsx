import React, {useState} from "react";
import logo from "./logo.svg";
import "./App.css";
import StyleButton, {
  FancyButton,
  SubmitButton,
  DarkButton
} from "./components/Button/Button";
import ComponentA from "./components/componentsA/ComponentA";
import NewDiv, { AnimatedLogo } from "./components/Div/NewDiv";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const theme = {
  dark: {
    primary: "#000",
    text: "#fff",
  },
  pink: {
    primary: "#fff",
    text: "#dc5fff",
  },
};

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
`

function App() {
const [hello, setHello] = useState('')

  const handlePress = () => {
    console.log("hi!");
    const nameG = 'gili'
    setHello(`This is hello from ${nameG}`)
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <div className="App">
        <img className="App-logo" src={logo} alt="" />
        {/* <AnimatedLogo src={logo} /> */}
        <StyleButton onClick={handlePress}>This is a button</StyleButton>
        <StyleButton variant="outline" onClick={handlePress}>
          This is a button
        </StyleButton>
        <FancyButton as={"div"}>This is Fancy</FancyButton>
        <FancyButton>This is Fancy button</FancyButton>
        <ComponentA />
        <SubmitButton>This is from App</SubmitButton>
        <NewDiv>
          <h1 style={{ color: "red" }}>Hello</h1>
        </NewDiv>
        <div className="wrapper">
          <div className="wrapper__card">
            <div className="wrapper__card__imag-holder"></div>
          </div>
          <div className="wrapper__card--red"></div>
        </div>
      </div>
      <h1>{hello}</h1>
      <DarkButton>Dark</DarkButton>
    </ThemeProvider>
  );
}

export default App;
