import { useState } from "react";

import "./App.css";
import { useRef } from "react";

function App() {
  const countRef = useRef(0);
  const [clickCounter, setClickCounter] = useState(0);
  const [count, setCount] = useState(0);

  console.log("I rendered!");

  return (
    <div className="App">
      <div>Hello</div>
    </div>
  );
}

export default App;
