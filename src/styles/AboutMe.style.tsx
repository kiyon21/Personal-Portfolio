import styled from "styled-components";
import { Link } from "react-router-dom";

export const AboutMeContainer = styled.div `
        background-color:white;
        align-items:center;
        display:flex;
        flex-direction:column;
`

export const Intro = styled.div`
        text-align:center;
        display:flex;
        flex-direction: row;
        align-items: center;
`

export const BoxContainer = styled.div `
        width: 50%;
        height:400px;
        display:flex;
        padding:10px;
        flex-flow:wrap;
        justify-content:center;
        flex-direction:row;
        border-radius: 12px;
        align-items:center;
        margin-bottom: 60px;
`

export const Headshot = styled.img`
    object-fit: cover;
    border-radius: 50%;
    margin: 5vw;
    height: 300px;
    width: 300px;
`