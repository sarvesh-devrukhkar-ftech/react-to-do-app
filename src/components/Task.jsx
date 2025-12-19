import "../styles/Task.css";

export default function Task({ task, handleDeleteTask, handleTaskCompleted }) {

    return (
        <li>
            <input
                type="checkbox"
                checked={task.isCompleted}
                onChange={() => handleTaskCompleted(task.id)}
            />
            <p style={{ "textDecoration": (task.isCompleted) ? "line-through" : "none" }}>{task.text}</p>
            <button onClick={() => handleDeleteTask(task.id)}><strong title="Remove">X</strong></button>
        </li>
    );
}