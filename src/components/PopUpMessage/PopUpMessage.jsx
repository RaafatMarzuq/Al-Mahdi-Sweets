import React, { useEffect, useState } from 'react';
import './popUpStyle.css';
import  todaysSpecial  from './knafe.png';


const Popup = ({ message, onClose }) => {
  const [topOffset, setTopOffset] = useState(300);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const popupHeight = document.querySelector('.popup').offsetHeight;
      const popupTopOffset = (windowHeight - popupHeight) / 2 + window.scrollY;
      setTopOffset(popupTopOffset);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="popup" style={{ top: `${topOffset}px` }}>
      <div className="popup-inner">
        <button className="close-btn" onClick={onClose}>סגור</button>
        <h1>המיוחדים שלנו להיום</h1>
        <img className='todays-speacial-image' src={todaysSpecial} alt='knafe' />
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Popup;
