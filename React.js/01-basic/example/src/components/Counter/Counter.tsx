import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  function handleAddtoCounter() {
    setCounter(counter + 1)
  }

  return (
    <div>
      <div>{counter}</div>
      <button onClick={handleAddtoCounter}>+</button>
    </div>
  );
};

export default Counter;
