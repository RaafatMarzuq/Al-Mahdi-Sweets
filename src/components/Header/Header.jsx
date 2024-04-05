import React from "react";
import logoIcon from './LOGO-3.png'
import './style.css'

function Header() {
  return (
    <header>
      <div className="header-content">
        <h4>קונדיטוריה ובית קפה</h4> 
        <img className="icon" src={logoIcon} alt="Logo Icon" />
      </div> 
    </header>
  );
}

export default Header;
