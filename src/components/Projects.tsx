import * as React from 'react';
import './project.css';
import personalwebsite from './../img/personalwebsite.png';
import fpga from './../img/fpga.png';
import minesweeper from './../img/minesweeper.png';
import snakegame from './../img/snakegame.jpeg';

function Projects() {


    return (
        <div className='container1'>
            <div className='title1'>
                <h2>Projects</h2>
            </div>
            <div className='projects'>
            <div className='website'>
                <div className='right'>
                    <h3 className = 'title2'>Personal Website</h3>
                    <p className = 'paragraph2'>-A completely professional personal website developed using TypeScript React, CSS, and Material UI. <br></br>
-Designed a simplistic front-end to create a dynamic UI/UX with Flexbox. 
</p>

                </div>

                <img className = 'imgL' src = {personalwebsite}/>

                </div>
                <div className = 'left'>
                    <h3 className = 'title2'>Music Player</h3>
                    <p className = 'paragraph2'>-Configured Nios II processor on Altera Max 10 FPGA using C firmware that utilizes, push buttons, FatFS, Altera Audio Core and LCD display. <br></br>
-Implemented an Interrupt Service Routine that handles the falling edge of the clock to eliminate duplicate requests. <br></br>
-Conducted signal analysis efficiency comparisons between tight polling, and interrupts with custom IP cores and Signal Tap.
</p>
                </div>
                <img className = 'imgR' src = {fpga}/>
                <div className= 'right'>
                    <h3 className = 'title2'>Minesweeper</h3>
                    <p className = 'paragraph2'>-Used C++ to develop a user interactive terminal game with dynamic difficulties that can be set at runtime. <br></br>
-Utilized data structures and dynamic memory allocation to optimize spatial locality and time complexity. 
				
</p>
                </div>
                <img className = 'imgL' src = {minesweeper}/>
            </div>


        </div>
    );
};
export default Projects;