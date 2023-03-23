import React, { useContext, useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  async function handleSubmit(ev: any) {
    try {
      ev.preventDefault();
      const { data } = await axios.post("/api/users/register", {
        email,
        password,
      });
      console.log(data);
      if (data.ok) {
        // setUser(data.userDB)
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      <legend>Register</legend>
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
