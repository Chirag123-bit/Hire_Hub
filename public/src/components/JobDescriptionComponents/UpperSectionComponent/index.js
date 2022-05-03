import React, { useState } from "react";
import { Button } from "../../ButtonElement";
import { ArrowForward, ArrowRight } from "../../HeroSection/HeroElements";
import {
  SectionContainer,
  ContentHolder,
  ColoredTitle,
  JobInfoTitle,
  TextContentSection,
  JobInfoSub,
  UnStyled,
  ButtonGroup,
  CompanyButton,
  ApplyButton,
} from "./Components";

function JobInfoSection() {
  const [hover, setHover] = useState(false);
  const onHover = () => setHover(!hover);
  return (
    <SectionContainer>
      <ContentHolder>
        <TextContentSection>
          <JobInfoTitle>
            <ColoredTitle>Senior Backend Developer </ColoredTitle>
            <ColoredTitle>
              <UnStyled>at</UnStyled> Apple Inc.
            </ColoredTitle>
          </JobInfoTitle>
          <JobInfoSub>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia,
          </JobInfoSub>
        </TextContentSection>
        <ButtonGroup>
          <CompanyButton>View Company</CompanyButton>
          <ApplyButton
            to="/applicant/home"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Apply {hover ? <ArrowForward /> : <ArrowRight />}
          </ApplyButton>
        </ButtonGroup>
      </ContentHolder>
    </SectionContainer>
  );
}

export default JobInfoSection;
