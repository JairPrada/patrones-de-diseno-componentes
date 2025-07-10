// App.js
import React from 'react';
import Button from './Button';

function ExtensibleStyles() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Button primary>Primary Button</Button>
      <br />
      <Button secondary>Secondary Button</Button>
      <br />
      <Button className="custom-button">Custom Button</Button>
    </div>
  );
}

export default ExtensibleStyles;
