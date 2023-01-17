import * as React from 'react';
import InfoCard from './InfoCard';
import './aboutme.css';
import self from './../img/vancouverself.png';



const aboutMeCards = {
    textAlign: 'center',
    display: 'flex',
    width: '100%',
    position:'relative',
    left:'100px',

} as React.CSSProperties;

const header = {
    color: 'black',
    position: 'relative',
    display:'block',
    top:'850px',
    width: '100%',
    backgroundColor:'white',
} as React.CSSProperties;


function AboutMe() {


    return (
            
        <div style={header}>
            <div className ='aboutme'>
            <h1 className='hello'>
                Hello! I'm Kiyon!
            </h1>
            <p className='paragraph'>Welcome to my website! I am currently a 3A Computer Engineering Student at the Universtiy of Waterloo. I have a strong passion for software development and have recently grown an interest in firmware and hardware development. </p>
            <br></br>
            <p className='paragraph'>I have recently wrapped up an internship with MNP Digital Inc. where I was a Digital Solutions Intern. Prior, I interned at Year Zero Studios as a Software Developer where I learned TypeScript React (which is what I have used for this website)! </p>
            <br></br>
            <p className='paragraph'>These days outside of school and working on projects, my time is spent at the gym, listening to music, playing soccer, hanging out with friends and playing video games. I also love travellimg and visiting new places, with my favourite places so far being Vancouver, Netherlands, France and Mexico. </p>
            </div>
            <img className = 'img' src = {self}/>
            <div style={aboutMeCards}>
            
                <InfoCard title = 'Languages' content = 'C++, TypeScript, C, HTML/CSS, JavaScript, VHDL, Verilog, RISC-V, Java.' src = {1} />
                <InfoCard title = 'Hobbies' content = 'I have played competitive soccer my whole life, stopping when I began University, and now dedicate that time to working out. I spend my freetime playing video games and hanging out with friends.' src = {2}/>
                <InfoCard title = 'Studies' content = 'I am studying Honours Computer Engineering with Co-op at the University of Waterloo, Class of 2025. Previous Term GPA : 78.46' src = {3} />
            </div>
        </div>
        
    );
}

export default AboutMe;
