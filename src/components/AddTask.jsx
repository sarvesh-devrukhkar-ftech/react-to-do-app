import "../styles/AddTask.css";

export default function AddTask() {
  return (
    <div className="add-task">
      <div className="input-container">
        <label htmlFor="add-task" for="add-task">
          Add Task
        </label>
        <input type="text" name="add-task" id="add-task" required />
        <button>
          <b>Add</b>
        </button>
      </div>
    </div>
  );
}
