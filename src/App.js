import logo from './logo.svg';
import './App.css';
import { getParcels } from "./httprequest.js";
// state concept and hook concept
import React, { useState, useEffect } from 'react';

function App() {
const [data, setData] = useState([]);

useEffect(() => {
  let mounted = true;
  getParcels()
    .then(items => {
      if(mounted) {
        setData(items)
      }
    })
  return () => mounted = false;
}, [])


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

  <div className="wrapper">
     <h1>DHL order list</h1>
     <ul>
       {data.map(item => <li key={item}>{item}</li>)}
     </ul>
   </div>

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

