import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter/Counter/Counter";
import CounterClass from "./components/CounterClass/CounterClass";
import { Clock } from "./components/clock/Clock";
import { render } from "@testing-library/react";
import Birthday from "./components/birthday/Birthday";
import ColourPicker from "./components/ColourPicker/ColourPicker";
import Card from "./components/card/Card";

const users = [
  {
    firstName: "gili",
    age: 28,
  },
  {
    firstName: "vika",
    age: 20,
  },
  {
    firstName: "hadar",
    age: 25,
  },
];

function App() {
  const [timeInterval, setTimeInterval] = useState<Date>();
  function tick() {
    setTimeInterval(new Date());
  }
  setInterval(tick, 1000);
  useEffect(() => {}, [timeInterval]);
  return (
    <div className="App">
      {/* <p>this is function component:</p>
      <Counter />
      <p>this is class Component:</p>
      <CounterClass />
      <Birthday/>
      <Clock date={new Date()} />
      <ColourPicker/> */}
      {users.map((user) => {return <Card firstName={user.firstName} age={user.age}/>})}
    </div>
  );
}

export default App;
