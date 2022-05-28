import Skeleton from "@mui/material/Skeleton";
import React, { useState } from "react";
import {
  ArrowForward,
  ArrowRight,
} from "../../OnboardingPageComponents/HeroSection/HeroElements";
import {
  ApplyButton,
  ButtonGroup,
  ColoredTitle,
  CompanyButton,
  ContentHolder,
  JobInfoSub,
  JobInfoTitle,
  SectionContainer,
  TextContentSection,
  UnStyled,
} from "./Components";

function JobInfoSection({ job, isLoading }) {
  const [hover, setHover] = useState(false);
  const onHover = () => setHover(!hover);
  return (
    <SectionContainer>
      <ContentHolder>
        <TextContentSection>
          <JobInfoTitle>
            <ColoredTitle>{isLoading ? <Skeleton /> : job.title}</ColoredTitle>
            <ColoredTitle>
              <UnStyled>at</UnStyled>{" "}
              <ColoredTitle>
                {isLoading ? <Skeleton /> : job.company.name}
              </ColoredTitle>
            </ColoredTitle>
          </JobInfoTitle>
          <JobInfoSub>
            {isLoading ? (
              <Skeleton variant="rectangular" height="15vh" />
            ) : (
              job.about
            )}
          </JobInfoSub>
        </TextContentSection>
        <ButtonGroup>
          <CompanyButton
            onClick={(event) => {
              window.location.href = `/applicant/company/${job.company._id}`;
            }}
          >
            View Company
          </CompanyButton>
          {isLoading ? (
            <Skeleton variant="rectangular">
              <ApplyButton
                onMouseEnter={onHover}
                onMouseLeave={onHover}
                primary="true"
                dark="true"
              >
                Apply {hover ? <ArrowForward /> : <ArrowRight />}
              </ApplyButton>
            </Skeleton>
          ) : (
            <ApplyButton
              onClick={(event) => {
                window.location.href = `/applicant/company/${job.company._id}`;
              }}
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary="true"
              dark="true"
            >
              Explore {hover ? <ArrowForward /> : <ArrowRight />}
            </ApplyButton>
          )}
        </ButtonGroup>
      </ContentHolder>
    </SectionContainer>
  );
}

export default JobInfoSection;
