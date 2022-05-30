import React from "react";
import { BiMessageSquareDetail } from "react-icons/bi";
import { IoNotifications } from "react-icons/io5";
import { MdOutlineLightMode } from "react-icons/md";
import ReactRoundedImage from "react-rounded-image";

function Navbar({ user, company, loading, jobInfo }) {
  if (!loading) {
    console.log(jobInfo);
  }
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
            <h4>
              {user.firstName} {user.lastName}
            </h4>
            <p className="mb-1">{company.name}</p>
          </div>
          <div className="profilePic">
            <ReactRoundedImage
              image={user.avatarImage}
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
