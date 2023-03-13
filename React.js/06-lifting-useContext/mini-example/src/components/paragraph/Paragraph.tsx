import React, { FC, useEffect, useState } from "react";
import axios from "axios";

interface ParagraphProps {
  user?: string
}

const Paragraph:FC<ParagraphProps> = ({user}) => {
  //   const [userEmail, setUserEmail] = useState();
  //   useEffect(() => {
  //     getUser();
  //   }, []);

  //   async function getUser() {
  //     try {
  //       const { data } = await axios.get(
  //         "https://jsonplaceholder.typicode.com/users/1"
  //       );
  //       setUserEmail(data.email);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }

  return (
    <div>
      {/* {userEmail} */}
      <p>hello from Paragraph {user}</p>
    </div>
  );
};

export default Paragraph;
