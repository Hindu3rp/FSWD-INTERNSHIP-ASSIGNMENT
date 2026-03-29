import React from "react";

function Home({ tasks, notes }) {
  return (
    <div className="card">
      <h2>Welcome Back 👋</h2>
      <p>This is your personal productivity dashboard</p>

      <div className="stats">
        <div className="box">
          <h3>{tasks.length}</h3>
          <p>Total Tasks</p>
        </div>

        <div className="box">
          <h3>{notes.length}</h3>
          <p>Total Notes</p>
        </div>
      </div>
    </div>
  );
}

export default Home;