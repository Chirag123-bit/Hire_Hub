import { Button } from "@mui/material";
import axios from "axios";
import React, { useRef, useState } from "react";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { IoSchoolOutline } from "react-icons/io5";
import { MdOutlineEmail, MdOutlineLocationCity } from "react-icons/md";
import ReactRoundedImage from "react-rounded-image";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { host, updateProfilePic } from "../../../utils/APIRoutes";

import {
  Card,
  ContentHolder,
  IconHolder,
  ImageContainer,
  Info,
  InfoHolder,
  IntroContainer,
  IntroTextHolder,
  Name,
  Skill,
  SkillHolder,
  Title,
} from "./Components";

function ProfileCard({ user }) {
  const inputFile = useRef(null);
  const handleBtnClick = () => {
    inputFile.current.click();
  };

  const [profileUrl, setProfileUrl] = useState(user.avatarImage);

  const getNewImage = async () => {
    setIsUpdating(true);
    const currentUser = await JSON.parse(localStorage.getItem("user"));
    setProfileUrl(currentUser.avatarImage);
    setIsUpdating(false);
  };

  const [updating, setIsUpdating] = useState(false);
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const onImageChange = async (e) => {
    const formData = new FormData();
    formData.append("image", e.target.files[0]);

    const token = JSON.parse(localStorage.getItem("token"));
    const config = {
      headers: {
        "content-type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const res = await axios.post(updateProfilePic, formData, config);
      if (res.status === 200) {
        localStorage.removeItem("user");
        localStorage.setItem("user", JSON.stringify(res.data.user));
        toast.success("Profile picture updated successfully", toastOptions);
        getNewImage();
      } else {
        toast.error(
          "Failed to update profile. Please select a valid image",
          toastOptions
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Card>
      <input
        type="file"
        id="image"
        name="image"
        ref={inputFile}
        style={{ display: "none" }}
        onChange={onImageChange}
      />
      <ContentHolder>
        <IntroContainer>
          <ImageContainer onClick={handleBtnClick}>
            <ReactRoundedImage
              image={host + "/" + profileUrl}
              roundedColor="rgb(4,93,233)"
              imageWidth="150"
              imageHeight="150"
              roundedSize="0"
              hoverColor="#DD1144"
            />
          </ImageContainer>
          <IntroTextHolder>
            <Name>
              {user.firstName} {user.lastName}
            </Name>
            <Title>{user.professional.title}</Title>
          </IntroTextHolder>
        </IntroContainer>

        <SkillHolder>
          {user.professional.skills.map((skill) => (
            <Skill key={skill}>{skill}</Skill>
          ))}
        </SkillHolder>

        <InfoHolder>
          <Info>
            <IconHolder>
              <MdOutlineEmail />
            </IconHolder>{" "}
            {user.email}
          </Info>
          <Info>
            <IconHolder>
              <MdOutlineLocationCity />
            </IconHolder>{" "}
            Kathmandu, Nepal
          </Info>
          <Info>
            <IconHolder>
              <HiOutlineOfficeBuilding />
            </IconHolder>{" "}
            Full Time
          </Info>
          <Info>
            <IconHolder>
              <IoSchoolOutline />
            </IconHolder>{" "}
            {user.professional.sector}
          </Info>
        </InfoHolder>
        <div style={{ marginBottom: "1rem" }}>
          <Link to="profileUpdate">
            <Button
              variant="outlined"
              style={{ color: "white", borderColor: "white", width: "100%" }}
            >
              Edit Profile
            </Button>
          </Link>
        </div>
        <div>
          <Link to="ChangePassword">
            <Button
              variant="outlined"
              style={{ color: "white", borderColor: "white", width: "100%" }}
            >
              Change Password
            </Button>
          </Link>
        </div>
      </ContentHolder>
    </Card>
  );
}

export default ProfileCard;
