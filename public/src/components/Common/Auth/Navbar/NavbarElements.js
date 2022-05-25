import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import styled from "styled-components";

/*======== CSS Variables: ========*/
const varHeaderHeight = "5rem";
const firstColor = "#00bb77";
const firstAltColor = "#009955";

/*======== Components: ========*/
export const Nav = styled.nav`
  //If user scroll than the background is black. If not, it's transparent:
  background: ${({ scrollNav }) =>
    scrollNav ? "#000" : "rgba(0, 0, 0, 0.2) !important"};
  // backgroundColor: "rgba(0, 0, 0, 0.2) !important",
  height: ${varHeaderHeight};
  margin-top: -${varHeaderHeight};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: ${varHeaderHeight};
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  &:hover {
    color: orange;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    color: #fff;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.div`
  height: 5rem;
`;

//This navLinks component is a link from react-scroll lib:
export const NavLinks = styled(LinkScroll)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  font-weight: 600;
  height: 100%;
  cursor: pointer;
  /* &.signUp {
    color: ${firstColor};
  } */
  &:hover {
    color: #423edd;
  }
  &.active {
    border-bottom: 4px solid #423edd;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 50px;
  margin: 0 1rem;
  background: #423edd;
  white-space: nowrap;
  padding: 10px 24px;
  color: white;
  font-weight: 600;
  font-size: 1rem;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2 ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2 ease-in-out;
    background-color: orange;
    color: black;
  }
`;
