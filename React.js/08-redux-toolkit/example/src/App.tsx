import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Input from "./components/Input";
import Output from "./components/Output";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Input /> 
        <Output />
      </header>
    </div>
  );
}

export default App;
