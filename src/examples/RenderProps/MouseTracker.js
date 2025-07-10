// MouseTracker.js
import React, { useState } from 'react';
import './MouseTracker.css';

function MouseTracker({ render }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div className="mouse-tracker" onMouseMove={handleMouseMove}>
      {render(position)}
    </div>
  );
}

export default MouseTracker;
