import React from 'react'
import {useContext} from 'react';
import ProjectCard from './ProjectCard';
import ProjectsContext from '../Context/ProjectsContext'

export default function ProjectList() {
const{projects} = useContext(ProjectsContext)
  return (
    <>
    {projects.map((project) => {
    
          return ( 
            <ProjectCard project={project} key={project._id}/>
          )
        })}
    </>
  )
}

