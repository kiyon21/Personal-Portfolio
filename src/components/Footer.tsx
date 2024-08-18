import React from 'react';

const foot ={
    backgroundColor:'black',
    width:'100%',
    color:'white',
    textAlign:'center',
    position:'relative',
    marginTop:'10px',
    top:'100%',
} as React.CSSProperties;

function Footer (){

    return (
        <div style = {foot}>
            <h3>Kiyon Farokhi Copyright 2023</h3>
        </div>
    );
}
export default Footer;