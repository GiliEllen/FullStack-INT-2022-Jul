import React, { useState } from 'react'

const Person2 = () => {
    const [money, setMoney] = useState(10)

    function handleIncrease() {
        setMoney((prevState) => prevState * 2)
    }
  return (
    <div>
        <h2>Jerry is offering ${money}</h2>
        <button onClick={handleIncrease}>Offer More!</button>
    </div>
  )
}

export default Person2