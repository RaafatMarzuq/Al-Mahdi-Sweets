import React from 'react';
import './popUpStyle.css'

const Popup = ({ message, onClose }) => {
  return (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={onClose}>סגור</button>
        <p>המיוחדים שלנו להיום</p>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Popup;