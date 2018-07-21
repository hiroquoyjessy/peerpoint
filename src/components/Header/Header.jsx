import React from "react";

import './Header.css';

import logo from '../../images/logo.png';

const Header = () => (
  <div className="nav">
    <img className="nav-logo" alt="Peerpoint logo" src={logo} />
  </div>
);

export default Header;
