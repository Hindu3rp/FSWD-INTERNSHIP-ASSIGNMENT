import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import VideoGrid from "./components/VideoGrid";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      
      <div className="main">
        <Sidebar />
        <VideoGrid />
      </div>

      <Footer />
    </div>
  );
}

export default App;