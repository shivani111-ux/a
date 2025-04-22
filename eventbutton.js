
/*Write a program to update the text when a button is clicked using react event handlers*/
import React, { useState } from 'react';

function TextUpdater() {
  const [text, setText] = useState('Hello, world!');

  const handleClick = () => {
    setText('You clicked the button!');
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center bg-white p-10 rounded-xl shadow-xl w-[90%] max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">{text}</h1>
        <button
          onClick={handleClick}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300"
        >
          Click Me
        </button>
      </div>
    </div>
  );
}

export default TextUpdater;
