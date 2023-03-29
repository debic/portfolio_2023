import React from 'react'
import {useContext} from 'react';
import ProjectsContext from '../Context/ProjectsContext'
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function ProjectCard({project}) {

    const { setCurrentProject, currentProject } = useContext(ProjectsContext);
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    const cardStyle = {
        backgroundImage: `url(${project.portraitImage})`,
      };

    function currentProjectFunction() {
      window.scrollTo(0, 0);
        setCurrentProject(project);
     }

  return (
    <Link
      to={`/project/${project._id}`}
      onClick={() => currentProjectFunction(project)}
     >
        <div className="card" >
          <div className="card-image" style={cardStyle}></div>
          <div className="card-content">
            <h2>{project.name} | {project.short_description}</h2>
          </div>
        </div>
    </Link>
)
}
