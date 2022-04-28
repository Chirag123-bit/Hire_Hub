import React from "react";
import { FcBrokenLink } from "react-icons/fc";
import {
  JobCard,
  ApplyButton,
  CompanyInfoHoler,
  JobDescription,
  JobDescriptionBox,
  JobFooter,
  JobTitle,
  JobTitleHolder,
  JobType,
  Muted,
  Sallary,
} from "./listElements";

function Job({
  item: {
    company_name,
    company_region,
    company_country,
    title,
    type,
    description,
    sallary,
    id,
  },
}) {
  return (
    <JobCard id={id}>
      <CompanyInfoHoler>
        <div className="box1">
          <FcBrokenLink style={{ fontSize: "1.5rem" }} />
        </div>
        <div className="box2">
          <h6>{company_name}</h6>
          <p>
            {company_region}, {company_country}
          </p>
        </div>
      </CompanyInfoHoler>
      <JobTitleHolder>
        <JobTitle>{title}</JobTitle>
        <JobType>{type}</JobType>
      </JobTitleHolder>
      <JobDescriptionBox>
        <JobDescription>{description}</JobDescription>
      </JobDescriptionBox>
      <JobFooter>
        <Sallary>
          Rs.{sallary}
          <Muted>/month</Muted>
        </Sallary>
        <ApplyButton>Apply Now</ApplyButton>
      </JobFooter>
    </JobCard>
  );
}

export default Job;
