import "./App.css"
import AddTask from "./components/AddTask";

function App() {
  return (
    <div>
      <h1>React to To Do</h1>
      <div className="task-container"></div>
      <AddTask />
    </div>
  );
}

export default App;
