import React from 'react';
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import './App.css';
import JobExperience from './components/JobExperience';
import Projects from './components/Projects';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const app = {
    backgroundColor:"black",
    width: '100%',
    height: '100%',
    margin: '0px',
    padding: '0px',
    display:'block',
    overflowX: 'hidden'
}as React.CSSProperties;


function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
      <Route path='/' Component={Header}/>
      <Route path='/aboutme' Component={AboutMe}/>
      <Route path='/experience' />
      </Routes>
    </Router>

  );
}

export default App;
