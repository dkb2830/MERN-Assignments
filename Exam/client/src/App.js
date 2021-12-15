import './App.css';
import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import Detail from './views/Detail';
function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/pet/" />
        <Detail path="/pet/:id" />
        <Update path="/pet/:id/edit" />
      </Router>
    </div>
  );
}
export default App;
