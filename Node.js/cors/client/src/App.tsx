import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import Products from "./components/Products";

export const SERVER_URL =  "http://localhost:8000"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/success" element={<div>Success! 🥳</div>} />
        <Route path="/cancel" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
