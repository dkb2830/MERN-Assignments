import './App.css';
import React, { useState } from 'react';

function App() {

  const [list, setList] = useState([]);
  const [todo, setTask] = useState(" ");
  const [complete, setComplete] = useState(false)

  const button = {
    backgroundColor: "blue",
    color: "white",
  }
            


  const submitHandler = (e) => {
    e.preventDefault(e);

    setList([...list,
    {
      todo: todo,
      complete: complete,
    }
    ])
  }
  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="todo">Task:</label>
          <input type="text" name="todo" value={todo} onChange={(e) => setTask(e.target.value)} />
        </div>
        {/* <input className="btn-one" type="submit" value="Add"/> */}
        <input type="submit" style={button} value="Add" />
      </form>
      <h1>List</h1>
      {
        list.map((theTask, index) => (
          <div key={index}>
            <p style={done}>{theTask.todo}</p>
            <input type="checkbox" name="Done" checked={complete} onChange={(e) => setComplete(!complete)} />
          </div>
        ))
      }
    </div>
  );
};

export default App;
