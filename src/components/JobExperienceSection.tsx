import React from 'react';
import { JobExperience } from '../types/JobExperience';
import { JobEntry } from './JobEntry';
import { TitleText } from '../styles/Text.style';
import { SectionContainer, TitleContainer, ExperienceContainer, PageContainer1 } from '../styles/Container.style';
import { experiences } from '../info/Jobs';


interface JobExperienceSectionProps {
  jobs: JobExperience[];
}

export const JobExperienceSection = () => {
  return (
    <ExperienceContainer>
      <div className="max-w-4xl mx-auto px-4">
        <TitleContainer>
          <TitleText>
            Work Experience.
          </TitleText>
        </TitleContainer>
        <div className="space-y-12">
          {experiences.map((experience) => (
            <JobEntry key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
      </ExperienceContainer>

  );
};

export const JobExperiencePage = () => {
  return(
    <PageContainer1>
      <JobExperienceSection/>
    </PageContainer1>
  );
};

