import React, { useState } from "react";
import "./App.css";

function MoodTracker() {
  const [mood, setMood] = useState("");
  const [note, setNote] = useState("");
  const [history, setHistory] = useState([]);

  const saveMood = () => {
    if (!mood) return;

    const newEntry = {
      mood,
      note,
      date: new Date().toLocaleString()
    };

    setHistory([newEntry, ...history]);
    setMood("");
    setNote("");
  };

  return (
    <div className="container">
      <h1>Daily Mood Journal</h1>

      <div className="form">
        <select value={mood} onChange={(e) => setMood(e.target.value)}>
          <option value="">Select Mood</option>
          <option value="😊 Happy">😊 Happy</option>
          <option value="😢 Sad">😢 Sad</option>
          <option value="😴 Tired">😴 Tired</option>
          <option value="🤩 Excited">🤩 Excited</option>
          <option value="😡 Angry">😡 Angry</option>
        </select>

        <textarea
          placeholder="Write about your mood..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />

        <button onClick={saveMood}>Save Mood</button>
      </div>

      <div className="history">
        <h2>Mood History</h2>

        {history.map((item, index) => (
          <div key={index} className="card">
            <h3>{item.mood}</h3>
            <p>{item.note}</p>
            <small>{item.date}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoodTracker;