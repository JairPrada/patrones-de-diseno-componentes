import React from 'react';
import withDaytimeColor from './withDaytimeColor';
import CompoundComponent from '../CompoundComponent';

// Componente funcional
function Greeting({ message }) {
  return <div>{message}</div>;
}

// Aplicar el HOC al componente Greeting
const GreetingWithDaytimeColor = withDaytimeColor(CompoundComponent);
// const GreetingWithDaytimeColor = withDaytimeColor(Greeting);

function HigOrderComponent() {
  return (
    <div>
      <GreetingWithDaytimeColor message="Bienvenido BCS!" />
    </div>
  );
}

export default HigOrderComponent;
