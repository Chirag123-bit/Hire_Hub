import Skeleton from "@mui/material/Skeleton";
import React from "react";
import {
  AboutContent,
  AboutSection,
  Address,
  CompanyDescription,
  CompanyInfo,
  ContentWrapper,
  Desc,
  Description,
  DescSection,
  Logo,
  LogoContainer,
  RequirementsSections,
  Responsibilities,
  Responsibility,
  ResponsibilitySection,
  Sallary,
  Section,
  SectionTitle,
  SectionWrapper,
  Skill,
  Skills,
  SkillSection,
  TextContent,
  Title,
} from "./Components";
function JobDescriptionSection({ job, isLoading }) {
  return (
    <SectionWrapper>
      <ContentWrapper>
        <AboutSection>
          <SectionTitle>About This Role</SectionTitle>
          <AboutContent>
            <CompanyInfo>
              <LogoContainer>
                {isLoading ? (
                  <Skeleton variant="circular" height="60px" width="60px" />
                ) : (
                  <Logo src={job.company.avatarImage} alt="logo" />
                )}
              </LogoContainer>
              <TextContent>
                {isLoading ? (
                  <Skeleton variant="rectangular" width="100px" />
                ) : (
                  <Title>
                    {job.title} {"("}Full Time{")"}
                  </Title>
                )}

                {isLoading ? (
                  <Skeleton variant="rectangular" />
                ) : (
                  <Address>
                    {job.company.region}, {job.company.country}
                  </Address>
                )}
                {isLoading ? (
                  <Skeleton />
                ) : (
                  <Sallary>Rs.{job.sallary} + Benefits</Sallary>
                )}
              </TextContent>
            </CompanyInfo>
            <CompanyDescription>
              {isLoading ? (
                <Skeleton variant="rectangular" height="30vh" />
              ) : (
                <Description>{job.about}</Description>
              )}
            </CompanyDescription>
          </AboutContent>
        </AboutSection>

        <SkillSection>
          <SectionTitle>Skills</SectionTitle>

          {isLoading ? (
            <div>
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </div>
          ) : (
            <Skills>
              {job.skills.map((skill) => {
                return <Skill>{skill}</Skill>;
              })}
            </Skills>
          )}
        </SkillSection>
        <DescSection>
          <SectionTitle>Description</SectionTitle>
          <Desc>
            {isLoading ? (
              <Skeleton variant="rectangular" height="50vh" />
            ) : (
              <Section>{job.description}</Section>
            )}
          </Desc>
        </DescSection>
        <ResponsibilitySection>
          <SectionTitle>Key Responsibilities</SectionTitle>
          <Responsibilities>
            {isLoading ? (
              <div>
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
              </div>
            ) : (
              job.responsibilities.map((resp) => {
                return <Responsibility>{resp}</Responsibility>;
              })
            )}
          </Responsibilities>
        </ResponsibilitySection>
        <RequirementsSections>
          <SectionTitle>Key Requirements</SectionTitle>
          <Responsibilities>
            {isLoading ? (
              <div>
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
              </div>
            ) : (
              job.requirements.map((resp) => {
                return <Responsibility>{resp}</Responsibility>;
              })
            )}
          </Responsibilities>
        </RequirementsSections>
      </ContentWrapper>
    </SectionWrapper>
  );
}

export default JobDescriptionSection;
