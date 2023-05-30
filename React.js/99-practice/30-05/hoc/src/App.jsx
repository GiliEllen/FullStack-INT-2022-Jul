import { Component, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";

class App extends Component {
  render() {
    return (
      <div>
        <ClickCounter />
        <HoverCounter />
      </div>
    );
  }
}

export default App;
