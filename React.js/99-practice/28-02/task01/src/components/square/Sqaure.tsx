import React from 'react'
import { useState } from 'react';

const Sqaure = () => {
    const [backgroundColorofSqaure, setBackgroundColorofSqaure] = useState<string>('#8e4b4b')

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

  return (
    <div className='sqaure' style={{backgroundColor: backgroundColorofSqaure}} onClick={harderColors}>Sqaure</div>
  )
}

export default Sqaure