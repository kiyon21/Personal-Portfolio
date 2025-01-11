
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
        'Resolved urgent bugs promptly to ensure swift issue resolution and maintain client satisfaction.',
        'Created a CLI tool to simulate logins and task completion at 32 stations, streamlining testing.'
        
      ],
      technologies: ['C#', '.NET', 'SQL', 'Angular'],
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
      technologies: ['Typescript', 'React', 'Node.js', 'React Native', 'MongoDB'],
      logo:awlogo
    },
    {
        id: '3',
        company: 'MNP Digital',
        position: 'Software Developer',
        startDate: 'May 2023',
        endDate: 'Aug 2023',
        description: [
          'Developed an ASP.NET WebForm for OICO, integrating with Azure SQL for lobbyist form data management.',
          'Integrated Azure SQL Server with ASP.NET Web API to ensure robust data handling.',
          'Built and deployed scalable RESTful APIs using ASP.NET Web API to enhance application functionality.'
        ],
        technologies: ['C#', 'ASP.NET', 'Azure SQL'],
        logo:mnplogo
      },
      {
        id: '3',
        company: 'MNP Digital',
        position: 'Software Developer',
        startDate: 'Sept 2022',
        endDate: 'Dec 2022',
        description: [
          'Architected and implemented resilient back-end features with Azure SQL Server for seamless database integration.',
          'Fixed client-reported bugs and added new pages to ASP.NET websites, improving functionality.',
          'Worked with Microsoft Stack (ASP.NET, EF Core, C#) from the SQL DB to the UI end.'
        ],
        technologies: ['C#', 'ASP.NET', 'Azure SQL'],
        logo:mnplogo
      }
  ];