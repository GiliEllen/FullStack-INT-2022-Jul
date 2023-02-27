import React, { FC } from "react";

interface CardProps {
    src: string;
}

// const Card = (props:any) => {
//   return (
//     <div>
//         <h3>{props.firstName}</h3>
//         <p>{props.age}</p>
//     </div>
//   )
// }

const Card: FC<CardProps> = ({ src }) => {
  return (
    <div>
      <img src={src} alt="" />
    </div>
  );
};

export default Card;
