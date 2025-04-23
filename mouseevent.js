/*Write a program to display a message using onMouse event handlers*/
import React, { useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  const handleMouseOver = () => {
    setMessage('You hovered over the box......');
  };

  const handleMouseOut = () => {
    setMessage('');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <div
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        style={{
          width: '200px',
          height: '100px',
          margin: '0 auto',
          backgroundColor: '#f0f0f0',
          border: '2px solid #333',
          lineHeight: '100px',
          cursor: 'pointer'
        }}
      >
        Hover Over Me
      </div>
      <p>{message}</p>
    </div>
  );
}

export default App;
