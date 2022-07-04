import axios from "axios";
import { useEffect, useState } from "react";
import { FcBrokenLink } from "react-icons/fc";
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
                onClick={(event) =>
                  (window.location.href = `/applicant/job/${job._id}`)
                }
              >
                <div style={{ zIndex: 1 }}>
                  <CompanyInfoHoler>
                    <div className="box1">
                      <FcBrokenLink style={{ fontSize: "1.5rem" }} />
                    </div>
                    <div className="box2">
                      <h6>{job.company.name}</h6>
                      <p>
                        {job.company.region}, {job.company.country}
                      </p>
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
