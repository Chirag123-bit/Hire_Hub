import { Button } from "@mui/material";
import React from "react";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { IoSchoolOutline } from "react-icons/io5";
import { MdOutlineEmail, MdOutlineLocationCity } from "react-icons/md";
import ReactRoundedImage from "react-rounded-image";
import { Link } from "react-router-dom";
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
  console.log(user);
  return (
    <Card>
      <ContentHolder>
        <IntroContainer>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <Link to="profileUpdate">
              <Button
                variant="outlined"
                style={{ color: "white", borderColor: "white" }}
              >
                Edit Profile
              </Button>
            </Link>
          </div>
          <ImageContainer>
            <ReactRoundedImage
              image={user.avatarImage}
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
          {/* <Skill>Python</Skill>
          <Skill>Django</Skill>
          <Skill>React</Skill>
          <Skill>HTML</Skill>
          <Skill>CSS</Skill>
          <Skill>JavaScript</Skill>
          <Skill>Node</Skill>
          <Skill>Java</Skill> */}
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
      </ContentHolder>
    </Card>
  );
}

export default ProfileCard;
