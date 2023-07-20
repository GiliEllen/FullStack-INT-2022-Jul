import React, { useState, useCallback } from "react";
import List from "./List";

// useMemo: Returns and stores the calculated value of a function in a variable
// useCallBack: Returns and stores the actual function itself in a variable

export default function CallBack() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  const theme = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "#333",
  };
  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />

      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Toggle theme
      </button>
      <List getItems={getItems} />
    </div>
  );
}

//   const getItems = useCallback(
//     (incrementor: number) => {
//       return [
//         number + incrementor,
//         number + incrementor + 1,
//         number + incrementor + 2,
//       ];
//     },
//     [number]
//   );

// const getItems = useCallback(
//   (incrementor: number) => {
//     return [number, number + 1, number + 2];
//   },
//   [number]
// );
