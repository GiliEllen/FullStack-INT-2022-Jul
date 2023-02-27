import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter/Counter/Counter";
import CounterClass from "./components/CounterClass/CounterClass";
import { Clock } from "./components/clock/Clock";
import { render } from "@testing-library/react";
import Birthday from './components/birthday/Birthday';
import ColourPicker from "./components/ColourPicker/ColourPicker";

function App() {
  const [timeInterval, setTimeInterval] = useState<Date>();
  function tick() {
    setTimeInterval(new Date());
  }
  setInterval(tick, 1000);
  useEffect(() => {
  }, [timeInterval]);
  return (
    <div className="App">
      <p>this is function component:</p>
      <Counter />
      <p>this is class Component:</p>
      <CounterClass />
      <Birthday/>
      <Clock date={new Date()} />
      <ColourPicker/>
    </div>
  );
}

export default App;
