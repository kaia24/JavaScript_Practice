import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import FetchButton from "./components/FetchButton"
import Display from "./components/Display"
function App() {
  const [pokemon, setPokemon] = useState([])

  return (
    <div className="App container">
      <FetchButton pokemon={ pokemon } setPokemon={ setPokemon } />
      <Display pokemon={ pokemon }/>
    </div>
  );
}

export default App;
