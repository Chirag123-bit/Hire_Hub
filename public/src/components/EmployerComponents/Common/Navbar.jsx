import React, { useEffect } from "react";
import { BiMessageSquareDetail } from "react-icons/bi";
import { IoNotifications } from "react-icons/io5";
import { MdOutlineLightMode } from "react-icons/md";
import ReactRoundedImage from "react-rounded-image";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { host } from "../../../utils/APIRoutes";

function Navbar({ user, company, loading, jobInfo }) {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    window.location.href = "/auth/login";
  };
  useEffect(() => {
    if (!company) {
      Navigate("/auth/login");
    }
  }, []);

  return (
    <div className="navBar" style={{ paddingBottom: "0.8rem" }}>
      <div className="navBarContainer">
        <div className="iconsContainer">
          <MdOutlineLightMode />
          <BiMessageSquareDetail onClick={() => navigate("/chats")} />
          <IoNotifications />
        </div>
        <div className="userContainer">
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButtonEmployer"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={{
                background: "transparent",
                border: "none",
                boxShadow: "none",
                color: "white",
                paddingTop: "0px",
                paddingBottom: "0px",
              }}
            >
              <div className="user">
                <h6 style={{ marginBottom: "0" }}>
                  {user.firstName} {user.lastName}
                </h6>

                <p className="mb-1">{company.name}</p>
              </div>
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
              <Link className="dropdown-item" to="setting">
                Settings
              </Link>

              <a class="dropdown-item" href="#" onClick={logout}>
                Logout
              </a>
            </div>
          </div>
          <div className="profilePic">
            <ReactRoundedImage
              image={host + "/" + company.avatarImage}
              // roundedColor="rgb(4,93,233)"
              imageWidth="40"
              imageHeight="40"
              roundedSize="0"
              // hoverColor="#DD1144"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
