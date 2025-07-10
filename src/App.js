// App.js
import React from 'react';
import CompoundComponent from './examples/CompoundComponent';
import ExtensibleStyles from './examples/ExtensibleStyles';
import ControlProps from './examples/ControlProps';
import RenderProps from './examples/RenderProps';
import HigOrderComponent from './examples/HigOrderComponent';

import './App.css';

function Table() {
  return (
    <table>
      <tr>
        <th>Patrón de Diseño</th>
        <th>Definición</th>
        <th>Comunicación entre Componentes</th>
        <th>Reutilización de Lógica</th>
        <th>Flexibilidad</th>
        <th>Ventajas</th>
        <th>Desventajas</th>
      </tr>
      <tr>
        <td>Compound Component</td>
        <td>
          Un grupo de componentes relacionados que se utilizan juntos como una
          unidad cohesiva. Los componentes individuales pueden interactuar y
          compartir estado.
        </td>
        <td>
          Comunicación interna a través del estado compartido entre componentes.
        </td>
        <td>Alta reutilización de componentes en diferentes contextos.</td>
        <td>
          Moderada. Los componentes internos generalmente están diseñados para
          trabajar juntos.
        </td>
        <td>
          Promueve una estructura organizada. Los componentes internos pueden
          optimizarse para su uso conjunto.
        </td>
        <td>
          Puede haber una mayor complejidad en el manejo del estado compartido.
          La adaptación de los componentes para otros contextos podría requerir
          cambios significativos.
        </td>
      </tr>
      <tr>
        <td>Extensible Styles</td>
        <td>
          Separación de la lógica de estilo de los componentes permitiendo que
          los estilos se extiendan o modifiquen fácilmente mediante props o
          clases.
        </td>
        <td>
          Comunicación a través de props que afectan la apariencia del
          componente.
        </td>
        <td>
          Alta reutilización de estilos personalizados en diferentes
          componentes.
        </td>
        <td>
          Alta. Los estilos pueden ser personalizados y extendidos según sea
          necesario.
        </td>
        <td>
          Flexibilidad en la personalización de la apariencia. Facilita el
          mantenimiento y la consistencia del estilo.
        </td>
        <td>
          Puede haber una curva de aprendizaje al entender cómo aplicar y
          extender los estilos. La propagación de estilos puede ser tediosa en
          componentes anidados.
        </td>
      </tr>
      <tr>
        <td>Control Props</td>
        <td>
          Los componentes reciben props que influyen en su comportamiento y
          apariencia, permitiendo una mayor personalización.
        </td>
        <td>
          Comunicación a través de props que controlan el comportamiento y el
          aspecto del componente.
        </td>
        <td>
          Alta reutilización al permitir configuraciones flexibles a través de
          props.
        </td>
        <td>
          Alta. Los props de control pueden ser adaptados para diferentes casos
          de uso.
        </td>
        <td>
          Personalización detallada de componentes. Fomenta la reutilización al
          ajustar props según necesidades.
        </td>
        <td>
          El aumento de props puede complicar la interfaz del componente. Puede
          haber problemas de rendimiento si se exagera con los props.
        </td>
      </tr>
      <tr>
        <td>Render Props</td>
        <td>
          Un componente acepta una función (render prop) como prop que define
          cómo renderizar parte del contenido. Esto permite la inyección de
          contenido desde fuera del componente.
        </td>
        <td>
          Comunicación a través de props de función que determinan qué contenido
          renderizar.
        </td>
        <td>
          Alta reutilización al permitir que los componentes externos
          proporcionen contenido dinámico.
        </td>
        <td>
          Alta. El contenido renderizado puede variar ampliamente según la
          función proporcionada.
        </td>
        <td>
          Flexibilidad en la composición y modificación del contenido. Permite
          compartir lógica compleja con otros componentes.
        </td>
        <td>
          Puede llevar a una mayor anidación y complejidad si se abusa. Requiere
          comprensión de funciones como props, lo que puede ser confuso para
          algunos desarrolladores.
        </td>
      </tr>
      <tr>
        <td>Higher-Order Component</td>
        <td>
          Un componente que envuelve a otro componente para proporcionar
          funcionalidad adicional.
        </td>
        <td>
          Comunicación a través de props entre el componente envuelto y el
          componente HOC.
        </td>
        <td>
          Alta reutilización de la lógica encapsulada en el HOC en varios
          componentes.
        </td>
        <td>
          Alta. La funcionalidad del HOC puede ser adaptada y aplicada a
          diferentes componentes.
        </td>
        <td>
          Promueve la reutilización de funcionalidad entre componentes. Ayuda a
          mantener la separación de preocupaciones.
        </td>
        <td>
          Puede llevar a componentes anidados complejos y difíciles de rastrear.
          Puede haber una sobreabstracción si se usan en exceso.
        </td>
      </tr>
    </table>
  );
}

function App() {
  return (
    <div className="App">
      <h1 className="text-center">Patrones de diseño de componentes</h1>
      <details>
        <summary>Ejemplo Compound Component</summary>
        <div className="container-example">
          <CompoundComponent />
        </div>
      </details>
      <details>
        <summary>Ejemplo Extensible Styles</summary>
        <div className="container-example">
          <ExtensibleStyles />
        </div>
      </details>
      <details>
        <summary>Ejemplo Control Props</summary>
        <div className="container-example">
          <ControlProps />
        </div>
      </details>
      <details>
        <summary>Ejemplo Render Props</summary>
        <RenderProps />
      </details>
      <details>
        <summary>Ejemplo Higher-Order Component</summary>
        <div className="container-example">
          <HigOrderComponent />
        </div>
      </details>
      <h1 className="text-center">Tabla Comparativa</h1>
      <div className="container-table">
        <Table />
      </div>
    </div>
  );
}

export default App;
