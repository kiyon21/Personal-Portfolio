import React from "react";
import { SectionContainer, Title, ProjectGrid, ProjectBox, ProjectButton, ProjectContent, ProjectImage, ProjectDescription, ProjectTitle } from "../styles/Projects.style";
import { TitleText, TitleText2 } from "../styles/Text.style";
import { PageContainer1, TitleContainer } from "../styles/Container.style";
import {projects} from '../info/ProjectsData'

interface ProjectSectionProps {
    projects: Project[];
  }

interface Project {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    link: string;
  }


export const Projects = () => {

    return(
        <SectionContainer>
            <TitleContainer>
                <TitleText2>My Projects.</TitleText2>

            </TitleContainer>
        <ProjectGrid>
          {projects.map((project:Project) => (
            <ProjectBox key={project.id}>
              <ProjectImage src={project.imageUrl} alt={project.title} />
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectButton href={project.link} target="_blank" rel="noopener noreferrer">
                  View Project
                </ProjectButton>
              </ProjectContent>
            </ProjectBox>
          ))}
        </ProjectGrid>
      </SectionContainer>
    );
};

export const ProjectsPage = () =>{

    return(
      <PageContainer1>
        <Projects/>
      </PageContainer1>  
    );
}