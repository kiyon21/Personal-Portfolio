import {forwardRef} from 'react';
import cppImg from './../img/cpp_logo.png';
import cImg from './../img/C_Logo.png';
import cSImg from './../img/Logo_C_sharp.png';
import pythonImg from './../img/Python-logo-notext.svg.png';
import typeScriptImg from './../img/Typescript_logo_2020.svg.png';
import sqlImg from './../img/Sql_data_base_with_logo.png';
import javaScriptImg from './../img/JavaScript-logo.png';
import reactlogo from '../img/React.jpg'
import nodelogo from '../img/Nodejs.png'
import expresslogo from '../img/expressjs.jpg'
import dotnetlogo from '../img/Netlogo.png'
import me from './../img/me.png'
import headshot from '../img/headshot.jpg'
import azurelogo from '../img/azureLogo.png'
import mongologo from '../img/MongoDBLogo.png'
import firebaseLogo from '../img/firebaseLogo.png'
import postgreLogo from '../img/postgreLogo.png'
import { useState } from 'react';

import { BoxContainer, Headshot, Intro } from '../styles/AboutMe.style';
import { PageContainer1, SectionContainer, SectionContainer2, TitleContainer } from '../styles/Container.style';
import { ParagraphText2, TitleText, TitleText2 } from '../styles/Text.style';

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Button from "@mui/material/Button";
import { TechList } from '../styles/Experiences.style';



export const AboutMe = forwardRef<HTMLDivElement>((_, targetRef) => {

    const [view, setView] = useState(0);
    
    const button = {
        border:'2px solid #38598b',
        backgroundColor:'white',
        color:'#38598b',
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
        backgroundColor:'#38598b', 
        color: 'white'
    }
    
    const skillCard = {
    
        borderRadius:'12px',
        fontFamily:'Gill Sans',
        border: '1px solid #38598b',
        backgroundColor:'white',
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
            imgUrl: reactlogo
        },
        {
            title: 'React Native',
            imgUrl: reactlogo
        },
        {
            title: 'Node.js',
            imgUrl: nodelogo
        },
        {
            title: 'Express.js',
            imgUrl: expresslogo
        },
        {
            title: '.NET',
            imgUrl: dotnetlogo
        },
    ];
    const databases = [
        {
            title: 'Azure',
            imgUrl: azurelogo
        },
        {
            title: 'MongoDB',
            imgUrl: mongologo
        },
        {
            title: 'FireBase',
            imgUrl: firebaseLogo
        },
        {
            title: 'PostgreSQL',
            imgUrl: postgreLogo
        },
    ];


    return (
        <div ref={targetRef}>
            
        <SectionContainer2> 
            <TitleContainer>
                <TitleText2>About Me.</TitleText2>
            </TitleContainer>
            <Intro> 
            <Headshot src={headshot}></Headshot>
            <TechList>
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<LinkedInIcon />}
                    href="https://www.linkedin.com/in/kiyonfarokhi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ backgroundColor: "white", color:'#38598b', marginRight:'5%' }}>Linkedin</Button>
                    <Button
                    variant="contained"
                    color="primary"
                    startIcon={<GitHubIcon />}
                    href="https://www.linkedin.com/in/kiyonfarokhi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ backgroundColor: "white", color:'#38598b' }}>
                        Github
                    </Button>
            </TechList>
            <ParagraphText2 style = {{width:'50%'}}>I'm studying Computer Engineering at the University of Waterloo, graduating April 2025. I have previous software engineering internships with <b>PinPoint, AudioWorks and MNP.</b> </ParagraphText2>
            <ParagraphText2 style = {{width:'50%'}}>
            I'm a Software Developer, specializing in C#, .NET, TypeScript, and React. I enjoy building scalable, user-friendly applications and tackling challenges across the development stack.
            </ParagraphText2>
            </Intro>
            </SectionContainer2>
            <SectionContainer>
            <TitleText>
                My Skills.
            </TitleText>
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
                {view == 1 && tools.map(tools => <div style ={skillCard}>
                    <img style = {skillImg} src={tools.imgUrl} alt="My Image"/>
                    <p style={skillText} >{tools.title}</p>
                    </div>
                )}
                {view == 2 && databases.map(databases => <div style ={skillCard}>
                    <img style = {skillImg} src={databases.imgUrl} alt="My Image"/>
                    <p style={skillText} >{databases.title}</p>
                    </div>
                )}
        </BoxContainer>
            </SectionContainer>
            </div>
        
        
    );
}
)
export const AboutMePage = () => {
    return (
        <PageContainer1>
            <AboutMe/>
        </PageContainer1>
    )
}

