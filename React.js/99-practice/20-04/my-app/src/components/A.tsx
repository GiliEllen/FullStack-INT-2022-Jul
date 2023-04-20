import React, { FC, useState } from "react";
import B from "./B";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { changeFrom, changeValue, changeValueAndFrom, textSelector } from "../features/text/textSlice";

// interface AProps {
//     number:number,
//     setNumber:CallableFunction
// }

const A = () => {
  const [number, setNumber] = useState(0);
  const text = useAppSelector(textSelector);
  const dispatch = useAppDispatch();

  function handleChangeNumber() {
    const x = Number(prompt("enter Number"));
    setNumber(x);
  }

  function handleChangeValue() {
    dispatch(changeValue(prompt("enter new value")));
  }
  function handleChangeFrom() {
    dispatch(changeFrom(prompt("enter new From")))
  }
  function handleChangeValueAndFrom() {
    const value = prompt("enter new value")
    const from = prompt("enter new From")
    dispatch(changeValueAndFrom({value, from}))
  }
  return (
    <div>
      <p>{text.value}</p>
      <p>{text.from}</p>
      <button onClick={handleChangeValue}>Change value</button>
      <button onClick={handleChangeFrom}>Change From</button>
      <button onClick={handleChangeValueAndFrom}>Change Value and from</button>

    </div>
  );
};

export default A;
