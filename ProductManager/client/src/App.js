// import React from 'react';
// import Main from './views/Main';
// function App() {
//   return (
//     <div className="App">
//       <Main />
//     </div>
//   );
// }
// export default App;

import React from 'react';
import { Router } from '@reach/router';   /* this is new */
import Main from './views/Main';
import Detail from './views/Detail';
function App() {
  return (
    <div className="App">
      <Router>                            /* this is new */
        <Main path="/product/" />
        <Detail path="/product/:id" />
      </Router>                           /* this is new */
    </div>
  );
}
export default App;

