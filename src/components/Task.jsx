import "../styles/Task.css";

export default function Task({ task, deleteTask, toggleCompleted }) {
    function handleChange() {
        toggleCompleted(task.id);
    }

    return (
        <li className="todo-item">
            <input
                type="checkbox"
                checked={task.completed}
                onChange={handleChange}
            />
            <span>{task.text}</span>
            <button onClick={() => deleteTask(task.id)}>
                X
            </button>
        </li>
    );
}
