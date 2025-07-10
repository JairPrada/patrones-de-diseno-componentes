// Tabs.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Tabs.css'; // Importar los estilos CSS

// Componente funcional Tabs
function Tabs({ children }) {
  const [activeTabIndex, setActiveTabIndex] = useState(0); // Estado para controlar la pestaña activa

  // Manejar el clic en una pestaña
  const handleTabClick = (index) => {
    setActiveTabIndex(index);
  };

  return (
    <div className="tabs-container">
      <div className="tab-buttons">
        {/* Crear botones de pestaña */}
        {children.map((child, index) => (
          <button
            key={index}
            className={`tab-button ${index === activeTabIndex ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
          >
            {child.props.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {/* Mostrar contenido de la pestaña activa */}
        {children[activeTabIndex]}
      </div>
    </div>
  );
}

Tabs.propTypes = {
  children: PropTypes.instanceOf(Array).isRequired,
};

// Componente funcional Tab
function TabItem({ label, children }) {
  return <div className="tab-content">{children}</div>;
}

TabItem.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export { TabItem, Tabs };
