import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
  MobileIcon,
  NavImp,
  NavBtnLink,
  Notification,
  Down,
  Message,
} from "./NavbarElements";

const SeekerNav = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  });

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#01bf71" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              HireHub
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Home
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="discover"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Categories
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="services"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Jobs
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="signup">Companies</NavLinks>
              </NavItem>
            </NavMenu>
            <NavImp>
              <NavBtnLink to="/signin">
                <Notification size={18} />
              </NavBtnLink>
              <NavBtnLink to="/signin">
                <Message size={18} />
              </NavBtnLink>
              <NavBtnLink to="/signin">
                <Down size={18} />
              </NavBtnLink>
            </NavImp>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default SeekerNav;
