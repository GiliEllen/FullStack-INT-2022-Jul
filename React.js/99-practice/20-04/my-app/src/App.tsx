import React, { useState } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import A from './components/A';
import B from './components/B';


function App() {

  const [number, setNumber] = useState(0);


  return (
    <div className="App">
      <A /> 
      <B/>
    </div>
  );
}

export default App;
