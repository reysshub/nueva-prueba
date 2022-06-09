import React from "react";
import styled from "styled-components";
import logo from "../img/headerlogo.png";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <Encabezado>
      <Heading>
        <BlueLinea />
        <HeaderLogo>
          <img src={logo} alt="logo" />
        </HeaderLogo>
      </Heading>
      <Navbar />
    </Encabezado>
  );
};

export const Encabezado = styled.div`
  /* border: 1px dashed blueviolet; */
  background: white;
  position: fixed;
  top: 0px;
  width: 390px;

  @media screen and (min-width: 750px) {
    width: 750px;
    height: 212px;
  }
  @media screen and (min-width: 1300px) {
    width: 1300px;
    height: 246px;
  }
`;

export const Heading = styled.div`
  @media screen and (min-width: 750px) {
  }
  @media screen and (min-width: 1300px) {
  }
`;

export const HeaderLogo = styled.div`
  /* border: 2px dashed red; */
  img {
    width: 100%;
    @media screen and (min-width: 750px) {
      height: 150px;
      width: 68%;
      padding-left: 8%;
    }
    @media screen and (min-width: 1300px) {
      height: 180px;
      width: 52%;
      padding-left: 10%;
    }
  }
`;

export const BlueLinea = styled.hr`
  background-color: #4d004d;
  height: 6px;
  margin: auto;
  width: 100%;
`;

export default Header;
