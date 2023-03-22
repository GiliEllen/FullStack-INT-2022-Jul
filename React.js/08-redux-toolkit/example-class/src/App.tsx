import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Input from './components/Input';
import Output from './components/Output';
import { useState } from 'react';
import { useAppSelector } from './app/hooks';
import { textSelector } from './features/text/textSlice';

function App() {
  const [counter, setCounter] = useState(0)

  const text = useAppSelector(textSelector)


  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <Input/>
        <Output/>
        <p>{counter}</p>
        <p>{text}</p>
        <button onClick={() => {setCounter(counter+1)}}></button>
      </header>
    </div>
  );
}

export default App;
