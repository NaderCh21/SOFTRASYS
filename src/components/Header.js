// src/components/Header.js
import React from 'react';
import '../styles/Header.css'; // Assuming you will create a CSS file for the styles

const Header = () => {
  return (
    <div id="header">
      <img alt="Site Logo" src="https://eyemanager.softrasys.com/icons/Companies-Logos/softrasys-main.png" className="logo" />
      <div className="menus" id="mainmenu">
      </div>
    </div>
  );
};

export default Header;
