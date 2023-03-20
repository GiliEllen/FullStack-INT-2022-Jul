import React from 'react'
import { useAppSelector } from '../app/hooks'
import { textSelector } from '../features/text/textSlice'

const Output = () => {
    const text = useAppSelector(textSelector)
  return (
    <>
    {text.length > 0 ? <div>{text}</div> : <div>Text goes here...</div>}
    </>
  )
}

export default Output