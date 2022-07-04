import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";

import {
  BiDownArrowAlt,
  BiMessageRounded,
  BiNotification,
} from "react-icons/bi";

export const Nav = styled.nav`
  background: ${({ scrollNav }) =>
    scrollNav ? "rgba(0,0,0, 0.3)" : "transparent"};
  backdrop-filter: ${({ scrollNav }) => (scrollNav ? "blur(20px);" : "")};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: -webkit-center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: 0.2s all linear;

  @media screen and (max-width: 960px) {
    transition: 0.2s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
  transition: 0.2s all linear;
`;

export const NavLogo = styled(LinkR)`
  /* color: #045de9; */
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  color: white;
  /* color: ${({ scrollNav }) => (scrollNav ? "white" : "orange")}; */
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
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

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkR)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  font-weight: 600;
  height: 100%;
  cursor: pointer;
  color: white;
  /* color: ${({ scrollNav }) => (scrollNav ? "white" : "black")}; */

  &:hover {
    color: #045de9;
  }
  &.active {
    border-bottom: 4px solid #045de9;
  }
`;

// border-bottom: 3px solid #01bf71;
export const NavImp = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  /* border-radius: 50px; */
  /* background: #01bf71; */
  white-space: nowrap;
  padding: 10px;
  /* color: #010606; */
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.2s all ease-in-out;
  text-decoration: none;

  &:hover {
    transition: 0.2s all ease-in-out;
    /* background: white !important; */
    color: white;
  }
`;

export const Notification = styled(BiNotification)`
  color: white;

  /* color: ${({ scrollNav }) =>
    scrollNav ? "white !important" : "black !important"}; */
`;
export const Message = styled(BiMessageRounded)`
  color: white;

  /* color: ${({ scrollNav }) =>
    scrollNav ? "white !important" : "black !important"}; */
`;
export const Down = styled(BiDownArrowAlt)`
  color: white;

  /* color: ${({ scrollNav }) =>
    scrollNav ? "white !important" : "black !important"}; */
`;
