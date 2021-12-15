import './App.css';
import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';
import PetForm from './components/PetForm';
function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <Detail path="/pet/:id" />
        <Update path="/pet/:id/edit" />
        <PetForm path="/pets/new"/>
      </Router>
    </div>
  );
}
export default App;
