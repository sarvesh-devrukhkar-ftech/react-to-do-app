import "../styles/Task.css";

// export default function Task({ task, deleteTask, toggleCompleted }) {
export default function Task({ task }) {
    return (
        <div className="task">
            <span>{task}</span>
        </div>
    );
}
