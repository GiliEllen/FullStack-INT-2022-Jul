import Header from "../header/Header";
import Title from "../title/Title";
import Paragraph from "../paragraph/Paragraph";
import { UserContext } from "../../contexts/UserContext";
import { FC } from "react";


const Card = () => {
  return (
    <div className="card">
      <h1>hello from card</h1>
      <Title />
        <Header />
      <Paragraph />
    </div>
  );
};

export default Card;
