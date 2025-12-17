import "../styles/ToDoApp.css";
import { useState } from "react";
import Task from "./Task";

export default function ToDoApp() {
    const [task, setTask] = useState(""); // Task Input.
    const [tasks, setTasks] = useState([]); // Task List.

    function handleAddTask() {
        setTasks([...tasks, task]);
        setTask(""); // clear input
    }

    return (
        <div>
            <h1>React to To Do</h1>
            <div className="task-container">
                {tasks.map((task, index) => <Task task={task} />)}
            </div>

            <div className="input-container">
                <label htmlFor="add-task" for="add-task">Add Task </label>
                <input type="text" value={task} placeholder="Add task..."
                    onChange={(event) => setTask(event.target.value)} required />
                <button onClick={() => handleAddTask()}>
                    <b>Add</b>
                </button>
            </div>
        </div>
    );
}
