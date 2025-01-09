import React from 'react';
import Header from './components/Header'
import {AboutMePage} from './components/AboutMe'
import './App.css';
import Projects from './components/Projects';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import { JobExperiencePage } from './components/JobExperienceSection';


function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
      <Route path='/' Component={LandingPage}/>
      <Route path='/aboutme' Component={AboutMePage}/>
      <Route path='/experience' Component={JobExperiencePage}/>
      </Routes>
    </Router>

  );
}

export default App;
