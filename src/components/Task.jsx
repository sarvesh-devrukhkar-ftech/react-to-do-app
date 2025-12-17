import "../styles/Task.css";

// export default function Task({ task, deleteTask, toggleCompleted }) {
export default function Task({ task }) {
    return (
        <ul className="task">
            <span>{task}</span>
        </ul>
    );
}
