/*import React, { useState } from 'react';
import './ToDoList.css';  // Importing the external CSS file

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newtask, setNewtask] = useState('');
  const [completedTasks, setCompletedTasks] = useState([]);

  function addTask() {
    setTasks(t => [...t, newtask]);
    setNewtask('');
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function deleteCompletedTask(index) {
    const updatedCompletedTasks = completedTasks.filter((_, i) => i !== index);
    setCompletedTasks(updatedCompletedTasks);
  }

  function completeTask(index) {
    const taskToComplete = tasks[index];
    setCompletedTasks(c => [...c, taskToComplete]);
    deleteTask(index);
  }

  return (
    <div className="todolist-container">
      <div className="todobox">
        <h1>To Do List</h1>
        <div className="input-container">
          <input
            type='text'
            value={newtask}
            onChange={e => setNewtask(e.target.value)}
            className="task-input"
            placeholder="Enter new task"
          />
          <button onClick={addTask} className="add-button">Add</button>
        </div>
      </div>
      <div className="tasklists">
        <h2>Tasks</h2>
        <ol className="task-list">
          {tasks.map((task, index) => (
            <li key={index} className="task-item">
              <span className="task-text">{task}</span>
              <div className="task-buttons">
                <button className="delete-button" onClick={() => deleteTask(index)}>
                  ❌
                </button>
                <button className="complete-button" onClick={() => completeTask(index)}>
                  ✅
                </button>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <div className="completed-tasks">
        <h2>Completed Tasks</h2>
        <ol className="task-list">
          {completedTasks.map((task, index) => (
            <li key={index} className="task-item">
              <span className="task-text">{task}</span>
              <button className="delete-button" onClick={() => deleteCompletedTask(index)}>
                ❌
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default ToDoList;*/

import React, { useState } from 'react';
import './ToDoList.css';  // Importing the external CSS file

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newtask, setNewtask] = useState('');
  const [completedTasks, setCompletedTasks] = useState([]);

  function addTask() {
    if (newtask.trim()) {
      setTasks(t => [...t, newtask]);
      setNewtask('');
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function deleteCompletedTask(index) {
    const updatedCompletedTasks = completedTasks.filter((_, i) => i !== index);
    setCompletedTasks(updatedCompletedTasks);
  }

  function completeTask(index) {
    const taskToComplete = tasks[index];
    setCompletedTasks(c => [...c, taskToComplete]);
    deleteTask(index);
  }

  function uncompleteTask(index) {
    const taskToUncomplete = completedTasks[index];
    setTasks(t => [...t, taskToUncomplete]);
    deleteCompletedTask(index);
  }

  return (
    <div className="todolist-container">
      <div className="todobox">
        <h1>To Do List</h1>
        <div className="input-container">
          <input
            type='text'
            value={newtask}
            onChange={e => setNewtask(e.target.value)}
            className="task-input"
            placeholder="Enter new task"
          />
          <button onClick={addTask} className="add-button">Add</button>
        </div>
      </div>
      <div className="tasklists">
        <h2>Tasks</h2>
        <ol className="task-list">
          {tasks.map((task, index) => (
            <li key={index} className="task-item">
              <span className="task-text">{task}</span>
              <div className="task-buttons">
                <button className="delete-button" onClick={() => deleteTask(index)}>
                  ❌
                </button>
                <button className="complete-button" onClick={() => completeTask(index)}>
                  ✅
                </button>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <div className="completed-tasks">
        <h2>Completed Tasks</h2>
        <ol className="task-list">
          {completedTasks.map((task, index) => (
            <li key={index} className="task-item completed-task-item">
              <span className="task-text">{task}</span>
              <div className="task-buttons">
                <button className="delete-button" onClick={() => deleteCompletedTask(index)}>
                  ❌
                </button>
                <button className="uncomplete-button" onClick={() => uncompleteTask(index)}>
                  ↩️
                </button>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default ToDoList;
