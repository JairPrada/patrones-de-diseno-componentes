import React from 'react';
import { Tabs, TabItem } from './Tabs';

function CompoundComponent() {
  return (
    <Tabs>
      <TabItem label="Tab 1">
        <p>Contenido del Tab 1.</p>
      </TabItem>
      <TabItem label="Tab 2">
        <p>Contenido del Tab 2.</p>
      </TabItem>
      <TabItem label="Tab 3">
        <p>Contenido del Tab 3.</p>
      </TabItem>
    </Tabs>
  );
}
export default CompoundComponent;
