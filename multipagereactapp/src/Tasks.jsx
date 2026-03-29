import React, { useState } from "react";

function Tasks({ tasks, setTasks }) {
  const [task, setTask] = useState("");

  const addTask = () => {
    if (!task) return;
    setTasks([...tasks, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="card">
      <h2>Task Manager</h2>

      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}>Add Task</button>

      {tasks.map((t, i) => (
        <div className="item" key={i}>
          <span>{t}</span>
          <button onClick={() => deleteTask(i)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Tasks;