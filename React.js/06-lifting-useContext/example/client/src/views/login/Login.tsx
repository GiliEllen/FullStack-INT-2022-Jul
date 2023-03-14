import React from "react";
import { useState } from "react";
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  async function handleSubmit(ev:any) {
    try {
        ev.preventDefault();
        const {data} = await axios.post("/api/users/login", {email, password})
        console.log(data)
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
    </div>
  );
};

export default Login;
