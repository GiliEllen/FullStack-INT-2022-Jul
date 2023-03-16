import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
// import "./App.scss";
import { Route, Routes, BrowserRouter, useNavigate } from "react-router-dom";
import Home from "./views/Home";
import Pricing from "./views/Pricing";
import About from "./views/About";
import Page404 from "./views/Page404";
import Layout from "./components/Layout";
import Login from "./views/login/Login";
import { UserContext } from "./contexts/UserContext";
import { getUserFromCookies } from "./helpers/helpers";
import Greeting from "./components/Greeting";
import LogoutButton from "./components/LogoutButton";

function App() {
  const [user, setUser] = useState<any>();
  const navigate = useNavigate()
  useEffect(() => {
    getUserFromCookies(setUser);
    if (!user) {
      navigate("/login")
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <LogoutButton/>
      <Greeting/>
      <Routes>
        <Route path="*" element={<Page404 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
        </Route>
        <Route path="/home" element={<Home />} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
