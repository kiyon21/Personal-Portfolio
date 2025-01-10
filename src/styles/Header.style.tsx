import styled from "styled-components";



export const HeaderImage = styled.img`
    object-fit: cover;
    height: 50vh;
    margin-left: 10px;

`


export const ContentWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;

`

export const IntroContainer = styled.div`
    margin: 30px;
    max-width: 50vw;

`

export const NameContainer = styled.h1`
    white-space: nowrap;
    font-family: 'Gill Sans';
    font-size: 40px;
`

export const IntroText = styled.h3`
    white-space: nowrap;
    font-family: 'Gill Sans';
    color: #38598b;
    font-size: 25px;
    display: flex ;
    flex-direction: column;
`

export const LearnMore = styled.button`
    width: max-content;
    cursor: pointer;
    border-radius: 1rem;
    border-width: 2px;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    border-color: #38598b;
    color: white;
    background-color: #38598b;
    font-size: large;
    font-weight: bold;
    font-family: 'Gill Sans';

&:hover {
    background-color: white;
    color: #38598b;
}
`