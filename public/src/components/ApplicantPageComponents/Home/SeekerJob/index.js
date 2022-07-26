import axios from "axios";
import { useEffect, useState } from "react";
import { FcBrokenLink } from "react-icons/fc";
import { Link } from "react-router-dom";
import { getAllJobs } from "../../../../utils/APIRoutes";
import { ColoredSlogan, Slogan } from "../SeekerHero/seekerHeroElements";
import {
  ApplyButton,
  CompanyInfoHoler,
  ContentHolder,
  JobCard,
  JobCardsHoler,
  JobDescription,
  JobDescriptionBox,
  JobFooter,
  JobsContainer,
  JobTitle,
  JobTitleHolder,
  JobType,
  Muted,
  Sallary,
  TitleHolder,
} from "./JobElements";
import "./style.css";

function SeekerJob() {
  var [ready, setIsReady] = useState(false);
  var [jobs, setJobs] = useState([]);
  useEffect(() => {
    axios.get(getAllJobs).then((result) => {
      jobs = result.data.data;
      setJobs(jobs);
      console.log(jobs);
      setIsReady(true);
    });
  }, []);
  return (
    <JobsContainer>
      {/* <ParticleBackground /> */}
      <ContentHolder>
        <TitleHolder>
          <Slogan>
            <ColoredSlogan>Featured</ColoredSlogan> Job Circulators
          </Slogan>
        </TitleHolder>
        <JobCardsHoler>
          {ready ? (
            jobs.map((job) => (
              <JobCard
              // onClick={(event) =>
              //   (window.location.href = )
              // }
              >
                <div style={{ zIndex: 1 }}>
                  <Link to={`/applicant/job/${job._id}`}>
                    <CompanyInfoHoler>
                      <div className="box1">
                        <FcBrokenLink style={{ fontSize: "1.5rem" }} />
                      </div>
                      <div className="box2">
                        <h6>
                          {/* {job.company.name ? "Company" : } */}
                          Google Inc
                        </h6>
                        <p>Kathmandu, Nepal</p>
                      </div>
                    </CompanyInfoHoler>
                    <JobTitleHolder>
                      <JobTitle>{job.title}</JobTitle>
                      <JobType>Full Time</JobType>
                    </JobTitleHolder>
                    <JobDescriptionBox>
                      <JobDescription>{job.description}</JobDescription>
                    </JobDescriptionBox>
                    <JobFooter>
                      <Sallary>
                        ${job.sallary}
                        <Muted>/month</Muted>
                      </Sallary>
                      <ApplyButton>Apply Now</ApplyButton>
                    </JobFooter>
                  </Link>
                </div>
              </JobCard>
            ))
          ) : (
            <div>Hello</div>
          )}
        </JobCardsHoler>
      </ContentHolder>
    </JobsContainer>
  );
}

export default SeekerJob;
