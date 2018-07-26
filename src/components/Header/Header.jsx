import React from "react";

import { Link } from "react-router-dom";


import './Header.css';

import logo from '../../images/logo.png';

const Header = () => (
  <div className="nav">
    <Link to="/">
      <img className="nav-logo" alt="Peerpoint logo" src={logo} />
    </Link>
  </div>
);

export default Header;
