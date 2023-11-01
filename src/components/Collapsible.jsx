// Collapsible.jsx
import React, { useState } from 'react';

function Collapsible({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h2 onClick={() => setIsOpen(!isOpen)}>
        {title} {isOpen ? '-' : '+'}
      </h2>
      {isOpen && children}
    </div>
  );
}

export default Collapsible;
