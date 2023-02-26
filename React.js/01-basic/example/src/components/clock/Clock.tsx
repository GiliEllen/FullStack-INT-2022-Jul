import React, { FC } from "react";

interface ClockProps {
    date : Date
}

export const Clock:FC<ClockProps> = ({date}) => {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
}

