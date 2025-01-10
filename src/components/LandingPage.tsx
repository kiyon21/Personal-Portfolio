import {useRef} from "react";
import {AboutMe} from "./AboutMe";
import Header from "./Header";
import { PageWrapper } from "../styles/LandingPage.style";
import { JobExperienceSection } from "./JobExperienceSection";
import { JobExperience } from "../types/JobExperience";
import { experiences } from "../info/Jobs";

const LandingPage = () => {

  const targetRef = useRef(null);


    return (
        <PageWrapper>
            <Header ref={targetRef}/>
            <div id="info-section">
              <AboutMe ref={targetRef}/>
              <JobExperienceSection/>
            </div> 
        </PageWrapper>

    );

}

export default LandingPage;