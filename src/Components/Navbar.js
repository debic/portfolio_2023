import React, { useState, useEffect, useRef } from "react"
import Logo from "../img/logo.png"
import { FaBars } from 'react-icons/fa';
import { Link } from "react-router-dom";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false)
  const ref = useRef(null);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }


  const handleLinkClick = () => {
    window.scrollTo({
      top: 999999999999,
      behavior: "smooth",
    });
  };
  
  return (
    
    <nav className="navbar " >
      <div className="containerNavbar">
        <div className="logo">
          <a href="http://localhost:3000">
          <img src={Logo} />
          </a>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <FaBars size="2.5em" />
        </div>
        <div className={`nav-elements ${showNavbar && 'active'}`}>
          <ul>
            <li >
            <a href="http://localhost:3000/" >Home</a>
            </li>
            <li>
            <a href="http://localhost:3000/projects" >Projects</a>
            </li>
            <li>
              <p onClick={(e) => handleLinkClick()}>Contact</p>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
