import "./App.css";
import StyledButton, {
  AnimatedLogo,
  FancyButton,
  SubmitButton,
  DarkButton,
} from "./components/Button/Button";
import logo from "./logo.svg";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const theme = {
  dark: {
    primary: "#000",
    text: "#fff",
  },
  light: {
    primary: "#fff",
    text: "#000",
  },
};

const GlobalStyle = createGlobalStyle`
  button {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
`;

function App() {
  const handleClick = () => {
    console.log("hi");
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
        <div className="App">
          <StyledButton onClick={handleClick}>Styled Button</StyledButton>
          <StyledButton variant="outline" onClick={handleClick}>
            Styled Button
          </StyledButton>
          <FancyButton as="a"> Styled Fancy!</FancyButton>
          <SubmitButton>Submit button</SubmitButton>
          <AnimatedLogo src={logo} />
          <DarkButton>Dark Button</DarkButton>
          <button>Button</button>
        </div>
    </ThemeProvider>
  );
}

export default App;

//inline
//class
