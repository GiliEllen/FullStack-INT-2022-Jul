import React from 'react'
import { useState } from 'react';

const RandomColor = () => {

    const [color, setColor] = useState('black')
  return (
    <div>
        <div onClick={(e) => {}} style={{height: '100px', width: '100px', backgroundColor: color}}>

        </div>
    </div>
  )
}

export default RandomColor