// App.js
import React from 'react';
import MouseTracker from './MouseTracker';

function RenderProps() {
  return (
    <div>
      <MouseTracker
        render={({ x, y }) => (
          <p>
            La posicion actual del cursor es : ({x}, {y})
          </p>
        )}
      />
    </div>
  );
}

export default RenderProps;
