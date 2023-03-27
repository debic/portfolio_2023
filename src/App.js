import './App.css';
import Home from './Pages/Home.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ProjectsContext from './Context/ProjectsContext';
import ProjectInfo from './Pages/ProjectInfo.js';
import Footer from './Components/Footer';
import Projects from './Pages/Projects';
import Navbar from './Components/Navbar';
function App() {

  const [projects, setProjects] = useState([]);
  const [currentProject, setCurrentProject] = useState({});

  async function readProjects(){
    try{
      const saved = await axios.get(`https://debicp-fe.herokuapp.com/projects/`)
      setProjects(saved.data)
    }catch(err){
      console.log(err)
    }
  }

    useEffect(() => {
    readProjects()
  }, [])


  return (
    <BrowserRouter>
    <ProjectsContext.Provider value={{projects, currentProject, setCurrentProject, setProjects}}>
     <div className="App">
     <Navbar/>

       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/projects" element={<Projects />} />
         <Route path="/project/:id" element={<ProjectInfo />} />
       </Routes>
       <Footer/>
     </div>
    </ProjectsContext.Provider>
  </BrowserRouter>
  );
}

export default App;
