import React, { useState } from 'react';
import './App.css';
import Todo from "./components/Todo"


function App() {

  // use state always returns an array with 2 items in it
  // const newTodoStateArr = useState("");
  // const newTodo = newTodoStateArr[0];
  // const setNewTodo = newTodoStateArr[1]; 

  // this line equals to the three lines above
  const [newTodo, setNewTodo] = useState("");

  // list to hold to do items: use [] or null
  const [todos, setTodos] = useState([]);

  // handle cubmit form
  const handleNewTodoSubmit=(event) => {
    console.log('inside handle function *****************');
    event.preventDefault();
    console.log(newTodo);

    // if input is empty = add nothing
    if(newTodo.length ===0) {
      return;
    }

    const todoItem = {
      text: newTodo,
      complete: false 
    }

    // //set todos in a new array containing all current todos
    setTodos([...todos, todoItem]);

    // clear input area !!! not working
    setNewTodo("");
    console.log('trying to empty the input: ', newTodo);
    // // console.log(...['a','b'])--> prints a b 
    console.log(todos)
  }

  // delete an item
  const handleTodoDelete = (delInd) => {
    // .filter always passes the item first and the index second:
    // can use an underscore before the parameter and it will take the warning away: _todo
    const filteredTodos = todos.filter((todo, i) => {
      return i !== delInd;
    });

    setTodos(filteredTodos);
  }

  const handleToggleComplete = (ind) =>{
    const updatedTodos = todos.map((todo, i) => {
      if( ind === i){
        todo.complete = !todo.complete;

        // to avoid mutating the todo directly, do this:
        // const updatedTodo = {... todo, complete: !todo.complete};
        // return updatedTodo;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  return (
    <div className="App">
        <form 
          onSubmit={(event) => {
          handleNewTodoSubmit(event);
        }}>
          <input onChange={(event)=> {
            setNewTodo(event.target.value);
          }} type="text" />
        <div>
          <button type="submit" className="btn btn-success">Add</button>
        </div>
        </form>
        {
          todos.map((todo, i) => {
            return ( 
              <Todo 
              key={i} 
              todo={todo} 
              handleToggleComplete={handleToggleComplete} 
              i={i}
              handleTodoDelete={handleTodoDelete}
              ></Todo>
            );
          })
        }

    </div>
  );
}

export default App;
