import * as React from 'react';
import coding from './../img/coding.png';
import soccerball from './../img/soccerball.png';
import studies from './../img/studies.png';
import './infocard.css';


type InfoCardProps = {
  title:string;
  content:string;
  src: number;
}



function InfoCard (props: InfoCardProps){
  let src = props.src;

    return (

<div className = 'container'>
          <div className = 'card'>

            <h3 className = 'title' >{props.title}</h3>

            <div className='image'>
            {(src === 1)&&(<img src = {coding} alt = ''/>)}
            {(src === 2)&&(<img src = {soccerball} alt = ''/>)}
            {(src === 3)&&(<img src = {studies} alt= '' />)}
            </div>
            
            <div className='content'>
              
              <p>{props.content}</p>
            </div>
          </div>    
        </div>

        

    );
  };
  export default InfoCard;