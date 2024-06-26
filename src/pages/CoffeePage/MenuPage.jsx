import React from 'react';
import { Link } from 'react-router-dom'; 
import { MdOutlineArrowBack } from "react-icons/md";

import './style.css';

const MenuPage = (props) => {
  
  return (
    <div className="menu-container">
      <ul className="menu-list">
        <Link to="/" className="back-button"><MdOutlineArrowBack style={{ fontSize: '2rem' }} /></Link>

        <h1>{props.MenuName}</h1>
        {props.MenuItems.map((item, index) => (
          <li key={index} className="menu-item">
            <span className="item-price">{item.price}</span>
            <span className="item-name">{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuPage;
