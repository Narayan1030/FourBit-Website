import "./Navbar.css";
import { useState } from "react";


// const Navbar = ({light, setLight}) => {
    
export default function Navbar({light, setLight}){
  function toggleTheme(){
    // document.body.classList.toggle("light");
    setLight(!light);
  }
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <div className="circle-logo"></div>
          <p className="fourbit-logo">FourBit</p>
        </div>
        <div className="services">
          <ul className="nav-services">
            <li>Services</li>
            <li>Work</li>
            <li>Process</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
          <div className="toggle-container">
            <label className="switch">
              <input 
              type="checkbox"
              onChange={toggleTheme}
              checked={light} />

              <span className="slider"></span>
            </label>
          </div>
          <button className="quote">Get a Quote</button>
        </div>
      </div>
    </>
  );
};


