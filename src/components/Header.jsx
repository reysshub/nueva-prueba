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
  @media screen and (min-width: 390px) {
    background: white;
    z-index: 1000;
    position: fixed;
    top: 0px;
    width: 390px;
    height: 128px;
  }
  @media screen and (min-width: 750px) {
    width: 750px;
    height: 135px;
  }
  @media screen and (min-width: 1300px) {
    width: 1300px;
    height: 162px;
  }
`;

export const Heading = styled.div`
  @media screen and (min-width: 390px) {
    height: 85px;
  }
  @media screen and (min-width: 750px) {
    height: 85px;
  }
  @media screen and (min-width: 1300px) {
    height: 112px;
  }
`;

export const HeaderLogo = styled.div`
  @media screen and (min-width: 390px) {
    padding-left: 30px;
    img {
      width: 70%;
      height: 80px;
    }
    @media screen and (min-width: 750px) {
      padding-left: 40px;
      img {
        height: 80px;
        width: 50%;
        padding-left: 8%;
      }
    }
    @media screen and (min-width: 1300px) {
      padding-left: 50px;
      img {
        height: 108px;
        width: 40%;
        padding-left: 10%;
      }
    }
  }
`;

export const BlueLinea = styled.hr`
  background-color: #4d004d;
  height: 4px;
  margin: auto;
  width: 100%;
`;

export default Header;
