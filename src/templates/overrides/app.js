import React from 'react';

export default component => (
  <div>
    <h1>hello world</h1>
    <button
      onClick={component.handleClick}
    >
      Add Items
    </button>
    <ul>
      {
        component.state.items.map(item => (<li>{item}</li>))
      }
    </ul>
  </div>
);
