import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
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
                  <Skeleton />
                ) : (
                  <Logo src={job.company.avatarImage} alt="logo" />
                )}
              </LogoContainer>
              <TextContent>
                {isLoading ? (
                  <Skeleton />
                ) : (
                  <Title>
                    {job.title} {"("}Full Time{")"}
                  </Title>
                )}

                {isLoading ? (
                  <Skeleton />
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
                <Skeleton count={10} />
              ) : (
                <Description>{job.about}</Description>
              )}
            </CompanyDescription>
          </AboutContent>
        </AboutSection>

        <SkillSection>
          <SectionTitle>Skills</SectionTitle>

          <Skills>
            {isLoading ? (
              <Skeleton count={2} />
            ) : (
              job.skills.map((skill) => {
                return <Skill>{skill}</Skill>;
              })
            )}
          </Skills>
        </SkillSection>
        <DescSection>
          <SectionTitle>Description</SectionTitle>
          <Desc>
            {isLoading ? (
              <Skeleton count={10} />
            ) : (
              <Section>{job.description}</Section>
            )}
          </Desc>
        </DescSection>
        <ResponsibilitySection>
          <SectionTitle>Key Responsibilities</SectionTitle>
          <Responsibilities>
            {isLoading ? (
              <Skeleton count={5} />
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
              <Skeleton count={5} />
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
