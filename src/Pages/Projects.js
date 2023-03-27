import React, { useState, useEffect } from 'react';
import ProjectList from '../Components/ProjectList';
import Navbar from '../Components/Navbar';
import ProjectsContext from '../Context/ProjectsContext'
import axios from 'axios';
import {useContext} from 'react';


export default function Projects() {
  const{projects, setProjects} = useContext(ProjectsContext)
  const [filter, setFilter] = useState("");

async function getProjectFilter() {
  const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/projects/${filter}`);
  setProjects(res.data);
}


useEffect(() => {

  getProjectFilter();
}, [filter, setProjects]);


  return (
    <>
    <div className='filter'>
      <p onClick={() => setFilter("")}>ALL</p>
      <p onClick={() => setFilter("UX-UI")}>UX - UI</p>
      <p onClick={() => setFilter("WebDevelopment")}>Web development</p>
      <p onClick={() => setFilter("WordpressWeb")}>WordpressWeb</p>
      <p onClick={() => setFilter("Branding")}>Branding</p>
      <p onClick={() => setFilter("Editorial")}>Editorial</p>
    </div>

    <div className='flex_row'>
          <ProjectList/>
    </div>

    
    </> 

  )
}