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
import axios from "axios";

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

// function App() {
//   // const [timeInterval, setTimeInterval] = useState<Date>();
//   // function tick() {
//   //   setTimeInterval(new Date());
//   // }
//   // setInterval(tick, 1000);
//   // useEffect(() => {}, [timeInterval]);

//   return (
//     <div className="App">
//       {/* <p>this is function component:</p>
//       <Counter />
//       <p>this is class Component:</p>
//       <CounterClass />
//       <Birthday/>
//       <Clock date={new Date()} />
//       <ColourPicker/> */}
//       {users.map((user) => {return <Card firstName={user.firstName} age={user.age}/>})}
//     </div>
//   );
// }

function App() {

  const [imageArray, setImageArray] = useState([])

  async function handleGetJokes() {
    try {
      const {data} = await axios.get('https://dog.ceo/api/breeds/image/random/10');
      const {message} = data;
      setImageArray(message)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div>
      <button onClick={handleGetJokes}>GET JOKES</button>
      {imageArray.map((image, index) => {return <Card key={index} src={image}/>})}
    </div>
  )
}

export default App;
