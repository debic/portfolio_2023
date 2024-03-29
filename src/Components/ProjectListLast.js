import React from 'react'
import {useContext} from 'react';
import ProjectCard from './ProjectCard';
import ProjectsContext from '../Context/ProjectsContext'

export default function ProjectListLast() {
const{projects} = useContext(ProjectsContext)
  return (
    <>
    {projects.slice(0,4).map((project) => {
    
          return ( 
            <ProjectCard project={project} key={project._id}/>
          )
        })}
    </>
  )
}

