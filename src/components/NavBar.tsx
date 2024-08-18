import React, { useState } from "react";
import {NavBarContainer, LeftContainer, RightContainer, NavBarInnerContainer, NavBarExtendedContainer, NavBarLinkContainer, NavBarLink, NavBarMainLink, OpenLinksButton, NavBarLinkExtended} from '../styles/Navbar.style';
import { Link } from "react-router-dom";

const NavBar = () => {
    const [extendNavBar, setExtendNavBar] = useState(false);

    return (
        <NavBarContainer extendNavBar = {extendNavBar}>
            <NavBarInnerContainer>
                <LeftContainer>
                    <NavBarMainLink to='/'>
                        Kiyon Farokhi
                    </NavBarMainLink>
                </LeftContainer>
                <RightContainer>
                    <NavBarLinkContainer>
                        <NavBarLink to="/aboutme">About Me</NavBarLink>
                        <NavBarLink to="/experience">Experience</NavBarLink>
                        <NavBarLink to="/resume">Resume</NavBarLink>
                    </NavBarLinkContainer>
                    <OpenLinksButton onClick={()=>{
                        setExtendNavBar((curr) => !curr);
                    }}>{extendNavBar? <>&#10005;</> : <>&#8801;</>}</OpenLinksButton>
                </RightContainer>
            </NavBarInnerContainer>

           {extendNavBar &&
                <NavBarExtendedContainer>
                    <NavBarLinkExtended to="/aboutme">About Me</NavBarLinkExtended>
                    <NavBarLinkExtended to="/experience">Experience</NavBarLinkExtended>
                    <NavBarLinkExtended to="/resume">Resume</NavBarLinkExtended>
                </NavBarExtendedContainer>
            }
            
        </NavBarContainer>
    );
}

export default NavBar;