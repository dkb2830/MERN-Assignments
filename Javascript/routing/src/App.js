import './App.css';
import React from 'react';
import {Router} from '@reach/router';
import Home from './components/Home';
import Number from './components/Number';
import Color from './components/Color';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home"/>
        <Color path="/:string/:colorOne/:colorTwo"/>
        <Number path="/:int"/>
      </Router>
    </div>
  );
}

export default App;
