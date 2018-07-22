import React from "react";

import './Footer.css';

const Footer = () => (
  <div className="footer">
    <h2 style={{ marginBottom: 0 }}>Talk to our Funding Experts</h2>
    <h3 style={{ marginTop: 0, color: '#2A5CAD' }}><i className="material-icons" style={{ top: 5, right: 4, position: 'relative' }}>phone</i>(312) 468-0509</h3>
    <div className="footer-link-wrapper">
        <span className="footer-link" onClick={() => console.log("modal")}>Privacy Policy</span>
        <span> | </span>
        <span className="footer-link" onClick={() => console.log("modal")}>Terms & Conditions</span>
        <span> | </span>        
        <span className="footer-link" onClick={() => console.log("modal")}>Disclosures</span>
    </div>
    <p className="copyright">Copyright 2018 Peerpoint Capital Inc</p>
  </div>
);

export default Footer;
