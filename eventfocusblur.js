/*Write a program using focus and blur event handlerWhen a text is clicked it has to be focused with a color When a text/image is hovered it should become blur*/
import React, { useState } from 'react';
import myImage from './assets/Default.jpg'; 

function FocusBlurComponent() {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <>
      <style>{`
        .container {
          text-align: center;
          margin-top: 50px;
          font-family: Arial, sans-serif;
        }

        .custom-input {
          padding: 10px 15px;
          border: 2px solid #ccc;
          border-radius: 8px;
          outline: none;
          transition: border-color 0.3s;
          font-size: 16px;
        }

        .custom-input.focused {
          border-color: #007bff;
        }

        .hover-blur {
          margin-top: 30px;
          font-size: 20px;
          transition: filter 0.3s;
        }

        .hover-blur:hover {
          filter: blur(3px);
        }

        .image {
          margin-top: 20px;
          border-radius: 10px;
          width: 150px;
          height: 150px;
        }
      `}</style>

      <div className="container">
        <input
          type="text"
          placeholder="Click to focus"
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={`custom-input ${isFocused ? 'focused' : ''}`}
        />

        <p className="hover-blur">Hover over this text to blur it</p>

        
        <img src={myImage} alt="Local example" className="hover-blur image" />
      </div>
    </>
  );
}
