
import React, { useState } from "react";
import swe from '../img/swe_clipart.png'
import { ContentWrapper, IntroContainer, NameContainer, IntroText, LearnMore, HeaderImage} from "../styles/Header.style";
import { ParagraphText, TitleText } from "../styles/Text.style";
import { ReactTyped } from "react-typed";

const Header = () => {
    const [vertical, setVertical] = useState(false);
    return (
        <ContentWrapper>
            <HeaderImage src={swe}/>
            <IntroContainer>
                <IntroText>Hello, I'm</IntroText>
                <TitleText>
                    <ReactTyped strings={["Kiyon Farokhi."]} typeSpeed={120}/>
                </TitleText>
                
                <ParagraphText>A Computer Engineer undergraduate at the University of Waterloo, software engineer wannabe, full-stack software developer, while constantly chasing the thrill. I guess you could call me the jack of all trades...</ParagraphText>
                <LearnMore>Learn More</LearnMore>
            </IntroContainer>
        </ContentWrapper>


        
    );
  }
  
  export default Header;