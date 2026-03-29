import React from "react";
import "./App.css";

function App() {
  return (
    <div className="hero">
      
      <div className="hero-left">
        <h1>Hello, I'm Hinduja RP</h1>
        <p>
          Aspiring Software Developer passionate about building responsive
          websites using React. This hero section adjusts automatically
          for mobile, tablet and desktop screens.
        </p>

        <div className="buttons">
          <button className="primary">Get Started</button>
          <button className="secondary">Learn More</button>
        </div>
      </div>

      <div className="hero-right">
        <img
          src="https://cdn-icons-png.flaticon.com/512/6997/6997662.png"
          alt="profile"
        />
      </div>

    </div>
  );
}

export default App;