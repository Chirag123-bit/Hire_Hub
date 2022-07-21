import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import {
  Message,
  MobileIcon,
  Nav,
  NavbarContainer,
  NavImp,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
  Notification,
} from "./NavbarElements";

import { Link, useNavigate } from "react-router-dom";
import { ChatState } from "../../../../context/ChatProvider";

const SeekerNav = ({ toggle }) => {
  const navigate = useNavigate();
  const [scrollNav, setScrollNav] = useState(false);
  const { user } = ChatState();

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  //logout
  const logout = () => {
    localStorage.clear();
    //redirect to login page
    window.location.href = "/auth/login";
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
              <Notification
                size={18}
                scrollNav={scrollNav}
                style={{ marginRight: "1rem", cursor: "pointer" }}
              />

              <Message
                size={18}
                scrollNav={scrollNav}
                onClick={() => navigate("/chats")}
                style={{ marginRight: "0.4rem", cursor: "pointer" }}
              />

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
                  {user.firstName + " " + user.lastName}
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
                  <Link className="dropdown-item" to="profile">
                    My Profile
                  </Link>
                  <Link class="dropdown-item" to="savedJobs">
                    Saved Jobs
                  </Link>
                  <Link class="dropdown-item" to="appliedJobs">
                    Applied Jobs
                  </Link>
                  <Link class="dropdown-item" to="events">
                    My Events
                  </Link>
                  <Link class="dropdown-item" to="todos">
                    My Todos
                  </Link>
                  <a class="dropdown-item" href="#" onClick={logout}>
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
