import React from 'react';
import logo from './logo.svg';
import './App.css';
import Breadcrumb from './Breadcrumb';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Breadcrumb num={["Step 1", "Step 2", " Step 3", " Step 4", "Step 5"]} cnum={3} addMsg={'video ref'} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
