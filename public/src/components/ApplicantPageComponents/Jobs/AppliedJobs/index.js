import axios from "axios";
import { useEffect, useState } from "react";
import { FcBrokenLink } from "react-icons/fc";
import { getAppliedJobs } from "../../../../utils/APIRoutes";
import {
  ColoredSlogan,
  Slogan,
} from "../../Home/SeekerHero/seekerHeroElements";
import {
  ApplyButton,
  CompanyInfoHoler,
  ContentHolder,
  JobCard,
  JobCardsHoler,
  JobDescription,
  JobDescriptionBox,
  JobFooter,
  JobTitle,
  JobTitleHolder,
  JobType,
  Muted,
  Sallary,
  TitleHolder,
} from "./JobElements";

function AppliedJobs() {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [ready, setIsReady] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    axios.get(getAppliedJobs, config).then((result) => {
      setAppliedJobs(result.data.appliedJobs);
      setIsReady(true);
    });
  }, []);

  return (
    <div style={{ minHeight: "100vh" }}>
      <ContentHolder>
        <TitleHolder>
          <Slogan>
            <ColoredSlogan>Applied</ColoredSlogan> Jobs
          </Slogan>
        </TitleHolder>

        <JobCardsHoler>
          {ready ? (
            appliedJobs.map((job) => (
              <JobCard
                onClick={(event) =>
                  (window.location.href = `/applicant/job/${job.job._id}`)
                }
              >
                <div style={{ zIndex: 1 }}>
                  <CompanyInfoHoler>
                    <div className="box1">
                      <FcBrokenLink style={{ fontSize: "1.5rem" }} />
                    </div>
                    <div className="box2">
                      <h6>Google Inc</h6>
                      <p>California, USA</p>
                    </div>
                  </CompanyInfoHoler>
                  <JobTitleHolder>
                    <JobTitle>{job.job.title}</JobTitle>
                    <JobType>Full Time</JobType>
                  </JobTitleHolder>
                  <JobDescriptionBox>
                    <JobDescription>{job.job.description}</JobDescription>
                  </JobDescriptionBox>
                  <JobFooter>
                    <Sallary>
                      ${job.job.sallary}
                      <Muted>/month</Muted>
                    </Sallary>
                    <ApplyButton>View Status</ApplyButton>
                  </JobFooter>
                </div>
              </JobCard>
            ))
          ) : (
            <div style={{ margin: "auto" }}>
              <div className="loading-wrapper">
                <div className="loader">
                  <div className="loading-circle">s</div>
                </div>
              </div>
            </div>
          )}
        </JobCardsHoler>
      </ContentHolder>
    </div>
  );
}

export default AppliedJobs;
