/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/

import React from 'react';
//import './App.css';
import SignInForm from './SignInForm';
//import ToDoList from './ToDoList';

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <SignInForm></SignInForm>
      </header>
    </div>
  );
}

export default App;


/*import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    if (!value) return;
    const newTodos = [...todos, { text: value, isCompleted: false }];
    setTodos(newTodos);
    setValue('');
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <form onSubmit={addTodo}>
        <input
          type="text"
          className="input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <div
            key={index}
            className="todo-item"
            style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
          >
            {todo.text}
            <div>
              <button onClick={() => completeTodo(index)}>
                {todo.isCompleted ? 'Uncomplete' : 'Complete'}
              </button>
              <button onClick={() => removeTodo(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;*/








