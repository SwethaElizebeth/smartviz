import React, { useState } from "react";
import "./App.css";

import Navbar from "./components/navbar/Navbar";

// Import local images
import img1 from './assets/img1.png';
import img2 from './assets/img2.png';
import img3 from './assets/img3.png';
import img4 from './assets/img4.png';

const App = () => {
  const [hoveredBox, setHoveredBox] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredBox(index);
  };

  const handleMouseLeave = () => {
    setHoveredBox(null);
  };

  return (
    <div>
      {/* Add Navbar */}
      <Navbar />

    <div className="container">
      {/* Header */}
      <h1 className="header">Create with SmartviZ!</h1>
      
      {/* Top Box */}
      <div
        className={`box ${hoveredBox === 0 ? "hovered" : ""}`}
        onMouseEnter={() => handleMouseEnter(0)}
        onMouseLeave={handleMouseLeave}
      >
        <img src={img1} alt="AI Image 1" className="box-image" />
        <div className="box-text">
          <h3>Record & Summarize</h3>
          <p>Record and generate summaries.</p>
        </div>
        {hoveredBox === 0 && <div className="popup"></div>}
      </div>

      <div className="bottom-boxes">
        {/* Bottom Left Box */}
        <div
          className={`box ${hoveredBox === 1 ? "hovered" : ""}`}
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
        >
          <img src={img2} alt="AI Image 2" className="box-image" />
          <div className="box-text">
            <h3>Transcribe</h3>
            <p>Transcribe speech to text.</p>
          </div>
          {hoveredBox === 1 && <div className="popup"></div>}
        </div>

        {/* Bottom Center Box */}
        <div
          className={`box ${hoveredBox === 2 ? "hovered" : ""}`}
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={handleMouseLeave}
        >
          <img src={img3} alt="AI Image 3" className="box-image" />
          <div className="box-text">
            <h3>Upload Audio</h3>
            <p>Audio transcription.</p>
          </div>
          {hoveredBox === 2 && <div className="popup"></div>}
        </div>

        {/* Bottom Right Box */}
        <div
          className={`box ${hoveredBox === 3 ? "hovered" : ""}`}
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={handleMouseLeave}
        >
          <img src={img4} alt="AI Image 4" className="box-image" />
          <div className="box-text">
            <h3>Summarize</h3>
            <p>Automatic summarization.</p>
          </div>
          {hoveredBox === 3 && <div className="popup"></div>}
        </div>
      </div>
    </div>
   </div>
  );
};

export default App;
