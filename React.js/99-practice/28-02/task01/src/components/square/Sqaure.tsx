import React from 'react'
import { useState } from 'react';

const Sqaure = () => {
    const [backgroundColorofSqaure, setBackgroundColorofSqaure] = useState<string>('#8e4b4b')
    const [age, setAge] = useState<number>()


    const colors = ['red', 'blue', 'black', 'rgb(255,255,0)']
    function handleChangeColour() {
        const index = getRandom(0, colors.length)
       setBackgroundColorofSqaure(colors[index])
    }
    function getRandom(min:number, max:number) {
        return Math.round(Math.random() * (max - min) + min);
    }

    function harderColors() {
        // const colorOfChoise = ;
        setBackgroundColorofSqaure(`rgb(${getRandom(0,255)}, ${getRandom(0,255)}, ${getRandom(0,255)})`)
    }

    function handleSetAge(event:any) {
        const year = Number(prompt('enter birth year'))
        const ageOfUser = new Date().getFullYear() - year;
        setAge(ageOfUser)
    }

  return (
    <div className='sqaure' style={{backgroundColor: backgroundColorofSqaure}} onClick={harderColors}>
        <button onClick={handleSetAge}>XXX</button>
        <p>Your age is: {age}</p>
    </div>
  )
}

export default Sqaure