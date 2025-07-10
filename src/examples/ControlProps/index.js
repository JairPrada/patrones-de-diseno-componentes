// App.js
import React, { useState } from 'react';
import Toggle from './Toggle';

function ControlProps() {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggleChange = () => {
    setIsToggled((prevToggled) => !prevToggled);
  };

  return (
    <div>
      <Toggle on={isToggled} onChange={handleToggleChange} />
      <p>{isToggled ? 'ON' : 'OFF'}</p>
    </div>
  );
}

export default ControlProps;
