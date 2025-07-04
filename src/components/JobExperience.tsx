import type React from "react"
import { useState, useEffect } from "react"
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
import { PageContainer1, TitleContainer } from "../styles/Container.style"
import { ParagraphText, TitleText } from "../styles/Text.style"
import { firebaseService } from '../services/firebase.service'

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
  const [jobs, setJobs] = useState<JobData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const jobsData = await firebaseService.getJobExperiences();
        setJobs(jobsData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching jobs:', error);
        setError('Failed to load job experiences');
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <ExperienceContainer>
        <TitleContainer>
            <TitleText>Job Experience.</TitleText>
            <ParagraphText>Click on them to learn more!</ParagraphText>
        </TitleContainer>
        <JobList>
            {loading ? (
              <div>Loading...</div>
            ) : (
              jobs.map((job) => (
                <Job key={job.id} job={job} />
              ))
            )}
        </JobList>
    </ExperienceContainer>
  )
}

export const JobExperiencePage = () => {
    return(
      <PageContainer1>
        <JobExperience/>
      </PageContainer1>  
    );
}

export default JobExperience