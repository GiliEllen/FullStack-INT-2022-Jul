import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ForgotPassword from "./components/ForgotPassword";
import AccessAccount from "./components/AccessAccount";
import Login from "./components/Login";
import ResetPassword from './components/ResetPassword';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<div>Home</div>} />
        <Route path="/auth/forgot-password" element={<ForgotPassword />} />
        <Route path="/auth/access-account/:token" element={<AccessAccount />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
