import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './Containers/Homepage'
import ComputerContainer from './Containers/ComputerContainer'
import ComputerPage from './Containers/ComputerPage'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Homepage />
        <ComputerPage />
        <ComputerContainer />
        <p>
          Hello world!
        </p>
        <h1
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bird up! The WORST show on television!
        </h1>
      </header>
    </div>
  );
}

export default App;
