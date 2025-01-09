import React from "react";
import {AboutMe} from "./AboutMe";
import Header from "./Header";
import { PageWrapper } from "../styles/LandingPage.style";
import { JobExperienceSection } from "./JobExperienceSection";
import { JobExperience } from "../types/JobExperience";
import { experiences } from "../info/Jobs";

const LandingPage = () => {

    
      

    return (
        <PageWrapper>
            <Header/>
            <AboutMe/>
            <JobExperienceSection/>
        </PageWrapper>

    );

}

export default LandingPage;