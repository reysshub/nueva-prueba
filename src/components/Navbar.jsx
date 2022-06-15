import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Navegacion>
      <Menu>
        <MenuLi>
          <MenuLink>
            <Link to="/">Home</Link>
          </MenuLink>
        </MenuLi>

        <MenuLi>
          <MenuLink>Services</MenuLink>
          <SubMenu>
            <SubMenuLi>
              <SubLink>
                <Link to="/info">Info</Link>
              </SubLink>
            </SubMenuLi>

            <SubMenuLi>
              <SubLink>
                <Link to="/rates">Rates</Link>
              </SubLink>
            </SubMenuLi>

            <SubMenuLi>
              <SubLink>
                <Link to="/individual">Individual</Link>
              </SubLink>
            </SubMenuLi>

            <SubMenuLi>
              <SubLink>
                <Link to="/couples">Couples</Link>
              </SubLink>
            </SubMenuLi>

            <SubMenuLi>
              <SubLink>
                <Link to="/Family">Family</Link>
              </SubLink>
            </SubMenuLi>

            <SubMenuLi>
              <SubLink>
                <Link to="/telehealth">Telehealth</Link>
              </SubLink>
            </SubMenuLi>

            <SubMenuLi>
              <SubLink>
                <Link to="/polices">Polices</Link>
              </SubLink>
            </SubMenuLi>
          </SubMenu>
        </MenuLi>

        <MenuLi>
          <MenuLink>About</MenuLink>
          <SubMenu>
            <SubMenuLi>
              <SubLink>
                <Link to="/bio">Bio</Link>
              </SubLink>
            </SubMenuLi>

            <SubMenuLi>
              <SubLink>
                <Link to="/credentials">Credentials</Link>
              </SubLink>
            </SubMenuLi>
          </SubMenu>
        </MenuLi>

        <MenuLi>
          <MenuLink>Contact</MenuLink>
          <SubMenu>
            <SubMenuLi>
              <SubLink>
                <Link to="/getintouch">Get in Touch</Link>
              </SubLink>
            </SubMenuLi>

            <SubMenuLi>
              <SubLink>
                <Link to="/location">Location</Link>
              </SubLink>
            </SubMenuLi>

            <SubMenuLi>
              <SubLink>
                <Link to="/faqs">FAQs</Link>
              </SubLink>
            </SubMenuLi>
          </SubMenu>
        </MenuLi>
      </Menu>
    </Navegacion>
  );
};

export const Navegacion = styled.nav`
  @media screen and (min-width: 390px) {
    background-color: #4d004d;
    width: 390px;
    margin: auto;
    padding-left: 20px;

    ul:hover a {
      color: white;
    }
  }
  @media screen and (min-width: 750px) {
    width: 750px;
  }
  @media screen and (min-width: 1300px) {
    width: 1300px;
  }
`;
export const Menu = styled.ul`
  display: flex;
  justify-content: space-around;

  li:hover ul {
    border: 1px solid black;
    display: block;
    transition: all 0.3s ease;
  }

  li:hover a {
    text-decoration: none;
  }
`;
export const SubMenu = styled.ul`
  background-color: #4d004d;
  position: absolute;
  display: none;
  width: 100%;
  list-style: none;
  color: white;
`;
export const MenuLi = styled.li`
  @media screen and (min-width: 390px) {
    display: inline-block;
    position: relative;
    text-align: left;
    width: 25%;
  }
  @media screen and (min-width: 750px) {
    /* width: 750px; */
  }
  @media screen and (min-width: 1300px) {
    width: 15%;
  }

  a:hover {
    background-color: #606668;
    transition: all 0.3s ease;
    color: white;
  }

  ul:hover a {
    color: white;
  }
`;
export const SubMenuLi = styled.li`
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  border-top: 0.1px solid rgb(227, 202, 174);

  a:hover a {
    /* color: black; */
    color: white;
  }
`;
export const MenuLink = styled.a`
  @media screen and (min-width: 390px) {
    text-align: left;
    text-decoration: none;
    display: block;
    font-size: 16px;
    padding: 7px;
    color: white;
    a {
      color: white;
      text-decoration: none;
    }
  }
  @media screen and (min-width: 750px) {
    text-align: center;
    font-size: 21px;
    padding: 8px;
    font-family: sans-serif;
  }
`;
export const SubLink = styled.a`
  text-decoration: none;
  font-size: 14px;
  display: block;
  padding: 8px;

  @media screen and (min-width: 750px) {
    padding: 9px;
    font-size: 21px;
    text-align: center;
    height: 45px;
  }
`;

export default Navbar;
