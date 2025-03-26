export interface JobExperience {
    id: string;
    company: string;
    position: string;
    startDate: string;
    endDate: string | 'Present';
    description: string[];
    technologies: string[];
    logo:string;
  }
  
export interface JobData {
    id: string;
    company: string;
    position: string;
    period: string;
    description: string[];
    logo: string;
  }