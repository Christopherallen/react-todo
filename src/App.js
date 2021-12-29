import React, { useState } from 'react';

import data from './data.json';
import Header from './components/Header';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

function App() {
  const [ toDoList, setToDoList] = useState(data);

  const handleToggle = (id) => {
    console.log('foo');
    let mapped = toDoList.map(task => {
      return task.id === parseInt(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }

  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete
    });
    setToDoList(filtered);
  }

  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [...copy, {id: toDoList.length + 1, task: userInput, complete: false}];
    setToDoList(copy);
  }

  return (
    <div className="App">
      <Header />
      <ToDoForm  addTask={addTask} />
      <ToDoList
        toDoList={toDoList}
        handleToggle={handleToggle}
        handleFilter={handleFilter}
      />
    </div>
  );
}

export default App;
