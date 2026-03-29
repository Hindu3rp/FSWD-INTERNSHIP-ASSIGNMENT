import React, { useState } from "react";
import "./App.css";

function DynamicListApp() {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");

  const addTask = () => {
    if (task.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: task,
      priority: priority
    };

    setTasks([...tasks, newTask]);
    setTask("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const filteredTasks =
    filter === "All"
      ? tasks
      : tasks.filter((t) => t.priority === filter);

  return (
    <div className="container">
      <h1>Smart Task List</h1>

      <div className="input-box">
        <input
          type="text"
          placeholder="Enter task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <button onClick={addTask}>Add</button>
      </div>

      <div className="filter">
        <button onClick={() => setFilter("All")}>All</button>
        <button onClick={() => setFilter("High")}>High</button>
        <button onClick={() => setFilter("Medium")}>Medium</button>
        <button onClick={() => setFilter("Low")}>Low</button>
      </div>

      {filteredTasks.map((t) => (
        <div key={t.id} className={`task ${t.priority}`}>
          <span>{t.text}</span>

          <div>
            <span className="badge">{t.priority}</span>
            <button onClick={() => deleteTask(t.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DynamicListApp;