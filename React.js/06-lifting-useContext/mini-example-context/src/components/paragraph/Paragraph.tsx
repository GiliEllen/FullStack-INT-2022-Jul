import React, { useEffect, useState } from "react";
import axios from "axios";

const Paragraph = () => {
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
      <p>hello from Paragraph</p>
    </div>
  );
};

export default Paragraph;
