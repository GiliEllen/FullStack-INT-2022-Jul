import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  
  const [firstName, setFirstName] = useState<string>("Enter Name");

  function handleAddtoCounter() {
    setCounter((prevState) => prevState + 1);
  }
  function handleChangeName() {
    const newName = prompt("enter new name");
    if (!newName) {
      setFirstName("Enter Name please!");
    } else {
      setFirstName(newName);
    }
  }
  return (
    <div>
      <div>{counter}</div>
      <button onClick={handleAddtoCounter}>+</button>
      <p>{firstName}</p>
      <button onClick={handleChangeName}>Change Name</button>
    </div>
  );
};
export default Counter;

// import React from 'react'
// const Counter = () => {
//   return (
//     <div>Counter</div>
//   )
// }

// export default Counter