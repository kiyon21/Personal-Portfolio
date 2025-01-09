import React from 'react';
import { JobExperience } from '../types/JobExperience';
import { SectionContainer, JobEntryContainer } from '../styles/Container.style';


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
        <h1 className="text-2xl font-bold">{experience.position}</h1>
        <h2 className="text-xl text-gray-600 mb-1">{experience.company}</h2>
        <p className="text-sm text-gray-500 mb-3">
          {experience.startDate} - {experience.endDate}
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2">
          {experience.description.map((item, index) => (
            <li key={index} className="text-gray-700">{item}</li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech, index) => (
            <span key={index} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md text-sm">
              {tech}
            </span>
          ))}
        </div>
      </JobEntryContainer>
    </SectionContainer>
  );
};

