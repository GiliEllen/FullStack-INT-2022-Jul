import React from "react";
import { useState } from "react";

// function Birthday() {
//     const currentYear = new Date().getFullYear()
//     const [age, setAge] = useState<number| string>("press button please")

//     function handleBirthday() {
//         const birthday = prompt("enter birth year")
//         if (! birthday) {
//             setAge("please press button")
//         } else {
//             const ageCalc = Number(currentYear) - Number(birthday)
//             setAge(ageCalc)
//         }
//     }

//   return (
//     <div>
//         <button onClick={handleBirthday}>Calculate</button>
//         <div>{age}</div>
//     </div>
//   )
// }

// export default Birthday

const currentYear = new Date().getFullYear();
function Birthday() {
  const [age, setAge] = useState<number | string>(currentYear);

  function handleBirthday() {
    const birthday = prompt("enter birth year");
    if (!birthday) {
      setAge("please press button");
    } else {
      setAge(Number(age) - Number(birthday));
    }
  }
  return (
    <div>
        <div>{age}</div>
      <button onClick={handleBirthday}></button>
    </div>
  );
}

export default Birthday;
