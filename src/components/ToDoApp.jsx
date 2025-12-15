import "../styles/ToDoApp.css";
import React, { useState } from "react";
import Task from "./Task";

export default function ToDoApp() {
    const [tasks, setTasks] = useState([
        { id: 1, task: "Task-1", completed: false },
        { id: 2, task: "Task-2", completed: true },
    ]);

    // const [text, setText] = useState(""); // Hooks for Task Text.

    function addTask(text) {
        const newTask = {
            id: Date.now(),
            text,
            completed: false,
        };

        setTasks([...tasks, newTask]); // Creating new array in the state with new task.
        setText(""); // Setting Input Field Empty.
    }

    return (
        <div>
            <h1>React to To Do</h1>
            <div className="task-container">
                {tasks.map((task) => (
                    <Task
                        // key={task.id}
                        // deleteTask={deleteTask}
                        // toggleCompleted={task.completed}
                        task={task}
                    />
                ))}
            </div>
            <div className="input-container">
                <label htmlFor="add-task" for="add-task">
                    Add Task
                </label>
                <input type="text" name="add-task" id="add-task" required />
                <button onClick={() => addTask(text)}>
                    <b>Add</b>
                </button>
            </div>
        </div>
    );
}

/*
function TodoList() {

function deleteTask(id) {
 setTasks(tasks.filter(task => task.id !== id));
 }  

 function toggleCompleted(id) {
 setTasks(tasks.map(task => {
 if (task.id === id) {
 return {…task, completed: !task.completed};
 } else {
 return task;
 } 
 }));
 }

 return (
 <div className="todo-list">
 <input
 value={text}
 onChange={e => setText(e.target.value)} 
 />

 <button onClick={() => addTask(text)}>Add</button>
 </div>
 );
}
export default TodoList;
*/
