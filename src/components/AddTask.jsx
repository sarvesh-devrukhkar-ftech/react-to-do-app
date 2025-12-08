import "../styles/AddTask.css"

export default function AddTask() {
  return (
    <div className="add-task">
      <div className="input-container">
        <input type="text" name="" id="add-task" placeholder="Add Task..." />
        <button>Add</button>
      </div>
    </div>
  );
}
