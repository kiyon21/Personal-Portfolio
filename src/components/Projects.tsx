import React, { useState, useEffect } from "react";
import { SectionContainer, MarqueeWrapper, MarqueeTrack, ProjectBox, ProjectButton, ProjectContent, ProjectImage, ProjectDescription, ProjectTitle } from "../styles/Projects.style";
import { TitleText2 } from "../styles/Text.style";
import { PageContainer1, TitleContainer } from "../styles/Container.style";
import { firebaseService } from '../services/firebase.service';
import { getProjectImageUrl } from '../utils/projectImageMapping';

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  link?: string;
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <ProjectBox>
      <ProjectImage src={getProjectImageUrl(project.title, project.imageUrl)} alt={project.title} />
      <ProjectContent>
        <ProjectTitle>{project.title}</ProjectTitle>
        <ProjectDescription>{project.description}</ProjectDescription>
        <ProjectButton href={project.link || '#'} target="_blank" rel="noopener noreferrer">
          View Project
        </ProjectButton>
      </ProjectContent>
    </ProjectBox>
  );
}

export const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await firebaseService.getProjects();
        setProjects(data);
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError('Failed to load projects');
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <SectionContainer>
      <TitleContainer>
        <TitleText2>My Projects.</TitleText2>
      </TitleContainer>
      {loading ? (
        <div style={{ textAlign: 'center', color: 'var(--color-text-muted)' }}>Loading...</div>
      ) : (
        <MarqueeWrapper>
          <MarqueeTrack>
            {[...projects, ...projects].map((project, index) => (
              <ProjectCard key={`${project.id}-${index}`} project={project} />
            ))}
          </MarqueeTrack>
        </MarqueeWrapper>
      )}
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