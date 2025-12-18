import "../styles/ToDoApp.css";
import { useState } from "react";
import Task from "./Task";

export default function ToDoApp() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Task 1',
            completed: true
        },
        {
            id: 2,
            text: 'Task 2',
            completed: false
        }
    ]);

    const [text, setText] = useState('');
    function addTask(text) {
        const newTask = {
            id: Date.now(),
            text,
            completed: false
        };
        setTasks([...tasks, newTask]);
        setText('');
    }

    function deleteTask(id) {
        setTasks(tasks.filter(task => task.id !== id));
    }

    function toggleCompleted(id) {
        setTasks(tasks.map(task => {
            if (task.id === id) {
                return { ...task, completed: !task.completed };
            } else {
                return task;
            }
        }));
    }

    return (
        <>
            <h1>React to To Do</h1>

            <div className="input-container">
                <h2><label htmlFor="add-task" for="add-task">Add Task</label></h2>
                <input
                    value={text}
                    onChange={e => setText(e.target.value)}
                    required
                />
                <button onClick={() => addTask(text)}>
                    <b>Add</b>
                </button>
            </div>

            <div className="task-container">
                {tasks.map(task => (
                    <Task
                        key={task.id}
                        task={task}
                        deleteTask={deleteTask}
                        toggleCompleted={toggleCompleted}
                    />
                ))}
            </div>
        </>
    );
}
