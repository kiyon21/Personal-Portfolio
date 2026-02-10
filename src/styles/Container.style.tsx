import styled from "styled-components";

export const SectionContainer = styled.div`
        background-color: var(--color-main-light);
        align-items: center;
        display: flex;
        flex-direction: column;
        margin-top: 5;
`

export const SectionContainer2 = styled(SectionContainer)`
    background-color: var(--color-bg-section);
`

export const TitleContainer = styled.div`
        text-align:center;
        display: fixed;
        align-items: center;

`

export const ExperienceContainer = styled.div`
    align-items: center;
    padding-bottom: 5%;
`
export const JobEntryContainer = styled.div`
    align-items: center;
    padding-right: 20%;
    padding-left:20%;
`

export const PageContainer1 = styled.div`
    padding-top: 6vh;
    background-color: var(--color-bg);
    min-height: 100vh;
`