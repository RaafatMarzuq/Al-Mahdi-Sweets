import React from "react";
import logoIcon from './LOGO-3.png'

function Header() {
  return (
    <header>
      <div className="header-content">
        <img className="icon" src={logoIcon} alt="Logo Icon" />
        <h4>קונדיטוריה ובית קפה אלמהדי</h4>
      </div> 
    </header>
  );
}

export default Header;
