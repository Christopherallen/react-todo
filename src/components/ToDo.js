import React from "react";

const ToDo = ({todo, handleToggle}) => {
  const handleChange = (e) => {
    handleToggle(e.currentTarget.id);
  }
 return (
    <li className={todo.complete ? 'todo strike' : 'todo'}>
      <div>
        <input id={todo.id} type="checkbox" onChange={handleChange} defaultChecked={todo.complete} />
        <label className="todo-label" htmlFor={todo.id}>
          {todo.task}
        </label>
      </div>
    </li>
 );
}
export default ToDo;
