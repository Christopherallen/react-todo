import React, { useState } from "react";

const ToDoForm = ({addTask}) => {
  const [ userInput, setUserInput ] = useState('');

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    addTask(userInput);
    setUserInput('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task">
        <input value={userInput} onChange={handleChange} type="text" placeholder="Add Task" />
      </label>
      <button>Submit</button>
    </form>
  )
}

export default ToDoForm;
