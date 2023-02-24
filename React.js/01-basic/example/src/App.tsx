import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter/Counter/Counter";
import CounterClass from "./components/CounterClass/CounterClass";



function App() {
  return (
    <div className="App">
      <p>this is function component:</p>
      <Counter />
      <p>
        this is class Component:
      </p>
      <CounterClass />
    </div>
  );
}

export default App;
