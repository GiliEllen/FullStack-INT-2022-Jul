import React, { useContext } from "react";
import { UserContext } from "./../contexts/UserContext";
import useCounter from './../hooks/useCounter';

const Greeting = () => {
  const { user, setUser } = useContext(UserContext);
  const {counter, increment, decrement} = useCounter(10, 3)

  return (
    <div>
      {counter}
      <button onClick={increment}>+</button>
      <h1>Greetings!</h1>
      {user? <p>{user.username}</p> : <p>Please log in</p>}
    </div>
  );
};

export default Greeting;
