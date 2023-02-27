import React, { FC } from 'react'

interface CardProps {
    src?: string,
    firstName: string,
    age: number
}

const Card:FC<CardProps> = ({src, firstName, age}) => {
  return (
    <div>
        <img src={src}/>
        <h3>{firstName}</h3>
        <p>{age}</p>
    </div>
  )
}

export default Card
