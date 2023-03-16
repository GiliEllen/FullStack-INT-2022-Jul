import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person1 from './components/Person1';
import Person2 from './components/Person2';

function App() {
  return (
    <div className="App">
      <h1>Auction</h1>
      <Person1/>
      <Person2/>
    </div>
  );
}

export default App;
