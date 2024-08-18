import * as React from 'react';
import InfoCard from './InfoCard';
import '../styles/aboutme.css';
import cppImg from './../img/cpp_logo.png';
import cImg from './../img/C_Logo.png';
import cSImg from './../img/Logo_C_sharp.png';
import pythonImg from './../img/Python-logo-notext.svg.png';
import typeScriptImg from './../img/Typescript_logo_2020.svg.png';
import sqlImg from './../img/Sql_data_base_with_logo.png';
import javaScriptImg from './../img/JavaScript-logo.png';
import { useState } from 'react';
import { color } from '@mui/system';





const AboutMe = () => {

    const [view, setView] = useState(0);

    const header = {
        backgroundColor:'white',
        paddingTop:'5vh',
        alignItems:'center',
        display:'flex',
        flexDirection:'column',
    
    } as React.CSSProperties;
    
    const button = {
        border:'2px solid black',
        margin:'5px',
        height:'30px',
        width:'auto',
        fontWeight:'bold',
        fontSize:'15px',
        borderRadius:'10px',
    } as React.CSSProperties;

    const buttonActive = {
        ...button,
        backgroundColor:'black', 
        color: 'white'
    }
    
    const skillCard = {
    
        borderRadius:'12px',
        border: '1px solid #000',
        display: 'flex',
        flexDirection:'column',
        alignItems: 'center',
        justifyContent:'center',
        padding: '30px 20px',
        fontSize:'20px',
        margin: '10px',
        width: '90px',
        height: '120px',
    
    } as React.CSSProperties;
    
    const skillText = {
        alignItems:'center',
    } as React.CSSProperties;
    
    const skillImg = {
        height:'50px',
        maxWidth:'70px'
    
    } as React.CSSProperties;
    
    const boxContainer = {
    
        width: '50%',
        height:'400px',
        display:'flex',
        padding:'10px',
        flexFlow:'wrap',
        justifyContent:'center',
        flexDirection:'row',
        borderRadius: '12px',
        alignItems:'center',
        marginBottom: '60px'
    
    
    } as React.CSSProperties;

    const languages = [
        {
            title: 'C++',
            imgUrl: cppImg
        },
        {
            title: 'C',
            imgUrl: cImg
        },
        {
            title: 'C#',
            imgUrl: cSImg
        },
        {
            title: 'TypeScript',
            imgUrl: typeScriptImg
        },
        {
            title: 'JavaScript',
            imgUrl: javaScriptImg
        },
        {
            title: 'Python',
            imgUrl: pythonImg
        },
        {
            title: 'SQL',
            imgUrl: sqlImg
        },
    ];
    const tools = [
        {
            title: 'React.js',
            imgUrl: 'test'
        },
        {
            title: 'React Native',
            imgUrl: 'test'
        },
        {
            title: 'Node.js',
            imgUrl: 'test'
        },
        {
            title: 'Express.js',
            imgUrl: 'test'
        },
        {
            title: 'ASP.NET',
            imgUrl: 'test'
        },
    ];
    const databases = [
        {
            title: 'Azure',
            imgUrl: 'test'
        },
        {
            title: 'MongoDB',
            imgUrl: 'test'
        },
        {
            title: 'FireBase',
            imgUrl: 'test'
        },
        {
            title: 'PostgreSQL',
            imgUrl: 'test'
        },
    ];


    return (
            
        <section style={header}>
            <h1>Hi! I'm Kiyon Farokhi!</h1>
            <p>I'm a 4A a student at the University of Waterloo, pursuing my Bacholer's in Applied Sciences, Computer Engineering</p>
            <div>
                <button style = {view == 0 ? buttonActive : button} onClick={() => setView(0)}>Languages</button>
                <button style = {view == 1 ? buttonActive : button} onClick={() => setView(1)}>Tools + Tech</button>
                <button style ={view == 2 ? buttonActive : button} onClick={() => setView(2)}>Databases</button>
            </div>
            <div style={boxContainer}>
                {view == 0 && languages.map(language => <div style ={skillCard}>
                    <img style = {skillImg} src={language.imgUrl} alt="My Image"/>
                    <p style={skillText} >{language.title}</p>
                    </div>
                )}
                {view == 1 && tools.map(tools => <div style = {skillCard}>{tools.title}</div>
                )}
                {view == 2 && databases.map(databases => <div style={skillCard}>{databases.title}</div>
                )}
            </div>
        </section>
        
    );
}

export default AboutMe;
