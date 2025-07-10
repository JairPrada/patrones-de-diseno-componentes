// Button.js
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css'; // Importar los estilos CSS Modules

function Button({ children, primary, secondary, className, ...rest }) {
  const buttonClass = `
    ${styles.button}
    ${primary ? styles.primary : ''}
    ${secondary ? styles.secondary : ''}
    ${className || ''}
  `;

  return (
    <button className={buttonClass} {...rest}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;
