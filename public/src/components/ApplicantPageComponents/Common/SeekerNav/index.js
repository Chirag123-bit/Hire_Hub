import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import {
  Message,
  MobileIcon,
  Nav,
  NavbarContainer,
  NavBtnLink,
  NavImp,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
  Notification,
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
            <NavLogo to="/" onClick={toggleHome} scrollNav={scrollNav}>
              HireHub
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="home"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  onClick={toggleHome}
                  scrollNav={scrollNav}
                >
                  Home
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="category"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  scrollNav={scrollNav}
                  // offset={-80}
                >
                  Categories
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="jobs"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  scrollNav={scrollNav}
                  // offset={-80}
                >
                  Jobs
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="company"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  scrollNav={scrollNav}
                  // offset={-80}
                >
                  Companies
                </NavLinks>
              </NavItem>
            </NavMenu>
            <NavImp>
              <NavBtnLink to="/auth/login">
                <Notification size={18} scrollNav={scrollNav} />
              </NavBtnLink>
              <NavBtnLink to="/auth/login">
                <Message size={18} scrollNav={scrollNav} />
              </NavBtnLink>
              <div class="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{
                    background: "transparent",
                    border: "none",
                    boxShadow: "none",
                    color: "white",
                  }}
                >
                  Chirag Simkhada
                </button>
                <div
                  class="dropdown-menu"
                  id="profileDropdown"
                  aria-labelledby="dropdownMenuButton"
                  style={{
                    background: "transparent",
                    backdropFilter: "blur(20px)",
                    border: "1px solid white",
                    boxShadow: "none",
                    color: "white",
                  }}
                >
                  <a class="dropdown-item" href="/applicant/profile">
                    My Profile
                  </a>
                  <a class="dropdown-item" href="#">
                    Saved Jobs
                  </a>
                  <a class="dropdown-item" href="/applicant/appliedJobs">
                    Applied Jobs
                  </a>
                  <a class="dropdown-item" href="#">
                    My Events
                  </a>
                  <a class="dropdown-item" href="#">
                    My Todos
                  </a>
                  <a class="dropdown-item" href="#">
                    Logout
                  </a>
                </div>
              </div>
            </NavImp>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default SeekerNav;
