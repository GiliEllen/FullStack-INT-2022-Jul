import axios from "axios";
import { FC, useEffect, useState } from "react";
import Paragraph from './../paragraph/Paragraph';

interface HeaderProps {
  user?: string
}

const Header:FC<HeaderProps> = ({user}) => {
 
  return (
    <div className="header">
      <h3>hello from header to user {user}</h3>
      <Paragraph user={user}/>
    </div>
  );
};

export default Header;
