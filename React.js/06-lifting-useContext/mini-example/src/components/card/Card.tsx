import Header from "../header/Header";
import Title from "./../title/Title";
import Paragraph from "./../paragraph/Paragraph";
import { useEffect, useState } from "react";
import axios from "axios";

const Card = () => {
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
    <div className="card">
      <h1>hello from card</h1>
      <Title user={user} />
      <Header user={user} />
      <Paragraph user={user} />
    </div>
  );
};

export default Card;
