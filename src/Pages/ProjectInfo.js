import React, { useState, useEffect } from 'react';
import ProjectsContext from '../Context/ProjectsContext'
import {useContext} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function ProjectInfo() {
const { id } = useParams();
const { currentProject, setCurrentProject } = useContext(ProjectsContext);
const [projectImages, setProjectImages] = useState([]);
const [projectService, setProjectService] = useState([]);
const [isLoading, setIsLoading] = useState(true);


async function getProjectById() {
  const res = await axios.get(`https://debicp.herokuapp.com/projects/id/${id}`);
  setCurrentProject(res.data);
  setProjectImages(res.data.projectImages);
  setIsLoading(false);
  setProjectService(res.data.service)
}

useEffect(() => {
  getProjectById();
}, []);

const style = {
  backgroundImage: `url(${currentProject.headerImage})`,
};

console.log(currentProject)

if (isLoading && !currentProject) {
  return <p>Loading...</p>;
}
  return (
    <>
    <div className="header-container" style={style}>
      <div className="header-container-title">
        <h2>{currentProject.name}</h2>
            {projectService.map((service) => {
            return ( 
               <p className="header-container-subtitle">{service}</p>
            )
            })}
      </div>
   </div>
     <div className='project_info'>
        <h2>About</h2>
        <p>{currentProject.long_description}</p>
        {currentProject.web_link=="none"? <></>
        :
        <a>{currentProject.web_link}</a>
      }
    </div>
    <div>

      {projectImages.map((image) => {
        return ( 
          <img className="projectImages" src={image} />
        )
       })} 


    </div>
  </>
  )
}
