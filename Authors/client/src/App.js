import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import Detail from './views/Detail';
function App() {
  return (
    <div className="App">
      <Router>                            
        <Main path="/author/" />
        <Detail path="/author/:id" />
        <Update path="/author/:id/edit" />
      </Router>                           
    </div>
  );
}
export default App;


