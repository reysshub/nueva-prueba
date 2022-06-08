import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Navegacion>
      <Menu>
        <TabLi>
          <Link to="/">Home</Link>
        </TabLi>
        <TabLi>
          <Link to="/services">Services</Link>
        </TabLi>
        <TabLi>
          <Link to="/about">About</Link>
        </TabLi>
        <TabLi>
          <Link to="/contact">Contact</Link>
        </TabLi>
      </Menu>
    </Navegacion>
  );
};

export const Navegacion = styled.nav`
  background-color: #4d004d;
  color: white;
  width: 390px;
  height: 45px;
  margin: auto;

  @media screen and (min-width: 750px) {
    width: 750px;
    height: 49px;
  }
`;

export const Menu = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;

  li:hover {
    background-color: #606668;
    border-bottom: 2px solid #10103c;
    text-decoration: underline;
    height: 50px;

    @media screen and (min-width: 750px) {
      height: 54px;
    }
  }

  a {
    text-decoration: none;
    color: white;
    font-size: 26px;
    font-weight: 100;

    @media screen and (min-width: 750px) {
      font-size: 29px;
    }
  }
`;

export const TabLi = styled.li`
  width: 25%;
  display: flex;
  justify-content: space-around;
`;

export default Navbar;
