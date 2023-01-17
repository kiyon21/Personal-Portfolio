import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import EngineeringIcon from '@mui/icons-material/Engineering';
import Typography from '@mui/material/Typography';

import Container from '@mui/material/Container';

import Button from '@mui/material/Button';


const pages = ['About Me', 'Experience', 'Projects', 'Resume'];



// function scrollFunction() {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     document.getElementsByClassName("navbar").style.fontSize = "30px";
//   } else {
//     document.getElementsByClassName("navbar").style.fontSize = "90px";
//   }
// }

const ResponsiveAppBar = () => {

  // window.onscroll = function() {scrollFunction()};


 
  

  return (
    <AppBar position="fixed" style={{backgroundColor:'black'}}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters>

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            Kiyon Farokhi
          </Typography>


          <Typography
            variant="h6"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              textAlign:'left',
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Kiyon Farokhi
          </Typography>
          <Box sx={{ flexGrow: 1,  display: 'flex' }}>

              <Button
                key='Resume'
                sx={{ my: 2,  color: 'white', display: 'block' }}
              >
                Resume
              </Button>

              <Button
                key='Resume'
                href='https://youtu.be/uAZFBqJY6FA'
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Soccer Highlights
              </Button>

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;