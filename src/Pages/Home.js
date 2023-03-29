import React, { useState, useEffect } from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaBehance } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import ProjectListLast from '../Components/ProjectListLast';
import Circle1 from '../img/circle_1.png';
import Circle2 from '../img/circle_.png';
import Web_dev from "../img/web_dev.png"
import cv from  "../img/cv.png"
import ProjectsContext from '../Context/ProjectsContext'
import { FaChevronRight } from "react-icons/fa";

export default function Home() {


  return (
    <>

    <div className="container grid" id="home"> 

        <section id="line1" > 
            <div className='line'></div>
        </section>

        <section id="social_media" > 
           <a href="https://www.linkedin.com/in/debi-codriansky-834655179/" target="_blank"><FaLinkedinIn size="2.5em" className="social_media_icon"/></a>
           <a href="https://github.com/debic" target="_blank"><FaGithub size="2.5em" className="social_media_icon"/></a>
           <a href="https://www.behance.net/debicodriansky" target="_blank"><FaBehance size="2.5em" className="social_media_icon"/></a>
        </section>

        <section id="line2" > 
        <div className='line2'></div>
        </section>

        <section id="main" > 
            <div className="main_div">
                <h3>Hello! My name is Debi Codriansky</h3>
                <h1>Web development 
                <br/>
                and UX - UI designer</h1>
                <img className="img1" src={Circle1}/> 
                <img className="img2"src={Circle2}/>            
              </div>
        </section>
    </div>  

    <section className='LatestProyects' id="projects">
        <h2>Latest Proyects</h2>
        <p> Here are some of the projects I have done. Each one was created according to the needs of each user.</p>
    </section>

    <div className='flex_row'>
          <ProjectListLast/>
    </div>

    <div className='more_projects'>
      <div className='more_projects_hover'>
      <a className='more_projects_hover_flex' href="https://debicp-fe.herokuapp.com/projects" >
        <h2>See more projects</h2>
        <FaChevronRight size="4em"/></a>
      </div>
    </div>

    <section className='services' id="services" >
     <h2>Services</h2>
     <div className="services_flex">
      <div className="service_card">
        <img src={Web_dev}/>
        <h3>Web development </h3>
        <p>I develop custom websites to bring your ideas to life online. I use the tools that best suit your needs. Some are App MERN, wordpress and shopify.</p>
      </div>
      <div className="service_card">
      <img src={Web_dev}/>
       <h3> UX | UI</h3>
       <p>I can design intuitive and attractive user interfaces that enhance user satisfaction and increase conversion rates.</p>
      </div>
      <div className="service_card">
      <img src={Web_dev}/>
        <h3> Branding</h3>
        <p>Crafting unique and memorable visual identities that embody the essence of your brand and resonate with your target audience.</p>
      </div>
    </div>
    </section>

    <div className='aboutMe' id="aboutMe">
      <div className="aboutme_text">
        <h2>About me</h2>
        <p> I studied at Pontificia Universidad Católica de Chile and graduated as a strategic designer. I use my graphic design skills combined with my coding knowledge to provide users with the best experience possible.</p>
      </div>
      <div className="aboutme_cv">
        <a href="../img/cv_debi.pdf" download>
          <div className="aboutme_cv_download">
            <img src={cv} />
            <p>Download my CV</p>
         </div>
        </a>
      </div>
    </div>
    </> 

  )
}