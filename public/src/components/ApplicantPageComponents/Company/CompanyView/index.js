import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingImage from "../../../../images/loading.gif";
import { getCompanyDetails } from "../../../../utils/APIRoutes";
import { JobTitle } from "../../../EmployerComponents/Dashboard/Components";
import { JobType } from "../../../ProfileComponents/InformationComponent/Component";
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
} from "../../Home/SeekerJob/JobElements";
import "./styles.css";

function Careers() {
  const [isLoading, setIsLoading] = useState(true);
  const [company, setCompany] = useState([]);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    axios.get(getCompanyDetails, { params: { id: id } }).then((result) => {
      setCompany(result.data.data);
      setIsLoading(false);
    });
  }, []);
  return (
    <div
      className="CareerContainer"
      style={{ width: "100% !important", marginLeft: "0 " }}
    >
      <div
        className="CareerContentHolder"
        style={{ marginLeft: "0 !important" }}
      >
        {isLoading ? (
          <img src={LoadingImage} alt="loading" style={{ width: "100%" }} />
        ) : (
          <>
            <div className="CareerHead">
              <div className="logo-container mb-2">
                <img src={company.avatarImage} alt="ss" />
              </div>
              <h3>{company.name}</h3>
              <h6>
                {company.region}, {company.country}
              </h6>
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
                  <p>{company.desc}</p>
                </div>
              </div>
              <div>
                <h4>Current Openings</h4>
                <JobCardsHoler style={{ width: "100%" }}>
                  {company.jobs.map((job) => (
                    <JobCard
                      style={{ width: "25%" }}
                      className="career-card"
                      onClick={(event) =>
                        (window.location.href = `/applicant/job/${job._id}`)
                      }
                    >
                      <CompanyInfoHoler
                        style={{
                          alignItems: "center",
                        }}
                      >
                        <div className="box1 ">
                          <img src={company.avatarImage} alt="ss" />

                          {/* <FcBrokenLink style={{ fontSize: "1.5rem" }} /> */}
                        </div>
                        <div className="box2">
                          <h6>{company.name}</h6>
                          <p>
                            {company.region}, {company.country}
                          </p>
                        </div>
                      </CompanyInfoHoler>
                      <JobTitleHolder>
                        <JobTitle>{job.title}</JobTitle>
                        <JobType style={{ width: "70%", margin: "auto" }}>
                          Full Time
                        </JobType>
                      </JobTitleHolder>
                      <JobDescriptionBox style={{ width: "100%" }}>
                        <JobDescription>{job.description}</JobDescription>
                      </JobDescriptionBox>
                      <JobFooter>
                        <Sallary>
                          ${job.sallary}
                          <Muted>/month</Muted>
                        </Sallary>
                        <ApplyButton>View</ApplyButton>
                      </JobFooter>
                    </JobCard>
                  ))}
                </JobCardsHoler>
              </div>
            </div>
            <div className="career-footer">
              <div className="logo-container mb-2">
                <img src={company.avatarImage} alt="ss" />
              </div>
              <p className="text-capitalize">{company.sector} based company</p>
              <p> &copy; {company.name}, 2022</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Careers;
