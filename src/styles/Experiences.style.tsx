import styled from "styled-components"

export const ExperiencesContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;
    border: 1px solid var(--color-border-strong);
    border-radius: 8px;
`
export const LeftPane = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`

export const RightPane = styled.div`
    margin-left: 20px;
`

export const JobImage = styled.image`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 10px;
`

export const JobTitle = styled.h2`
    font-size: 18px;
    font-weight: bold;
`

export const DescriptionList = styled.ul`
    padding-left: 20px;
`

export const DescriptionItem = styled.li`
    margin-bottom: 8px;
`

export const JobPosition = styled.h1`
    color: var(--color-text);
    font-weight: bold;
`

export const TechList = styled.div`
    display: flex;
    flex-direction: row;
    margin: 5px;
`
export const TechItem = styled.span`
    display: inline-block; 
    font-size: small;
    color: var(--color-secondary);
    padding: 5px 5px; 
    margin-right: 5px;
    border: 2px solid var(--color-secondary); 
    border-radius: 5px; 
    font-family: Arial, sans-serif;
`