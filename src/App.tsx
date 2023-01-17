import React from 'react';
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import './App.css';
import JobExperience from './components/JobExperience';
import Projects from './components/Projects';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const app = {
backgroundColor:"#white",
width: '100%',
    height: '100%',
    margin: '0px',
    padding: '0px',
    overflowX: 'hidden'
}as React.CSSProperties;


function App() {
  return (
    <div style = {app}>
      
      <NavBar />

      <Header />

      <AboutMe />

      <JobExperience />

      <Projects />



    </div>

  );
}

export default App;
