import type React from "react"
import { useState } from "react"
import {
    JobItem, 
    JobHeader, 
    CompanyName, 
    JobPosition, 
    JobPeriod, 
    JobDetails,
    JobList,
    JobDescription, 
    DescriptionItem,
    ExperienceContainer,
    ExperienceTitle, 
    Logo,
    LogoContainer
} from "../styles/JobExperience.style"
import { JobData } from "../types/JobExperience"
import { experiences } from "../info/Jobs"
import { PageContainer1, TitleContainer } from "../styles/Container.style"
import { TitleText } from "../styles/Text.style"


const Job: React.FC<{ job: JobData }> = ({ job }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <JobItem>
      <JobHeader isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
      <div style={{ display: "flex", alignItems: "center" }}>
          <LogoContainer>
            <Logo src={job.logo} alt={`${job.company} logo`} />
          </LogoContainer>
          <div>
            <CompanyName>{job.company}</CompanyName>
            <JobPosition>{job.position}</JobPosition>
          </div>
        </div>
        <JobPeriod>{job.period}</JobPeriod>
      </JobHeader>
      <JobDetails isOpen={isOpen}>
        <JobDescription>
          {job.description.map((item, index) => (
            <DescriptionItem key={index}>{item}</DescriptionItem>
          ))}
        </JobDescription>
      </JobDetails>
    </JobItem>
  )
}

const JobExperience: React.FC = () => {
  return (
    <ExperienceContainer>
        <TitleContainer>
            <TitleText>Job Experience.</TitleText>
        </TitleContainer>
        <JobList>
            {experiences.map((job) => (
            <Job key={job.id} job={job} />
            ))}
        </JobList>
    </ExperienceContainer>
  )
}

export const JobExperiencePage = () =>{

    return(
      <PageContainer1>
        <JobExperience/>
      </PageContainer1>  
    );
}

export default JobExperience