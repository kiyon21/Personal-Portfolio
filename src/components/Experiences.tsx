import React from "react";
import { SectionContainer, TitleContainer } from "../styles/Container.style";
import { TitleText } from "../styles/Text.style";
import { DescriptionItem, DescriptionList, ExperiencesContainer, JobImage, JobTitle, LeftPane, RightPane } from "../styles/Experiences.style";

interface JobInfoProps {
    jobTitle:string;
    imageUrl:string;
    jobDescriptionList: string[];
}

export const Experience = () => {
    
return(
    <SectionContainer>
        <TitleContainer>
            <TitleText>Experience.</TitleText>
        </TitleContainer>
        <ExperiencesContainer>
            <LeftPane>
                <JobImage/>
                <JobTitle>
                    Heres the job title
                </JobTitle>
            </LeftPane>
            <RightPane>
                <DescriptionList>
                    <DescriptionItem>
                        testing
                    </DescriptionItem>
                    <DescriptionItem>
                        Babab
                    </DescriptionItem>
                </DescriptionList>
            </RightPane>
        </ExperiencesContainer>
    </SectionContainer>
)
}

export const ExperiencePage = () => {
    return (
        <div style={{paddingTop:"10vh",backgroundColor:"black"}}>
            <Experience/>
        </div>
    )
}
