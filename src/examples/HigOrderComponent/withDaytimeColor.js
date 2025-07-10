// withDaytimeColor.js (Higher-Order Component)
import React from 'react';

// HOC que cambia el color de fondo del componente según la hora del día
function withDaytimeColor(WrappedComponent) {
  return function WithDaytimeColor(props) {
    const currentHour = new Date().getHours();
    console.log(currentHour);
    let backgroundColor;
    if (currentHour <= 20 && currentHour < 22) {
      // Día
      backgroundColor = '#f8ffc9';
    } else {
      // Noche
      backgroundColor = '#001e3d';
    }

    const style = {
      backgroundColor,
      padding: '10px',
      textAlign: 'center',
    };

    return (
      <div style={style}>
        <WrappedComponent {...props} />
      </div>
    );
  };
}

export default withDaytimeColor;
