import './App.css';
import Subcontents from './components/Subcontents';

function App() {
  return (
    <div className="App">
      <Subcontents firstName={'Jane'} lastName={'Doe'} age={45} hairColor={'Black'}/>
      <Subcontents firstName={'John'} lastName={'Smith'} age={88} hairColor={'Brown'}/>
      <Subcontents firstName={'Millard'} lastName={'Fillmore'} age={50} hairColor={'Brown'}/>
      <Subcontents firstName={'Maria'} lastName={'Smith'} age={62} hairColor={'Brown'}/>
    </div>
  );
}

export default App;
