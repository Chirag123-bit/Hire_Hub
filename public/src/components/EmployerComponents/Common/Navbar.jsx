import React from "react";
import { MdOutlineLightMode } from "react-icons/md";
import { BiMessageSquareDetail } from "react-icons/bi";
import { IoNotifications } from "react-icons/io5";
import ReactRoundedImage from "react-rounded-image";
import Profile from "../../../images/profile.jpg";

function Navbar() {
  return (
    <div className="navBar">
      <div className="navBarContainer">
        <div className="iconsContainer">
          <MdOutlineLightMode />
          <BiMessageSquareDetail />
          <IoNotifications />
        </div>
        <div className="userContainer">
          <div className="user">
            <h4>Chirag Simkhada</h4>
            <p className="mb-1">Microsoft</p>
          </div>
          <div className="profilePic">
            <ReactRoundedImage
              image={Profile}
              roundedColor="rgb(4,93,233)"
              imageWidth="40"
              imageHeight="40"
              roundedSize="0"
              hoverColor="#DD1144"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
