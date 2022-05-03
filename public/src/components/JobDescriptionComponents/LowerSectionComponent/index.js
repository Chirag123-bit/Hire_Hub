import React from "react";
import {
  SectionWrapper,
  AboutSection,
  Address,
  CompanyInfo,
  ContentWrapper,
  Logo,
  LogoContainer,
  Sallary,
  TextContent,
  Title,
  SectionTitle,
  AboutContent,
  CompanyDescription,
  Description,
  Skill,
  SkillSection,
  Skills,
  Desc,
  DescSection,
  Section,
  Responsibilities,
  Responsibility,
  ResponsibilitySection,
  RequirementsSections,
} from "./Components";
import google_logo from "../../../images/google_logo.png";
function JobDescriptionSection() {
  return (
    <SectionWrapper>
      <ContentWrapper>
        <AboutSection>
          <SectionTitle>About This Role</SectionTitle>
          <AboutContent>
            <CompanyInfo>
              <LogoContainer>
                <Logo src={google_logo} alt="logo" />
              </LogoContainer>
              <TextContent>
                <Title>
                  Senior Backend Developer {"("}Full Time{")"}
                </Title>
                <Address>Kathmandu, Nepal</Address>
                <Sallary>Rs.550000 + Benefits</Sallary>
              </TextContent>
            </CompanyInfo>
            <CompanyDescription>
              <Description>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Description>
            </CompanyDescription>
          </AboutContent>
        </AboutSection>

        <SkillSection>
          <SectionTitle>Skills</SectionTitle>
          <Skills>
            <Skill>Python</Skill>
            <Skill>Django</Skill>
            <Skill>Java</Skill>
            <Skill>JavaScript</Skill>
            <Skill>Python</Skill>
            <Skill>Django</Skill>
            <Skill>Java</Skill>
            <Skill>JavaScript</Skill>
          </Skills>
        </SkillSection>
        <DescSection>
          <SectionTitle>Description</SectionTitle>
          <Desc>
            <Section>
              Are you passionate about developing state-of-the-art digital
              solutions? Do you want to work with the award-winning Development
              team? We are looking for a skilled mid-level Python/Django
              Developer to join our development team.
            </Section>

            <Section>
              At Verisk you can build an exciting career with meaningful work;
              create positive and lasting impact on business; and find the
              support, coaching, and training you need to advance your
              career. We have received the Great Place to Work® Certification
              for the fifth consecutive year. We’ve been recognized by Forbes as
              a World’s Best Employer and a Best Employer for Women, testaments
              to our culture of engagement and the value we place on an
              inclusive and diverse workforce. Verisk’s Statement on Racial
              Equity and Diversity supports our commitment to these values and
              affecting positive and lasting change in the communities where we
              live and work.
            </Section>

            <Section>
              Unsolicited resumes sent to Verisk, including unsolicited resumes
              sent to a Verisk business mailing address, fax machine or email
              address, or directly to Verisk employees, will be considered
              Verisk property. Verisk will NOT pay a fee for any placement
              resulting from the receipt of an unsolicited resume.
            </Section>
          </Desc>
        </DescSection>
        <ResponsibilitySection>
          <SectionTitle>Key Responsibilities</SectionTitle>
          <Responsibilities>
            <Responsibility>
              Writing effective and scalable Python codes
            </Responsibility>
            <Responsibility>
              Designing and implementing robust applications
            </Responsibility>
            <Responsibility>
              Debugging applications to ensure low-latency and high-availability
            </Responsibility>
            <Responsibility>
              Integrating user-facing elements with server-side logic
            </Responsibility>
            <Responsibility>
              Implementing security and data protection
            </Responsibility>
          </Responsibilities>
        </ResponsibilitySection>
        <RequirementsSections>
          <SectionTitle>Key Requirements</SectionTitle>
          <Responsibilities>
            <Responsibility>
              Degree in Computer Science, Engineering or a related field
            </Responsibility>
            <Responsibility>
              You have prior experience as a Python Developer
            </Responsibility>
            <Responsibility>
              Good knowledge Django, Flask or similar Python frameworks
            </Responsibility>
            <Responsibility>
              Familiarity with front-end technologies, such as JavaScript,
              HTML5, and CSS3
            </Responsibility>
            <Responsibility>
              Knowledge of ORM (Object Relational Mapper)
            </Responsibility>
          </Responsibilities>
        </RequirementsSections>
      </ContentWrapper>
    </SectionWrapper>
  );
}

export default JobDescriptionSection;
