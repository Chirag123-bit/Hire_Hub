import axios from "axios";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import LoadingImage from "../../../images/loading.gif";
import { getCompanyJobs } from "../../../utils/APIRoutes";
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
import { JobType } from "../../ProfileComponents/InformationComponent/Component";
import { JobTitle } from "../Dashboard/Components";
import "./styles.css";

function Careers({ isOpen, user, company }) {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    axios
      .get(getCompanyJobs, {
        params: {
          user: company._id,
        },
      })
      .then((result) => {
        console.log(result.data);
        setJobs(result.data.data);
        setIsLoading(false);
      });
  }, []);
  return (
    <motion.div className="CareerContainer">
      <motion.div
        className="CareerContentHolder"
        animate={{
          width: isOpen ? "98%" : "95%",

          transition: { duration: 0.5, type: "spring", damping: 10 },
        }}
      >
        {isLoading ? (
          <img src={LoadingImage} alt="loading" style={{ width: "100%" }} />
        ) : (
          <>
            <div className="CareerHead">
              <div className="logo-container mb-2">
                <img src={company.avatarImage} alt="ss" />
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
                  <p>{company.desc}</p>
                </div>
              </div>
              <div>
                <h4>Current Openings</h4>
                <JobCardsHoler style={{ width: "100%" }}>
                  {jobs.map((job) => (
                    <JobCard
                      style={{ backgroundColor: "#242933" }}
                      className="career-card"
                    >
                      <CompanyInfoHoler
                        style={{
                          backgroundColor: "#242933",
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
                        <JobType style={{ backgroundColor: "#242933" }}>
                          Full Time
                        </JobType>
                      </JobTitleHolder>
                      <JobDescriptionBox>
                        <JobDescription>{job.description}</JobDescription>
                      </JobDescriptionBox>
                      <JobFooter>
                        <Sallary>
                          ${job.sallary}
                          <Muted>/month</Muted>
                        </Sallary>
                        <ApplyButton style={{ backgroundColor: "#242933" }}>
                          Edit
                        </ApplyButton>
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
              <p style={{ color: "white" }} className="text-capitalize">
                {company.sector} based company
              </p>
              <p style={{ color: "white" }}> &copy; {company.name}, 2022</p>
            </div>
          </>
        )}
      </motion.div>
    </motion.div>
  );
}

export default Careers;
