import React from "react";
import styled from "styled-components";
import logo from "../img/headerlogo.png";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText></FooterText>
      <FooterLogo>
        <img src={logo} alt="logo" />
      </FooterLogo>
      <FooterText></FooterText>
    </FooterContainer>
  );
};

export const FooterContainer = styled.div`
  background-color: #4d004d;
  color: white;
  width: 390px;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (min-width: 750px) {
    width: 750px;
    height: 90px;
    justify-content: space-evenly;
  }
`;
export const FooterLogo = styled.div`
  display: flex;
  img {
    border-radius: 10px;
    width: 150px;
    @media screen and (min-width: 750px) {
      width: 200px;
    }
  }
`;
export const FooterText = styled.div`
  text-align: center;
  width: auto;
  height: auto;
`;

export default Footer;