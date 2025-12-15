import "../styles/Task.css";

// export default function Task({ task, deleteTask, toggleCompleted }) {
export default function Task({ task }) {
    return (
        <div className="task">
            {/* <input type="checkbox" id="checkbox" checked="" onChange="" /> */}
            <span>{task.text}</span>
            {/* <button onClick={() => deleteTask(task.id)}>X</button> */}
        </div>
    );
}

/**
import React from 'react';

function TodoItem({ task, deleteTask, toggleCompleted }) {

function handleChange() {
 toggleCompleted(task.id);
 }
 
 return (
 <div className="todo-item">
 <input 
 type="checkbox"
 checked={task.completed}
 onChange={handleChange}
 />
<p>{task.text}</p>
<button onClick={() => deleteTask(task.id)}>
 X
 </button>
 </div>
 );
}
export default TodoItem;
 */
