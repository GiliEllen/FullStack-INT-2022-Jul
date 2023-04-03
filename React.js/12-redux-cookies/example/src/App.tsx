import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { userSelector } from './features/user/userSlice';
import { getUserByCookie } from './features/user/userApi';
import axios from "axios"

function App() {
  const user = useAppSelector(userSelector)
  const dispatch = useAppDispatch()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  useEffect(() => {
    dispatch(getUserByCookie())
  },[])

  async function handleSubmit(ev:any) {
    ev.preventDefault()
    const {data} = await axios.post("/api/users/login", {email, password})
    if (data.login) {
      dispatch(getUserByCookie())
    } else {
      console.log("fail")
    }
  }
  
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" name="email" placeholder='email' onChange={(ev:any) => {setEmail(ev.target.value)}}/>
        <input type="text" name="password" placeholder='password' onChange={(ev:any) => {setPassword(ev.target.value)}}/>
      <button type='submit'>Log In</button>
      </form>
      {/* <p>This is the user: {user? <p>{JSON.stringify(user)}</p> : <p>no user yet</p>}</p> */}
    </div>
  );
}

export default App;
