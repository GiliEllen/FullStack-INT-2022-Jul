import React, { useContext } from "react";
import { UserContext } from "./../contexts/UserContext";

const Greeting = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h1>Greetings!</h1>
      {user? <p>{user.username}</p> : <p>Please log in</p>}
    </div>
  );
};

export default Greeting;
