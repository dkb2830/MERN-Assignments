import './App.css';
import React from 'react';
import {Router} from '@reach/router';
import Home from './components/Home';
import Number from './components/Number';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home"/>
        <Number path="/{props.id}"/>
      </Router>
    </div>
  );
}

export default App;
