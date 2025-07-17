import {useRef} from "react";
import {AboutMe} from "./AboutMe";
import Header from "./Header";
import { PageWrapper } from "../styles/LandingPage.style";
import { Projects } from "./Projects";
import {projects} from "../info/ProjectsData";
import JobExperience from "./JobExperience";
import Footer from "./Footer";

const LandingPage = () => {

  const targetRef = useRef(null);

    return (
        <PageWrapper>
            <Header ref={targetRef}/>
            <div id="info-section">
              <AboutMe ref={targetRef}/>
              <JobExperience/>
              <Projects/>
              <Footer/>
            </div> 
        </PageWrapper>

    );

}

export default LandingPage;