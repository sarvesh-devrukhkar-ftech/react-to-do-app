import "../styles/ToDoApp.css";
import { useState } from "react";
import Task from "./Task";

export default function ToDoApp() {
    const [tasks, setTasks] = useState([]);
    const [text, setText] = useState('');

    function addTask(text) {
        if (text === "") return;
        const newTask = {
            id: Date.now(),
            text,
            isCompleted: false
        };
        setTasks([...tasks, newTask]);
        setText('');
    }

    function handleDeleteTask(id) {
        setTasks(tasks.filter(task => task.id !== id));
    }

    function handleTaskCompleted(id) {
        setTasks(tasks.map(task => {
            if (task.id === id) {
                return { ...task, isCompleted: !task.isCompleted };
            } else {
                return task;
            }
        }));
    }

    return (
        <>
            <h1>React to To Do</h1>

            <div className="input-container">
                <input
                    name="task-text"
                    id="task-input"
                    value={text}
                    onChange={e => setText(e.target.value)}
                    placeholder="Add Task..."
                    required
                />
                <button onClick={() => addTask(text)}>
                    <b>Add</b>
                </button>
            </div>

            <div className="task-container">
                <ul className="tasks-list">
                    {tasks.map(task => (
                        <Task
                            key={task.id}
                            task={task}
                            handleDeleteTask={handleDeleteTask}
                            handleTaskCompleted={handleTaskCompleted}
                        />
                    ))}
                </ul>
            </div>
        </>
    );
}
