import styled from "styled-components";
import { Link } from "react-router-dom";

interface NavBarContainerProps  {
  extendNavBar?: boolean;
}

export const NavBarContainer = styled.nav<NavBarContainerProps>`
    width: 100%;
    height: ${({extendNavBar}:NavBarContainerProps) => (extendNavBar ? "100vh" : "80px")};
    background-color: black;
    display: flex;
    flex-direction: column;

`;

export const LeftContainer = styled.div `
    flex: 40%;
    padding-left: 3%;
    display: flex;

    align-items: center;

`;

export const RightContainer = styled.div `
    flex: 60%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-left: 5%;
    margin-right: 5%;

`;

export const NavBarInnerContainer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
`;


export const NavBarLinkContainer = styled.div`
  display:flex;  
`;

export const NavBarLink = styled(Link)`
  color:white;
  font-size: large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;

  @media (max-width: 700px){
    display:none;
  }
`;

export const NavBarMainLink = styled(Link)`
  color:white;
  font-size: x-large;
  display: inline-block;
  font-family: 'Times New Roman', Times, serif;
  text-decoration: none;
  margin: 10px;

`;

export const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color:white;
  font-size: 45px;
  cursor: pointer;

  @media (min-width: 700px){
    display:none;
  }
`;

export const NavBarExtendedContainer= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 700px){
      display: none;
    }
`;

export const NavBarLinkExtended = styled(Link)`
  color:white;
  font-size: large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
`;