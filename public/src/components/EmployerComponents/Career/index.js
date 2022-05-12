import React from "react";
import { company } from "./constants";
import "./styles.css";
import Image from "../../../images/google_logo.png";
import {
  ApplyButton,
  CompanyInfoHoler,
  JobCard,
  JobCardsHoler,
  JobDescription,
  JobDescriptionBox,
  JobFooter,
  JobTitleHolder,
  Muted,
  Sallary,
} from "../../ApplicantPageComponents/Home/SeekerJob/JobElements";
import { FcBrokenLink } from "react-icons/fc";
import { JobTitle } from "../Dashboard/Components";
import { JobType } from "../../ProfileComponents/InformationComponent/Component";

function Careers({ isOpen }) {
  return (
    <div className="CareerContainer">
      <div className="CareerContentHolder">
        <div className="CareerHead">
          <div className="logo-container mb-2">
            <img src={Image} alt="ss" />
          </div>
          <h3 style={{ color: "white" }}>{company.name}</h3>
          <h5 style={{ color: "white" }}>{company.location}</h5>
        </div>
        <div className="CareerBody">
          <div>
            <h4>About Us</h4>
            <div className="CareerAbout">
              <p>{company.about}</p>
            </div>
          </div>
          <div>
            <h4>Our Services</h4>
            <div className="CareerAbout">
              <p>{company.services}</p>
            </div>
          </div>
          <div>
            <h4>Current Openings</h4>
            <JobCardsHoler>
              <JobCard style={{ backgroundColor: "#242933" }}>
                <CompanyInfoHoler style={{ backgroundColor: "#242933" }}>
                  <div className="box1">
                    <FcBrokenLink style={{ fontSize: "1.5rem" }} />
                  </div>
                  <div className="box2">
                    <h6>Microsoft</h6>
                    <p>Kathmandu, Nepal</p>
                  </div>
                </CompanyInfoHoler>
                <JobTitleHolder>
                  <JobTitle>Backend Developer</JobTitle>
                  <JobType style={{ backgroundColor: "#242933" }}>
                    Full Time
                  </JobType>
                </JobTitleHolder>
                <JobDescriptionBox>
                  <JobDescription>
                    You will be expected to manage and lead a fleet of
                    developers in order to achieve the company goals.
                  </JobDescription>
                </JobDescriptionBox>
                <JobFooter>
                  <Sallary>
                    $2500<Muted>/month</Muted>
                  </Sallary>
                  <ApplyButton style={{ backgroundColor: "#242933" }}>
                    Edit
                  </ApplyButton>
                </JobFooter>
              </JobCard>
              <JobCard style={{ backgroundColor: "#242933" }}>
                <CompanyInfoHoler style={{ backgroundColor: "#242933" }}>
                  <div className="box1">
                    <FcBrokenLink style={{ fontSize: "1.5rem" }} />
                  </div>
                  <div className="box2">
                    <h6>Microsoft</h6>
                    <p>Kathmandu, Nepal</p>
                  </div>
                </CompanyInfoHoler>
                <JobTitleHolder>
                  <JobTitle>Backend Developer</JobTitle>
                  <JobType style={{ backgroundColor: "#242933" }}>
                    Full Time
                  </JobType>
                </JobTitleHolder>
                <JobDescriptionBox>
                  <JobDescription>
                    You will be expected to manage and lead a fleet of
                    developers in order to achieve the company goals.
                  </JobDescription>
                </JobDescriptionBox>
                <JobFooter>
                  <Sallary>
                    $2500<Muted>/month</Muted>
                  </Sallary>
                  <ApplyButton style={{ backgroundColor: "#242933" }}>
                    Edit
                  </ApplyButton>
                </JobFooter>
              </JobCard>
              <JobCard style={{ backgroundColor: "#242933" }}>
                <CompanyInfoHoler style={{ backgroundColor: "#242933" }}>
                  <div className="box1">
                    <FcBrokenLink style={{ fontSize: "1.5rem" }} />
                  </div>
                  <div className="box2">
                    <h6>Microsoft</h6>
                    <p>Kathmandu, Nepal</p>
                  </div>
                </CompanyInfoHoler>
                <JobTitleHolder>
                  <JobTitle>Backend Developer</JobTitle>
                  <JobType style={{ backgroundColor: "#242933" }}>
                    Full Time
                  </JobType>
                </JobTitleHolder>
                <JobDescriptionBox>
                  <JobDescription>
                    You will be expected to manage and lead a fleet of
                    developers in order to achieve the company goals.
                  </JobDescription>
                </JobDescriptionBox>
                <JobFooter>
                  <Sallary>
                    $2500<Muted>/month</Muted>
                  </Sallary>
                  <ApplyButton style={{ backgroundColor: "#242933" }}>
                    Edit
                  </ApplyButton>
                </JobFooter>
              </JobCard>
            </JobCardsHoler>
          </div>
        </div>
        <div className="career-footer">
          <div className="logo-container mb-2">
            <img src={Image} alt="ss" />
          </div>
          <p style={{ color: "white" }} className="text-capitalize">
            {company.sector} based company
          </p>
          <p style={{ color: "white" }}> &copy; {company.name}, 2022</p>
        </div>
      </div>
    </div>
  );
}

export default Careers;
