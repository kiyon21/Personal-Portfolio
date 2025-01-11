import React from "react";
import resume from "../img/ResumePhoto.png"
import { PageContainer1, SectionContainer } from "../styles/Container.style";

export const Resume = () =>{

    return (
        <PageContainer1>
            <SectionContainer>
                <img src={resume}/>
            </SectionContainer>
            
        </PageContainer1>
        
    )
}