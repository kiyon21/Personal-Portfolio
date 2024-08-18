import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import mnpDigital from './../img/mnpDigital.png';
import yzs from "./../img/yzs.png";


const techexp = {
  position: 'relative',
  display:'block',
  top: '850px',
  width: '100%',
  margin:'10px auto',
  backgroundColor:'white',
  padding:'30px',
} as React.CSSProperties;

const title = {
textAlign:'center',
fontSize:'50px',
marginBottom:'10px',
fontFamily:'monospace',
color:'black',

} as React.CSSProperties;

const logo = {
width:'50px',
margin:'5px'
} as React.CSSProperties;

  

function JobExperience() {
  

    return (
    <div style = {techexp}>
      <h2 style = {title}>Experience</h2>
      <Timeline  position="alternate" nonce={undefined} onResize={undefined} onResizeCapture={undefined}>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0', fontSize:'16px' }}
          align="right"
          color='black'
        >
          Sept 2022 - Dec 2022
        
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx= {{margin:'20px', backgroundColor:'white'}}>
            <img style = {logo} src = {mnpDigital}/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>

        <TimelineContent sx={{ py: '12px', px: 2,  boxShadow : '0 5px 20px rgba(0,0,0,0.5)', borderRadius:'20px',}}>
          <Typography variant="h6" component="span" fontWeight="bold" color='black'>
            MNP Digital Inc.
          </Typography>
          <Typography>
          -	Performed configurations and customizations within Microsoft Dynamics 365 for organizations including Ontario Lottery Gaming and the Office of the Child and Youth Advocate.</Typography>
<Typography>-	Assisted in developing public-facing portals using Microsoft Power App Portals.</Typography>
<Typography>-	Utilized Azure DevOps for task assignments, testing and issues management.</Typography>
<Typography>-	Worked as part of a Development Team utilizing Agile SCRUM methodology, involved in Sprint Planning, Daily Scrums, Sprint Retrospectives, Sprint Reviews, and Product Backlog Refinements.</Typography>
<Typography>-	Performed Quality Assurance testing, running manual test cases, reporting defects. </Typography>
<Typography>-	Supported clients during User Acceptance Testing by triaging, investigating, and remediating defects.</Typography>


          
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m:'auto 0',fontSize:'16px' }}
          align="right"
          color='black'
        >
          Sept 2021 - Dec 2021
        
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx= {{margin:'20px', backgroundColor:'white'}}>
            <img style = {logo} src = {yzs}/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2,  boxShadow : '0 5px 20px rgba(0,0,0,0.5)', textAlign:'right', borderRadius:'20px' }}>
          <Typography variant="h6" component="span" fontWeight="bold" color='black'>
            Year Zero Studios
          </Typography>
          <Typography>
          -	Redesigned and coded user page of web project Wellify to optimize user flow and appearance.</Typography>
<Typography>
-	Conducted research and assisted with new business scoping efforts, resulting in 200+ new users.
</Typography>

<Typography>-	Refactored multiple web-based projects using TypeScript React, reduce 20% code redundancy. </Typography>
<Typography>-	Implemented front-end technical solutions to meet project requirements for creation of 5 new web pages.</Typography>
<Typography>-	Maintained 5 webpages, graphics, and online marketing material under direction of UX manager and development team.
  </Typography>
<Typography>-	Regularly used Material-UI’s accessible library to develop React.js applications faster and more efficiently.
</Typography>



 

        </TimelineContent>
      </TimelineItem>
    </Timeline>
    </div>
    );
  };
  export default JobExperience;