import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'

const App = () => {
  const [counter, setCounter] = useState(0);
  const Button = ({ onClick, text}) => (
    <button onClick={onClick}>
      {text}
    </button>
  )
  const addCount = () => setCounter(counter + 1)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello 02363 class
        </p>
        <Button
        onClick={addCount}
        text = 'count'
        />
        <p>
          {counter} times
        </p>
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
