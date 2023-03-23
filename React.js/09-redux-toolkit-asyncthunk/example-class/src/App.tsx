import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Views/Main';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
