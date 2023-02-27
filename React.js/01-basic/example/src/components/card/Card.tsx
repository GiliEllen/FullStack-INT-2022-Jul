import React, { FC } from "react";

interface CardProps {
  src?: string;
  firstName: string;
  age: number;
}

// const Card = (props:any) => {
//   return (
//     <div>
//         <h3>{props.firstName}</h3>
//         <p>{props.age}</p>
//     </div>
//   )
// }

const Card: FC<CardProps> = ({ firstName, age }) => {
  return (
    <div>
      <h3>{firstName}</h3>
      <p>{age}</p>
    </div>
  );
};

export default Card;
