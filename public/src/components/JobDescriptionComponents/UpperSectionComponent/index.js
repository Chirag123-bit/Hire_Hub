import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
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
  console.log(job);
  console.log(isLoading);
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
            {isLoading ? <Skeleton count={6} /> : job.about}
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
            <Skeleton />
          ) : (
            <ApplyButton
              to={`applicant/company/${job.company._id}`}
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary="true"
              dark="true"
            >
              Apply {hover ? <ArrowForward /> : <ArrowRight />}
            </ApplyButton>
          )}
        </ButtonGroup>
      </ContentHolder>
    </SectionContainer>
  );
}

export default JobInfoSection;
