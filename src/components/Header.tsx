import React from "react";
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';



const mainPage = {
    backgroundImage:'url(https://i.pinimg.com/originals/79/a3/84/79a384c3c449ad01b0e57e790807b2c0.gif)',
    backgroundSize:'50%',
    backgroundRepeat:'no-repeat',
    position:'static',
    width:'100vw',
    height:'90vh',
} as React.CSSProperties;

const name = {
    color: 'white',
    fontFamily:'monospace',
    fontSize: '30px',
    display:  'block', 
    textAlign: 'right',

} as React.CSSProperties;

const ce = {
    color: 'white',
    display:'block', 
    fontFamily:'monospace',
    fontSize: '25px',
    textAlign: 'right',
} as React.CSSProperties;


const icons = {
    color: 'white',
    display: 'inlineBlock',
    textAlign:'right',

} as React.CSSProperties;

const icon = {
    color: 'white',
    size:'s',
} as React.CSSProperties

const headerContainer = {
    position:'relative',
    display:'flex',
    margin:'70px',
    right:'90px',
    top:'60px',
    justifyContent:'right',
    flexDirection:'column',

} as React.CSSProperties




function Header() {
    return (
      <section style = {mainPage}>
        <div style={headerContainer}>
            <div style={name}>
                <h1>
                    Kiyon Farokhi
                </h1>
            </div>
            <div style={ce}>
                <h1>
                    Computer Engineer
                </h1>
            </div>
            <div style ={icons}>

            <IconButton style = {icon} href='https://www.linkedin.com/in/kiyon-farokhi-2268331b6/'>
                
                <LinkedInIcon />
            </IconButton>
            <IconButton style = {icon} href='https://github.com/kiyon21'>
                <GitHubIcon />
            </IconButton>
            <IconButton style = {icon}>
                <EmailIcon />
            </IconButton>
        </div>     
        </div>



            

        </section>
    );
  }
  
  export default Header;