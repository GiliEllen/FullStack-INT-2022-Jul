import React from 'react'
import { useAppSelector } from '../app/hooks'
import { textSelector } from '../features/text/textSlice'

const D = () => {
  const text = useAppSelector(textSelector)
  return (
    <div>{text.from}</div>
  )
}

export default D