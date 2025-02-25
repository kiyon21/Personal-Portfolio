import styled from "styled-components";
import { Link } from "react-router-dom";

// export const AboutMeContainer = styled.div `
//         background-color:white;
//         align-items:center;
//         display:flex;
//         flex-direction:column;
//         margin-top: 5;
// `

export const Intro = styled.div`
        text-align:center;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 5%;
        
        @media (max-width:700){
                flex-direction: column;
        }
`




export const BoxContainer = styled.div `
        max-width: 50vw;
        height:auto;
        display:flex;
        padding:10px;
        flex-flow:wrap;
        justify-content:center;
        flex-direction:row;
        align-items:center;
        @media (max-width:700px){
                max-width: fit-content;
        }

`

export const Headshot = styled.img`
    object-fit: cover;
    border-radius: 50%;
    margin: 5vw;
    height: 300px;
    width: 300px;
`

export const SkillCard = styled.div`
        border-radius: 12px;
        font-family: 'Gill Sans';
        border: 1px solid #38598b;
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding:30px 20px;
        margin:10px;
        width:85px;
        height:95px;

        @media (max-width:700px){
                margin:5px;
                padding: 25px 15px;
                width: 70px;
                height:70px;
        }
`
    
    export const SkillText = styled.p`
        align-items:center;
        white-space: nowrap;
    `
    export const SkillImg = styled.img`
        height:50px;
        max-width: 70px;
    `