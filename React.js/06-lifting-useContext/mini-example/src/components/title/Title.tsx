import { FC } from "react";
import Header from "../header/Header";

interface TitleProps {
  user?: string
}

const Title:FC<TitleProps> = ({user}) => {
  return (
    <div className="title">
      <h2>hello from title</h2>
      <Header />
    </div>
  );
};

export default Title;
