import React, { useState } from 'react';
import Parent from './Parent';
import './App.css';
import  CounterContext  from './CounterContext';

// CREATE A SIMPLE FUNTION TO ORDER APP



function App() {
  let CountSet = useState(1);
  return (
    <CounterContext.Provider value={CountSet}>
      <div>
        <Parent />
      </div>
    </CounterContext.Provider>
  )
}

// CREATE A SIMPLE FUNTION TO ORDER APP


export default App;
