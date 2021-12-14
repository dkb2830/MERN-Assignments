import React from 'react';
import { Router } from '@reach/router';   /* this is new */
import Main from './views/Main';
import DisplayProduct from "./components/ProductDisplay";
import Update from './components/Update';

function App() {
  return (
    <div className="App">
      <Router>                           
        <Main path="/" />
        <DisplayProduct path="/product/:_id" />
        <Update path="/product/:id/edit" />
      </Router>                           
    </div>
  );
}
export default App;

