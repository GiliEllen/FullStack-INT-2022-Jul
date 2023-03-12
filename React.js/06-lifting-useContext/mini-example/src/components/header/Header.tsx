import axios from "axios";
import { useEffect, useState } from "react";
import Paragraph from './../paragraph/Paragraph';

const Header = () => {
  const [user, setUser] = useState();
  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      console.log(data);
      setUser(data.name);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="header">
      <h3>hello from header to user {user}</h3>
      <Paragraph/>
    </div>
  );
};

export default Header;
