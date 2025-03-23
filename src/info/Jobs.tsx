
import pinpointlogo from '../img/PINpoint-Logo-JPEG-1.jpg';
import awlogo from '../img/Audioworks.jpeg';
import mnplogo from '../img/MNPlogo.png'
import { JobData } from '../types/JobExperience';
import yzslogo from '../img/yzs.png';

export const experiences: JobData[] = [
    {
      id: 1,
      company: 'PINpoint Information Systems',
      position: 'Software Developer',
      period: 'Sept 2024 - Dec 2024',
      description: [
        'Developed a robust factory simulation environment to emulate production workflows and validate system performance, ensuring reliability in released software.',
        'Led the migration and optimization of the existing codebase to the latest .NET framework, enhancing application performance, security, and maintainability in the MES environment.',
        'Resolved urgent bugs promptly to ensure swift issue resolution and maintain client satisfaction.',
        'Created a CLI tool to simulate logins and task completion at 32 stations, streamlining testing.'
        
      ],
      logo: pinpointlogo,
    },
    {
      id: 2,
      company: 'Audioworks Technologies',
      position: 'Full Stack Software Developer',
      period: 'Jan 2024 - April 2024',
      description: [
        'Developed a secure REST API using Node.js, Express.js, and MongoDB, enabling media integration into social posts while ensuring privacy and data security with strict access controls',
        'Developed notification settings configurations for iOS React Native Social Media App SoundsUnite',
        'Implemented autonomous grading quizzes in React web and iOS React Native apps, boosting course interactivity and user engagement'
      ],
      logo:awlogo
    },
    {
        id: 3,
        company: 'MNP Digital',
        position: 'Software Developer',
        period: 'May 2023 - Aug 2023',
        description: [
          'Developed an ASP.NET WebForm for OICO, integrating with Azure SQL for lobbyist form data management.',
          'Integrated Azure SQL Server with ASP.NET Web API to ensure robust data handling.',
          'Built and deployed scalable RESTful APIs using ASP.NET Web API to enhance application functionality.'
        ],
        logo:mnplogo
      },
      {
        id: 3,
        company: 'MNP Digital',
        position: 'Software Developer',
        period: 'Sept 2022 - Dec 2022',
        description: [
          'Architected and implemented resilient back-end features with Azure SQL Server for seamless database integration.',
          'Fixed client-reported bugs and added new pages to ASP.NET websites, improving functionality.',
          'Worked with Microsoft Stack (ASP.NET, EF Core, C#) from the SQL DB to the UI end.'
        ],
        logo:mnplogo
      },
      {
        id: 4,
        company: 'Year Zero Studios',
        position: 'Software Developer',
        period: 'Sept 2021 - Dec 2021',
        description: [
          'Developed scalable and reusable React components from architectural and Figma UI/UX designs.',
          'Built full-stack features with TypeScript, React, and Firebase REST API, handling authentication and data persistence.',
          'Implemented responsive UI elements with Material-UI to ensure a consistent and accessible user experience across devices.'
        ],
        logo:yzslogo
      }
  ];