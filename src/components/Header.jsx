import React from "react";
import styled from "styled-components";
import logo from "../img/headerlogo.png";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <Encabezado>
      <Heading>
        <HeaderLogo>
          <img src={logo} alt="logo" />
        </HeaderLogo>
      </Heading>
      <Navbar />
    </Encabezado>
  );
};

export const Encabezado = styled.div`
  position: fixed;
  top: 5px;
  width: 390px;

  @media screen and (min-width: 750px) {
    width: 750px;
  }
`;

export const Heading = styled.div`
  @media screen and (min-width: 750px) {
  }
`;

export const HeaderLogo = styled.div`
  img {
    width: 100%;
  }
`;

export default Header;
