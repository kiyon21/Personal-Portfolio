import React from "react";
import {AboutMe} from "./AboutMe";
import Header from "./Header";
import { PageWrapper } from "../styles/LandingPage.style";
import JobExperience from "./JobExperience";
import {Experience} from "./Experiences";

const LandingPage = () => {

    return (
        <PageWrapper>
            <Header/>
            <AboutMe/>
            <Experience/>
        </PageWrapper>

    );

}

export default LandingPage;