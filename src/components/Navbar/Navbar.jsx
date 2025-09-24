import "./Navbar.css";
import { useState } from "react";
import logo from "./../../assets/4bitlogo.png"
import { GiHamburgerMenu } from "react-icons/gi";

// const Navbar = ({light, setLight}) => {
    
export default function Navbar({light, setLight}){
  const [showMenu,setShowMenu] = useState(false)
  function toggleTheme(){
    // document.body.classList.toggle("light");
    setLight(!light);
  }

  function openHamburgerMenu(){
    setShowMenu(!showMenu)
  }
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="company logo" className="fourbitlogo" />
        </div>
        <div className="services">
          <ul className={showMenu? "nav-services":"hamburger-nav"}>
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
          <div className="hamburger-menu" onClick={openHamburgerMenu}><GiHamburgerMenu style={{backgroundColor:"var(--bg-color)"} }/></div>

        </div>
      </div>
    </>
  );
};


