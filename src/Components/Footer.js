import React from 'react'
import Logo from "../img/logo.png"
import { FaChevronRight } from "react-icons/fa";


export default function Footer() {

  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
 
  return (
    <>
    <div  className="footer_color" id="contact">
       <div className="footer">
       <div >
          <a href="http://localhost:3000">
          <img src={Logo} />
          </a>
        </div>
        <h2>Are you interested? 
        <br/>
        Write me</h2>
        <div className="contact">
            <a href="https://www.linkedin.com/in/debi-codriansky-834655179/" target="_blank"><p>Linkedin</p></a>
            <a href="mailto:debicps@gmail.com?subject=Debi%20Codriansky&body=Hi%20Debi!" ><p>Email</p></a>
            <a href="tel:+972585155380"><p>Phone</p></a>
            <a href="https://www.behance.net/debicodriansky" target="_blank"><p>Behance</p></a>
            <a href="https://github.com/debic" target="_blank"> <p>Github</p></a>
        </div>
        </div>

        <div className="vertical">
            <a href="#home" onClick={(e) => handleLinkClick()}><p >back top</p></a>
            <a href="#home" onClick={(e) => handleLinkClick()}><FaChevronRight size="2em"/></a>
        </div>

        </div>
        <div className="mern">
          <p>Made with React</p>
        </div>
  
        </>
  )
}
