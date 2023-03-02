import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./views/Home";
import Pricing from "./views/Pricing";
import About from "./views/About";
import Page404 from "./views/Page404";
import Layout from "./components/Layout";
//npm i react-router-dom

function App() {
  return (
    <Routes>
      <Route path="*" element={<Page404 />} />
      <Route path="/" element={<Layout />}>
         <Route index element={<Home />} />
         <Route path="/pricing" element={<Pricing />} />
         <Route path="/about" element={<About />} />
      </Route>
      <Route path="/home" element={<Home/>}/>
    </Routes>
  );
}

export default App;
