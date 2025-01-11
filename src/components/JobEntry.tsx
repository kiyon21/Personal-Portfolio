import React from 'react';
import { JobExperience } from '../types/JobExperience';
import { SectionContainer, JobEntryContainer } from '../styles/Container.style';
import { JobPosition, TechItem, TechList } from '../styles/Experiences.style';


interface JobEntryProps {
  experience: JobExperience;
}

export const JobEntry: React.FC<JobEntryProps> = ({ experience }) => {
  return (
    <SectionContainer>
      <div className="mr-6 flex-shrink-0">
        <img
          src={experience.logo}
          alt={`${experience.company} logo`}
          height= {150}
          className="object-contain"
        />
      </div>
      <JobEntryContainer>
        <JobPosition>{experience.position}</JobPosition>
        <h2 className="text-xl text-gray-600 mb-1">{experience.company}</h2>
        <p className="text-sm text-gray-500 mb-3">
          {experience.startDate} - {experience.endDate}
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2">
          {experience.description.map((item, index) => (
            <li key={index} className="text-gray-700">{item}</li>
          ))}
        </ul>
        <TechList>
          {experience.technologies.map((tech, index) => (
            <TechItem key={index}>
              {tech}
            </TechItem>
          ))}
        </TechList>
      </JobEntryContainer>
    </SectionContainer>
  );
};

