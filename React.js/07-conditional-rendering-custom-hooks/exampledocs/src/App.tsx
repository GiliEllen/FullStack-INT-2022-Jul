import React from 'react';
import logo from './logo.svg';
import './App.css';
import StatusBar from './components/statusBar/StatusBar';
import SaveButton from './components/SaveBotton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StatusBar/>
        <SaveButton/>
      </header>
    </div>
  );
}

export default App;
