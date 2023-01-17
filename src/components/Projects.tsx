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

                <div className='right'>
                    <h3 className = 'title2'>Personal Website</h3>
                    <p className = 'paragraph2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aliquid consequuntur, nulla doloribus praesentium architecto illum sed repellat nesciunt earum ab eveniet sapiente alias ea quos, hic perspiciatis voluptatem accusamus.</p>

                <img className = 'imgL' src = {personalwebsite}/>
                </div>
                <div className = 'left'>
                    <h3 className = 'title2'>Music Player</h3>
                    <p className = 'paragraph2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aliquid consequuntur, nulla doloribus praesentium architecto illum sed repellat nesciunt earum ab eveniet sapiente alias ea quos, hic perspiciatis voluptatem accusamus.</p>
                </div>
                <img className = 'imgR' src = {fpga}/>
                <div className= 'right'>
                    <h3 className = 'title2'>Minesweeper</h3>
                    <p className = 'paragraph2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aliquid consequuntur, nulla doloribus praesentium architecto illum sed repellat nesciunt earum ab eveniet sapiente alias ea quos, hic perspiciatis voluptatem accusamus.</p>
                </div>
                <img className = 'imgL' src = {minesweeper}/>
                <div className = 'left'>
                    <h3 className = 'title2'>Snake Game</h3>
                    <p className = 'paragraph2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur aliquid consequuntur, nulla doloribus praesentium architecto illum sed repellat nesciunt earum ab eveniet sapiente alias ea quos, hic perspiciatis voluptatem accusamus.</p>
                </div>
                <img className = 'imgR' src = {snakegame}/>
            </div>


        </div>
    );
};
export default Projects;