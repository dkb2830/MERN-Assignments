import './App.css';
import React, { useState } from 'react';

function App() {

  const [list, setList] = useState([]);
  const [todo, setTask] = useState(" ");

  const button = {
    backgroundColor: "blue",
    color: "white",
  }
            
  const deleteTask = (taskToRemove) => {
    setList(list.filter((theTask,index)=>{
      return index !== taskToRemove;
    }))
  }

  const todoItems = {
    text: todo,
    complete: false
  }


  const submitHandler = (e) => {
    e.preventDefault(e);

    setList([...list,todoItems
    ])
  };

  const strikeComplete = (item) => {
    const updateItems = list.map((theTask, index) => {
      if (item === index) {
        theTask.complete = !theTask.complete;
      }
      return theTask;
    });
    setList(updateItems)
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
        list.map((theTask, index) => {
          const itemClasses = [];
          if (theTask.complete) {
            itemClasses.push("strike");
          }

          return(
          <div key={index}>
            <p className={itemClasses.join(" ")}>{theTask.text}</p>
            <input type="checkbox" checked={theTask.complete} onChange={(e) => {strikeComplete(index)}} />
            <button style={{backgroundColor: "black", color: "white"}} onClick={(e)=> deleteTask(index)}>Delete</button>
          </div>
        );
          })};
    </div>
  );
};

export default App;
