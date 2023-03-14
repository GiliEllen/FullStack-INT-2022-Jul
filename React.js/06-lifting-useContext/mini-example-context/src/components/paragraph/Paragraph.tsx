import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { UserContext } from './../../contexts/UserContext';

const Paragraph = () => {
  // const {user} = useContext(UserContext)

  // if(user) {
  //   return (
  //     <div>
  //       {user.email}
  //       <p>hello from Paragraph!</p>
  //     </div>
  //   );
  // } else {
    return (
      <div>
        <p>hello from Paragraph</p>
      </div>
    );
  // }
 
};

export default Paragraph;
