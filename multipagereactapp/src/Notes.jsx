import React, { useState } from "react";

function Notes({ notes, setNotes }) {
  const [note, setNote] = useState("");

  const addNote = () => {
    if (!note) return;
    setNotes([...notes, note]);
    setNote("");
  };

  return (
    <div className="card">
      <h2>Notes</h2>

      <textarea
        placeholder="Write note..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />

      <button onClick={addNote}>Save Note</button>

      {notes.map((n, i) => (
        <p className="note" key={i}>{n}</p>
      ))}
    </div>
  );
}

export default Notes;