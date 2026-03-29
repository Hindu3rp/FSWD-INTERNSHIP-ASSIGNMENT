import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Tasks from "./Tasks";
import Notes from "./Notes";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [notes, setNotes] = useState([]);

  return (
    <BrowserRouter>
      <div className="app">
        <h1>⚡ Productivity Dashboard </h1>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/tasks">Tasks</Link>
          <Link to="/notes">Notes</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home tasks={tasks} notes={notes} />} />
          <Route path="/tasks" element={<Tasks tasks={tasks} setTasks={setTasks} />} />
          <Route path="/notes" element={<Notes notes={notes} setNotes={setNotes} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;