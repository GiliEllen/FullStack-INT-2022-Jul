import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Input from './components/Input';
import Output from './components/Output';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <Input/>
        <Output/>
      </header>
    </div>
  );
}

export default App;
