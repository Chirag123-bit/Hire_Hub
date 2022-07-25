import React, { useEffect, useState } from "react";
import ReactRoundedImage from "react-rounded-image";
import { Link } from "react-router-dom";
import { ChatState } from "../../../../context/ChatProvider";
import { host } from "../../../../utils/APIRoutes";
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarWrapper,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  const { user } = ChatState();
  const [profileUrl, setProfileUrl] = useState(null);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (user) {
      console.log(user);
      if (user.avatarImage.substring(0, 4) !== "http") {
        setProfileUrl(host + "/" + user.avatarImage);
      }
      setLoading(false);
    }
  });
  const logout = () => {
    localStorage.clear();
    //redirect to login page
    window.location.href = "/auth/login";
  };
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
          >
            Home
          </SidebarLink>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarLink
            to="category"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
          >
            Categories
          </SidebarLink>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarLink
            to="jobs"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
          >
            Jobs
          </SidebarLink>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarLink
            to="company"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
          >
            Companies
          </SidebarLink>
        </SidebarMenu>
        <div class="dropdown" style={{ width: "max-content", margin: "auto" }}>
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
            {loading ? (
              "Loading...."
            ) : (
              <ReactRoundedImage
                image={profileUrl}
                roundedColor="rgb(4,93,233)"
                imageWidth="40"
                imageHeight="40"
                roundedSize="0"
                hoverColor="#DD1144"
              />
            )}
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
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
