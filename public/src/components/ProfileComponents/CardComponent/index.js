import React from "react";
import {
  Card,
  ContentHolder,
  ImageContainer,
  IntroContainer,
  IntroTextHolder,
  Name,
  Title,
  SkillHolder,
  Skill,
  Info,
  InfoHolder,
  IconHolder,
} from "./Components";
import ReactRoundedImage from "react-rounded-image";

import Profile from "../../../images/profile.jpg";
import { MdOutlineEmail } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { IoSchoolOutline } from "react-icons/io5";

function ProfileCard() {
  return (
    <Card>
      <ContentHolder>
        <IntroContainer>
          <ImageContainer>
            <ReactRoundedImage
              image={Profile}
              roundedColor="rgb(4,93,233)"
              imageWidth="150"
              imageHeight="150"
              roundedSize="4"
              hoverColor="#DD1144"
            />
          </ImageContainer>
          <IntroTextHolder>
            <Name>Chirag Simkhada</Name>
            <Title>Backend Developer</Title>
          </IntroTextHolder>
        </IntroContainer>

        <SkillHolder>
          <Skill>Python</Skill>
          <Skill>Django</Skill>
          <Skill>React</Skill>
          <Skill>HTML</Skill>
          <Skill>CSS</Skill>
          <Skill>JavaScript</Skill>
          <Skill>Node</Skill>
          <Skill>Java</Skill>
        </SkillHolder>

        <InfoHolder>
          <Info>
            <IconHolder>
              <MdOutlineEmail />
            </IconHolder>
            chiragsimkhada@gmail.com
          </Info>
          <Info>
            <IconHolder>
              <GrLocation />
            </IconHolder>
            Kathmandu, Nepal
          </Info>
          <Info>
            <IconHolder>
              <HiOutlineOfficeBuilding />
            </IconHolder>
            Full Time
          </Info>
          <Info>
            <IconHolder>
              <IoSchoolOutline />
            </IconHolder>
            Information Technology
          </Info>
        </InfoHolder>
      </ContentHolder>
    </Card>
  );
}

export default ProfileCard;
