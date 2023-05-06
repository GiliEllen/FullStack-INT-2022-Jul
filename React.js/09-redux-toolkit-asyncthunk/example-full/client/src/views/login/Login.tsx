import React, { useContext, useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { logout } from "../../features/user/userSlice";
import { useAppDispatch } from "../../app/hooks";



const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  
  async function handleLogout() {
    const {data} = await axios.get("/api/users/logout")
    if (data.logout) {
      dispatch(logout())
      navigate("/")
    }
  }

  async function handleSubmit(ev:any) {
    try {
        ev.preventDefault();
        const {data} = await axios.post("/api/users/login", {email, password})
        console.log(data) // data : {login: true, userDB}
        if (data.login){
          // setUser(data.userDB)
          navigate("/home")
        }
    } catch (error) {
        console.error(error)
    }
  }
  return (
    <div>
      <legend>Log In</legend>
      <form onSubmit={handleSubmit}>
        <input
          value={email}
          type="email"
          placeholder="email"
          required
          onInput={(ev: any) => {
            setEmail(ev.target.value);
          }}
        />
        <input
          value={password}
          type="password"
          placeholder="password"
          required
          onInput={(ev: any) => {
            setPassword(ev.target.value);
          }}
        />
        <button type="submit">Login</button>
      </form>
      {/* {response ? <img src={response.message} alt="" />: null } */}
      
    </div>
  );
};

export default Login;
