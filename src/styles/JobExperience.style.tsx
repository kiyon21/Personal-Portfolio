import styled from "styled-components";

export const ExperienceContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: Arial, sans-serif;
`

export const ExperienceTitle = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1.5rem;
`

export const JobList = styled.ul`
  list-style-type: none;
  padding: 0;
`

export const JobItem = styled.li`
  margin-bottom: 1rem;
  border: 1px solid #38598b;
  border-radius: 12px;
  overflow: hidden;
`

export const JobHeader = styled.div<{ isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: ${(props) => (props.isOpen ? "#f0f0f0" : "#fff")};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }
`

export const CompanyName = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  color: #333;
`

export const JobPosition = styled.p`
  margin: 0;
  font-size: 1rem;
  color: #666;
`

export const JobPeriod = styled.span`
  font-size: 0.9rem;
  color: #888;
`

export const JobDetails = styled.div<{ isOpen: boolean }>`
  max-height: ${(props) => (props.isOpen ? "500px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease;
`

export const JobDescription = styled.ul`
  margin: 0;
  padding: 2rem;
  background-color: #f9f9f9;
`

export const DescriptionItem = styled.li`
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: #333;
`

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  margin-right: 1rem;
  background-color: white;
  border-radius: 50%;
  overflow: hidden;
`

export const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`