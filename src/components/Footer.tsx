import React from 'react';
import { SectionContainer } from '../styles/Container.style';

const foot ={
    backgroundColor:'black',
    width:'100%',
    height:'500px',
    color:'white',
    textAlign:'center',
    position:'relative',
    marginTop:'10px',
    top:'100%',
} as React.CSSProperties;

function Footer (){

    return (
        <SectionContainer>
            <h3>Kiyon Farokhi Copyright 2023</h3>
        </SectionContainer>
    );
}
export default Footer;