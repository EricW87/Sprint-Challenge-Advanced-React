import React from 'react';
import axios from 'axios';
import PlayerClass from './components/PlayerClass.js';
import {useInput} from './components/UseInput.js';
import './App.css';

function App() {

  const [country, setCountry, handleCountry] = useInput("country", null);
  const [name, setName, handleName] = useInput("name", null);

  return (
    <div className="App">
      <form onSubmit={e=>setName(null)}>
        <label>Filter by Name</label>
        <input type= "text" onChange={e => handleName(e.target.value)} />
        <button type="submit">Reset</button>
      </form>
      <form onSubmit={e=>setCountry(null)}>
        <label>Filter by Country</label>
        <input type= "text" onChange={e => handleCountry(e.target.value)} />
        <button type="submit">Reset</button>
      </form>
      <PlayerClass country={country} name={name} />
    </div>
  );
}

export default App;
