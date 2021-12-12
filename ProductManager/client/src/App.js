import React from 'react';
import { Router } from '@reach/router';   /* this is new */
import Main from './views/Main';
import DisplayProduct from "./components/ProductDisplay";
import Update from './views/Update';
function App() {
  return (
    <div className="App">
      <Router>                           
        <Main path="/" />
        <DisplayProduct path="/:_id" />
        <Update path="/:_id/edit" />
      </Router>                           
    </div>
  );
}
export default App;

