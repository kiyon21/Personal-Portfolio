import styled from "styled-components";



export const HeaderImage = styled.img`
    object-fit: cover;
    height: 50vh;
    margin-left: 10px;
    @media (max-width: 700px){
    display: none;
    }

`


export const ContentWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: var(--color-bg);
`

export const IntroContainer = styled.div`
    margin: 30px;
    width: 50vw;
    @media (max-width: 700px){
    width: 80vw;
    }

`

export const NameContainer = styled.h1`
    white-space: nowrap;
    font-family: 'Gill Sans';
    font-size: 40px;
`

export const IntroText = styled.h3`
    white-space: nowrap;
    font-family: 'Gill Sans';
    color: var(--color-text);
    font-size: 25px;
    display: flex;
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
    border-color: var(--color-secondary);
    color: white;
    background: linear-gradient(135deg, var(--color-secondary) 0%, var(--color-secondary-dark) 100%);
    font-size: large;
    font-weight: bold;
    font-family: 'Gill Sans';

    &:hover {
        background: var(--color-main-light);
        color: var(--color-text);
        border-color: var(--color-secondary);
    }
`