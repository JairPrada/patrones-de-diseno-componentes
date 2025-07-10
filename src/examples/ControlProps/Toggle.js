// Toggle.js
import React from 'react';
import PropTypes from 'prop-types';
import './Toggle.css'; // Importar los estilos CSS

function Toggle({ on, onChange }) {
  return (
    <label className="toggle">
      <input type="checkbox" checked={on} onChange={onChange} />
      <span className="slider"></span>
    </label>
  );
}

Toggle.propTypes = {
  on: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Toggle;
