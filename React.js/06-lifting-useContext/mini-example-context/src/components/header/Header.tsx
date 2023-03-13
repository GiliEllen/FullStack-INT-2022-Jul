import axios from "axios";
import { useEffect, useState, useContext } from "react";
import Paragraph from "../paragraph/Paragraph";
import { UserContext } from "../../contexts/UserContext";

const Header = () => {
  const {user} = useContext(UserContext);

  if(user) {
    return (
      <div className="header">
        <h3>hello from header to user {user.name}</h3>
        <Paragraph />
      </div>
    );
  } else {
    return (
      <div className="header">
        <h3>no user</h3>
        <Paragraph />
      </div>
    )
  }
 
};

export default Header;
