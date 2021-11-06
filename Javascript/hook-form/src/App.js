import './App.css';
import Form from './components/Form';


function App() {
  return (
    <div className="App">
      <Form />
      <div>
        <p>Your Form Data</p>
        <p>First Name: {newUser}</p>
        <p>Last Name:</p>
        <p>Email:</p>
        <p>Password:</p>
        <p>Confirm Password:</p>
      </div>
    </div>
  );
}

export default App;
