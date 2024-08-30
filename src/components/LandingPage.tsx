import React from "react";
import {AboutMe} from "./AboutMe";
import Header from "./Header";
import { PageWrapper } from "../styles/LandingPage.style";
import JobExperience from "./JobExperience";

const LandingPage = () => {

    return (
        <PageWrapper>
            <Header/>
            <AboutMe/>
        </PageWrapper>

    );

}

export default LandingPage;