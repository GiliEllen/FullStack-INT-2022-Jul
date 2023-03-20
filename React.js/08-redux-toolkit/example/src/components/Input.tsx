import React from 'react'
import { changeText } from '../features/text/textSlice';
import { useAppDispatch } from './../app/hooks';

const Input = () => {
    const dispatch = useAppDispatch();

    function handleTextChange(ev:any) {
        dispatch(changeText(ev.target.value))
    }

  return (
    <input type="text" id="inputForExample" onInput={handleTextChange}/>
  )
}

export default Input