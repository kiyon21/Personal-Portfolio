import admin from "firebase-admin";
import { readFileSync } from "fs";
// import pinpointlogo from '../img/PINpoint-Logo-JPEG-1.jpg';
// import awlogo from '../img/Audioworks.jpeg';
// import mnplogo from '../img/MNPlogo.png'

const serviceAccount = JSON.parse(readFileSync("../../firebase-adminsdk.json", "utf8"));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// Initialize Firebase Admin SDK
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.applicationDefault(),
  });
}

const db = admin.firestore();

// Job experience data
const jobExperiences = [
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
    // logo: pinpointlogo,
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
    // logo:awlogo
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
      // logo:mnplogo
    },
    {
      id: 4, 
      company: 'MNP Digital',
      position: 'Software Developer',
      period: 'Sept 2022 - Dec 2022',
      description: [
        'Architected and implemented resilient back-end features with Azure SQL Server for seamless database integration.',
        'Fixed client-reported bugs and added new pages to ASP.NET websites, improving functionality.',
        'Worked with Microsoft Stack (ASP.NET, EF Core, C#) from the SQL DB to the UI end.'
      ],
      // logo:mnplogo
    },
    {
      id: 5,
      company:'Year Zero Studios',
      position:'Software Developer',
      period:'Sept 2021 - Dec 2021',
      description:[
        'Developed scalable and reusable React components from architectural and Figma UI/UX designs.',
        'Built full-stack features with TypeScript, React, and Firebase REST API, handling authentication and data persistence.',
        'Implemented responsive UI elements with Material-UI to ensure a consistent and accessible user experience across devices.'
      ],
      // logo:mnplogo
    }
];

const projects = [
  {
    title:"5DOF-VR Livestreaming", 
    description:"",
    link:"https://github.com/kiyon21/5dof-VR-livestreaming"
  },
  {
    title: "Metasplit",
    description: "MetaSplit is a cutting-edge React application that leverages the power of AI (using the OpenAI API) and integrates with MetaMask to revolutionize group transactions, particularly for carpooling scenarios. By employing advanced algorithms and AI capabilities, MetaSplit accurately calculates equal payments, taking into account car mileage, distance traveled, and gas prices.",
    //imageUrl: metasplit,
    link: "https://github.com/kiyon21/MetaSplit/"
  },
  {

    title: "Audio Player",
    description: "This project is a fully functional audio playback system designed to play any .WAV audio file stored on an SD card using the Altera DE2 development board. The system leverages the board's hardware capabilities, including the audio codec and SD card interface, to provide seamless audio playback. The software is written entirely in C and is optimized for real-time audio streaming, ensuring smooth and high-quality output.",
    //imageUrl: altera,
    link: "https://github.com/kiyon21/Music-Player"
  },
  {
    title:"Personal Portfolio",
    description:"",
    link:"https://github.com/kiyon21/Personal-Portfolio"
  },
  {

      title:"Motive - Android App",
      description:"Motive is a mobile app that connects people looking to play team sports with people hosting said sporting events. This application allows users to host their events and let people nearby be informed of what sports are being played, the specific participant details about the person, and any additional items required to participate.",
      //imageUrl:motive,
      link:"https://github.com/kiyon21/Motive"
  },
  {

    title:"ARM-Based RTOS",
    description:"Developed a pre-emptive, priority-based, multi-tasking kernel using C and ARM Assembly for an ARM SoC. Includes memory management scheme, task manipulation, scheduler logistics and test framework for the kernel, verifying its operation through extensive tests.",
    //imageUrl:rtos,
    link:"https://github.com/kiyon21/RTOS-ARM-Based"
}
];

async function addJobExperiences() {
  const batch = db.batch();
  const collectionRef = db.collection("job_experience");

  jobExperiences.forEach((job) => {
    const docId = job.id.toString()
    const docRef = collectionRef.doc(docId); // Auto-generated ID
    batch.set(docRef, 
      {
        ...job,
        sortOrder: job.id // so we query with order
      }
    );
  });

  try {
    await batch.commit();
    console.log("Job experiences added successfully!");
  } catch (error) {
    console.error("Error adding job experiences: ", error);
  }
}

async function addProjectExperiences() {
  const batch = db.batch();
  const collectionRef = db.collection("projects");

  projects.forEach((project) => {
    const docRef = collectionRef.doc(); // Auto-generated ID
    batch.set(docRef, project);
  });

  try {
    await batch.commit();
    console.log("Job experiences added successfully!");
  } catch (error) {
    console.error("Error adding job experiences: ", error);
  }
}


// Execute the function
addJobExperiences();
