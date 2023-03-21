import React, { useState } from 'react'
import { useAppDispatch } from '../app/hooks'
import { changeText } from '../features/text/textSlice'


const Input = () => {
  const dispatch = useAppDispatch()

  function handleTextChange(ev:any) {
    dispatch(changeText(ev.target.value))
  }

  return (
    <div>
        <input type="text" id="reduxInput" onInput={handleTextChange}/>

    </div>
  )
}

export default Input