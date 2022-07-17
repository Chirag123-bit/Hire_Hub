import { FcBrokenLink } from "react-icons/fc";
import { Link } from "react-router-dom";
import {
  ApplyButton,
  CompanyInfoHoler,
  JobCard,
  JobDescription,
  JobDescriptionBox,
  JobFooter,
  JobTitle,
  JobTitleHolder,
  JobType,
  Muted,
  Sallary,
} from "./listElements";

function Job(item) {
  item = item.item;
  // console.log(item.company.avatarImage);
  return (
    <JobCard id={item._id}>
      <div style={{ zIndex: 1 }}>
        <Link to={`/applicant/job/${item._id}`}>
          <CompanyInfoHoler>
            <div className="box1">
              <FcBrokenLink style={{ fontSize: "1.5rem" }} />
            </div>
            <div className="box2">
              <h6>{item.company.name}</h6>
              <p>
                {item.company.region}, {item.company.country}
              </p>
            </div>
          </CompanyInfoHoler>
          <JobTitleHolder>
            <JobTitle>{item.title}</JobTitle>
            <JobType>{item.type}</JobType>
          </JobTitleHolder>
          <JobDescriptionBox>
            <JobDescription>{item.description}</JobDescription>
          </JobDescriptionBox>
          <JobFooter>
            <Sallary>
              Rs.{item.sallary}
              <Muted>/month</Muted>
            </Sallary>
            <ApplyButton>Apply Now</ApplyButton>
          </JobFooter>
        </Link>
      </div>
    </JobCard>
  );
}

export default Job;
