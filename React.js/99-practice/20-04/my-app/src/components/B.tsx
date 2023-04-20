import React from 'react'
import C from './C'
import { useAppDispatch } from '../app/hooks'
import { changeValue } from '../features/text/textSlice'

const B = () => {
  const dispatch = useAppDispatch()

  function handleChangeValue() {
    dispatch(changeValue(prompt("enter new value")));
  }
  return (
    <div>B
      <button onClick={handleChangeValue}>Change value B</button>
        <C />
        
    </div>
  )
}

export default B