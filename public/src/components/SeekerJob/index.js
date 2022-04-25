import React from "react";
import {
  JobsContainer,
  ContentHolder,
  TitleHolder,
  CompanyInfoHoler,
  JobCard,
  JobCardsHoler,
  JobTitle,
  JobTitleHolder,
  JobType,
  JobDescription,
  JobDescriptionBox,
  ApplyButton,
  JobFooter,
  Muted,
  Sallary,
} from "./JobElements";
import { Slogan, ColoredSlogan } from "../SeekerHero/seekerHeroElements";
import { SiMicrosoft } from "react-icons/si";
import ParticleBackground from "./ParticleBackground";
import "./style.css";

function SeekerJob() {
  return (
    <JobsContainer>
      <ParticleBackground />
      <ContentHolder>
        <TitleHolder>
          <Slogan>
            <ColoredSlogan>Featured</ColoredSlogan> Job Circulators
          </Slogan>
        </TitleHolder>
        <JobCardsHoler>
          <JobCard>
            <CompanyInfoHoler>
              <div className="box1">
                <SiMicrosoft style={{ fontSize: "1.5rem" }} />
              </div>
              <div className="box2">
                <h6>Microsoft</h6>
                <p>Kathmandu, Nepal</p>
              </div>
            </CompanyInfoHoler>
            <JobTitleHolder>
              <JobTitle>Backend Developer</JobTitle>
              <JobType>Full Time</JobType>
            </JobTitleHolder>
            <JobDescriptionBox>
              <JobDescription>
                You will be expected to manage and lead a fleet of developers in
                order to achieve the company goals.
              </JobDescription>
            </JobDescriptionBox>
            <JobFooter>
              <Sallary>
                $2500<Muted>/month</Muted>
              </Sallary>
              <ApplyButton>Apply Now</ApplyButton>
            </JobFooter>
          </JobCard>
          <JobCard>
            <CompanyInfoHoler>
              <div className="box1">
                <SiMicrosoft style={{ fontSize: "1.5rem" }} />
              </div>
              <div className="box2">
                <h6>Microsoft</h6>
                <p>Kathmandu, Nepal</p>
              </div>
            </CompanyInfoHoler>
            <JobTitleHolder>
              <JobTitle>Backend Developer</JobTitle>
              <JobType>Full Time</JobType>
            </JobTitleHolder>
            <JobDescriptionBox>
              <JobDescription>
                You will be expected to manage and lead a fleet of developers in
                order to achieve the company goals.
              </JobDescription>
            </JobDescriptionBox>
            <JobFooter>
              <Sallary>
                $2500<Muted>/month</Muted>
              </Sallary>
              <ApplyButton>Apply Now</ApplyButton>
            </JobFooter>
          </JobCard>
          <JobCard>
            <CompanyInfoHoler>
              <div className="box1">
                <SiMicrosoft style={{ fontSize: "1.5rem" }} />
              </div>
              <div className="box2">
                <h6>Microsoft</h6>
                <p>Kathmandu, Nepal</p>
              </div>
            </CompanyInfoHoler>
            <JobTitleHolder>
              <JobTitle>Backend Developer</JobTitle>
              <JobType>Full Time</JobType>
            </JobTitleHolder>
            <JobDescriptionBox>
              <JobDescription>
                You will be expected to manage and lead a fleet of developers in
                order to achieve the company goals.
              </JobDescription>
            </JobDescriptionBox>
            <JobFooter>
              <Sallary>
                $2500<Muted>/month</Muted>
              </Sallary>
              <ApplyButton>Apply Now</ApplyButton>
            </JobFooter>
          </JobCard>
          <JobCard>
            <CompanyInfoHoler>
              <div className="box1">
                <SiMicrosoft style={{ fontSize: "1.5rem" }} />
              </div>
              <div className="box2">
                <h6>Microsoft</h6>
                <p>Kathmandu, Nepal</p>
              </div>
            </CompanyInfoHoler>
            <JobTitleHolder>
              <JobTitle>Backend Developer</JobTitle>
              <JobType>Full Time</JobType>
            </JobTitleHolder>
            <JobDescriptionBox>
              <JobDescription>
                You will be expected to manage and lead a fleet of developers in
                order to achieve the company goals.
              </JobDescription>
            </JobDescriptionBox>
            <JobFooter>
              <Sallary>
                $2500<Muted>/month</Muted>
              </Sallary>
              <ApplyButton>Apply Now</ApplyButton>
            </JobFooter>
          </JobCard>
          <JobCard>
            <CompanyInfoHoler>
              <div className="box1">
                <SiMicrosoft style={{ fontSize: "1.5rem" }} />
              </div>
              <div className="box2">
                <h6>Microsoft</h6>
                <p>Kathmandu, Nepal</p>
              </div>
            </CompanyInfoHoler>
            <JobTitleHolder>
              <JobTitle>Backend Developer</JobTitle>
              <JobType>Full Time</JobType>
            </JobTitleHolder>
            <JobDescriptionBox>
              <JobDescription>
                You will be expected to manage and lead a fleet of developers in
                order to achieve the company goals.
              </JobDescription>
            </JobDescriptionBox>
            <JobFooter>
              <Sallary>
                $2500<Muted>/month</Muted>
              </Sallary>
              <ApplyButton>Apply Now</ApplyButton>
            </JobFooter>
          </JobCard>
          <JobCard>
            <CompanyInfoHoler>
              <div className="box1">
                <SiMicrosoft style={{ fontSize: "1.5rem" }} />
              </div>
              <div className="box2">
                <h6>Microsoft</h6>
                <p>Kathmandu, Nepal</p>
              </div>
            </CompanyInfoHoler>
            <JobTitleHolder>
              <JobTitle>Backend Developer</JobTitle>
              <JobType>Full Time</JobType>
            </JobTitleHolder>
            <JobDescriptionBox>
              <JobDescription>
                You will be expected to manage and lead a fleet of developers in
                order to achieve the company goals.
              </JobDescription>
            </JobDescriptionBox>
            <JobFooter>
              <Sallary>
                $2500<Muted>/month</Muted>
              </Sallary>
              <ApplyButton>Apply Now</ApplyButton>
            </JobFooter>
          </JobCard>
        </JobCardsHoler>
      </ContentHolder>
    </JobsContainer>
  );
}

export default SeekerJob;
