
import pinpointlogo from '../img/PINpoint-Logo-JPEG-1.jpg';
import awlogo from '../img/Audioworks.jpeg';
import mnplogo from '../img/MNPlogo.png'
import { JobExperience } from '../types/JobExperience';

export const experiences: JobExperience[] = [
    {
      id: '1',
      company: 'PINpoint Information Systems Inc.',
      position: 'Software Developer',
      startDate: 'Sept 2024',
      endDate: 'Dec 2024',
      description: [
        'Developed a robust factory simulation environment to emulate production workflows and validate system performance, ensuring reliability in released software.',
        'Led the migration and optimization of the existing codebase to the latest .NET framework, enhancing application performance, security, and maintainability in the MES environment.',
        
      ],
      technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
      logo: pinpointlogo,
    },
    {
      id: '2',
      company: 'Audioworks Technologies',
      position: 'Full Stack Software Developer',
      startDate: 'Jan 2024',
      endDate: 'April 2024',
      description: [
        'Developed a secure REST API using Node.js, Express.js, and MongoDB, enabling media integration into social posts while ensuring privacy and data security with strict access controls',
        'Developed notification settings configurations for iOS React Native Social Media App SoundsUnite',
        'Implemented autonomous grading quizzes in React web and iOS React Native apps, boosting course interactivity and user engagement'
      ],
      technologies: ['React', 'Redux', 'JavaScript', 'SASS'],
      logo:awlogo
    },
    {
        id: '3',
        company: 'MNP Digital',
        position: 'Software Developer',
        startDate: 'May 2023',
        endDate: 'Aug 2023',
        description: [
          'Architected and implemented resilient back-end features, incorporating Azure SQL Server for seamless database integration, meticulous data modeling, and the development of RESTful APIs using ASP.NET Web API.'
        ],
        technologies: ['React', 'Redux', 'JavaScript', 'SASS'],
        logo:mnplogo
      },
      {
        id: '3',
        company: 'MNP Digital',
        position: 'Software Developer',
        startDate: 'Sept 2022',
        endDate: 'Dec 2022',
        description: [
          'Orchestrated configurations and customization’s within Microsoft Dynamics 365 for esteemed organizations such as Ontario Lottery Gaming and the Office of the Child and Youth Advocate, tailoring solutions to meet their unique operational requirements.'
        ],
        technologies: ['React', 'Redux', 'JavaScript', 'SASS'],
        logo:mnplogo
      }
  ];