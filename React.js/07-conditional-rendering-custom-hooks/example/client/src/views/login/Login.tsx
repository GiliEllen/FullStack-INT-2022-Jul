import React, { useContext, useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import { UserContext } from './../../contexts/UserContext';
import { useNavigate } from "react-router-dom";
import useGet from "../../hooks/useGet";


const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const {user, setUser} = useContext(UserContext)
  const navigate = useNavigate()




  async function handleSubmit(ev:any) {
    try {
        ev.preventDefault();
        const {data} = await axios.post("/api/users/login", {email, password})
        console.log(data)
        if (data.login){
          setUser(data.userDB)
          navigate("/")
        }
    } catch (error) {
        console.error(error)
    }
  }
  return (
    <div>
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
