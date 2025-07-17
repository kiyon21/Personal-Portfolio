import React from 'react';
import {AboutMePage} from './components/AboutMe'
import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import { JobExperiencePage } from './components/JobExperience';
import { Resume } from './components/Resume';
import { ProjectsPage } from './components/Projects';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
      <Route path='/' Component={LandingPage}/>
      <Route path='/Personal-Portfolio' Component={LandingPage}/>
      <Route path='/aboutme' Component={AboutMePage}/>
      <Route path='/experience' Component={JobExperiencePage}/>
      <Route path='/resume' Component={Resume}/>
      <Route path='/projects' Component={ProjectsPage}/>
      </Routes>
    </Router>

  );
}

export default App;
