import styled from "styled-components"

export const ExperiencesContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;
    border: 1px solid #ccc;
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