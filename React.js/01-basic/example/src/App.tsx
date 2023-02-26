import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter/Counter/Counter";
import CounterClass from "./components/CounterClass/CounterClass";
import { Clock } from "./components/clock/Clock";
import { render } from "@testing-library/react";

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
      <Clock date={new Date()} />
    </div>
  );
}

export default App;
