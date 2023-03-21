import React, { useState } from 'react'
import { useAppSelector } from '../app/hooks'
import { textSelector } from '../features/text/textSlice'
import { selectCount } from './../features/counter/counterSlice';

const Output = () => {

  // const [username, setUsername] = useState()

  const text = useAppSelector(textSelector)
  const counter = useAppSelector(selectCount)
  return (
    <>
    {text.length > 0 ? <p>{text}</p> : <div>Text will Appear here...</div>}
    {counter}
    </>
  )
}

export default Output