/*Write a program to display a message using onMouse event handlers*/
import React, { useState } from 'react';

const boxStyle = {
  width: '200px',
  height: '100px',
  backgroundColor: 'lightblue',
  lineHeight: '100px',
  margin: '50px auto',
  borderRadius: '10px',
  fontSize: '18px',
  textAlign: 'center',
  transition: 'background-color 0.3s'
};

const messageStyle = {
  textAlign: 'center',
  fontSize: '20px',
  color: '#333'
};

function MouseEventExample() {
  const [message, setMessage] = useState('Waiting for interaction...');

  const handleMouseEvent = (isHovering) => {
    setMessage(isHovering ? 'Mouse is over the box!' : 'Mouse left the box.');
  };

  return (
    <div>
      <div
        style={boxStyle}
        onMouseEnter={() => handleMouseEvent(true)}
        onMouseLeave={() => handleMouseEvent(false)}
      >
        Hover over me!
      </div>
      <p style={messageStyle}>{message}</p>
    </div>
  );
}

export default MouseEventExample;

