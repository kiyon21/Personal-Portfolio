import * as React from 'react';
import InfoCard from './InfoCard';
import cppImg from './../img/cpp_logo.png';
import cImg from './../img/C_Logo.png';
import cSImg from './../img/Logo_C_sharp.png';
import pythonImg from './../img/Python-logo-notext.svg.png';
import typeScriptImg from './../img/Typescript_logo_2020.svg.png';
import sqlImg from './../img/Sql_data_base_with_logo.png';
import javaScriptImg from './../img/JavaScript-logo.png';
import me from './../img/me.png'
import { useState } from 'react';
import { color } from '@mui/system';
import { AboutMeContainer, BoxContainer, Headshot, Intro } from '../styles/AboutMe.style';
import { ParagraphText, TitleText } from '../styles/Text.style';





export const AboutMe = () => {

    const [view, setView] = useState(0);
    
    const button = {
        border:'2px solid black',
        margin:'5px',
        height:'30px',
        width:'auto',
        fontWeight:'bold',
        fontFamily:'Gill Sans',
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
        fontFamily:'Gill Sans',
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
            
        <AboutMeContainer>

            <TitleText>About Me.</TitleText>
            <Intro> 
            <Headshot src={me}></Headshot>
            <ParagraphText style = {{width:'50%'}}>I'm studying Computer Engineering at the University of Waterloo, graduating April 2025. I have previous software engineering internships with <b>PinPoint, AudioWorks and MNP.</b> </ParagraphText>
            </Intro>
            <div>
                <button style = {view == 0 ? buttonActive : button} onClick={() => setView(0)}>Languages</button>
                <button style = {view == 1 ? buttonActive : button} onClick={() => setView(1)}>Tools + Tech</button>
                <button style ={view == 2 ? buttonActive : button} onClick={() => setView(2)}>Databases</button>
            </div>
            <BoxContainer>
                {view == 0 && languages.map(language => <div style ={skillCard}>
                    <img style = {skillImg} src={language.imgUrl} alt="My Image"/>
                    <p style={skillText} >{language.title}</p>
                    </div>
                )}
                {view == 1 && tools.map(tools => <div style = {skillCard}>{tools.title}</div>
                )}
                {view == 2 && databases.map(databases => <div style={skillCard}>{databases.title}</div>
                )}
        </BoxContainer>
        </AboutMeContainer>
        
    );
}

export const AboutMePage = () => {
    return (
        <div style={{paddingTop:"10vh",backgroundColor:"black"}}>
            <AboutMe/>
        </div>
    )
}

