import React from "react";
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';



const mainPage = {
    backgroundImage:'url(https://i.pinimg.com/originals/79/a3/84/79a384c3c449ad01b0e57e790807b2c0.gif)',
    backgroundColor:'#000',
    backgroundPosition:'left',
    backgroundSize:'70%',
    backgroundRepeat:'no-repeat',
    position:'absolute',
    width:'100%',
    height:'840px',
} as React.CSSProperties;

const name = {
    color: 'white',
    fontFamily:'monospace',
    fontSize: '2.7vw',
    marginRight:'40px',
    display:  'block', 
    position: 'relative',
    textAlign: 'right',
    top:'20%'

} as React.CSSProperties;

const ce = {
    color: 'white',
    display:'block', 
    fontFamily:'monospace',
    fontSize: '1.5vw',
    position:'relative',
    textAlign: 'right',
    marginRight:'40px',
    top:'20%'


} as React.CSSProperties;


const icons = {
    color: 'white',
    display: 'inlineBlock',
    size: 'medium',
    position:'relative',
    top:'20%',
    right:'40px',
    width:'100%',
    textAlign:'right',

} as React.CSSProperties;

const icon = {
    color: 'white',
    size:'medium',
} as React.CSSProperties




function Header() {
    return (
      <div style = {mainPage}>

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
    );
  }
  
  export default Header;