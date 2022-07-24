import Moment from "moment";
import React from "react";
import { BsCalendar2Date } from "react-icons/bs";
import { FaBus } from "react-icons/fa";
import { IoLocationSharp, IoSchoolOutline } from "react-icons/io5";
import {
  Address,
  Company,
  Content,
  ContentHolder,
  Date,
  DescriptionTitle,
  JobTitle,
  JobType,
  Listing,
  Location,
  Summary,
  SummaryContainer,
  TitleListing,
  TypeDateListing,
} from "./Component";

function CandidateDescription({ user }) {
  return (
    <ContentHolder>
      <Content>
        <SummaryContainer>
          <DescriptionTitle>Professional Summary</DescriptionTitle>
          <Summary>
            {user.professional.summary == null
              ? "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to"
              : user.professional.summary}
          </Summary>
        </SummaryContainer>

        <SummaryContainer style={{ marginBottom: 0 }}>
          <DescriptionTitle>Work Experience</DescriptionTitle>
          {user.additional[0].experience.map((experience, index) => (
            <Listing key={index}>
              <TitleListing>
                <JobTitle>{experience.job_title}</JobTitle>
                <Location>
                  <Company>
                    <FaBus style={{ color: "423edd" }} /> {experience.company}
                  </Company>{" "}
                  <Address>
                    <IoLocationSharp style={{ color: "423edd" }} />{" "}
                    {experience.company_location}
                  </Address>
                </Location>
              </TitleListing>
              <TypeDateListing>
                <JobType>
                  {experience.work_type ? experience.work_type : "Part Time"}
                </JobType>
                <Date>
                  <BsCalendar2Date style={{ color: "423edd" }} />
                  {Moment(experience.startDate).format("MMM YYYY")} -{" "}
                  {Moment(experience.endDate).format("MMM YYYY")}
                </Date>
              </TypeDateListing>
            </Listing>
          ))}
        </SummaryContainer>

        <SummaryContainer style={{ marginTop: 0 }}>
          <DescriptionTitle>Education</DescriptionTitle>
          {user.additional[0].education.map((education, index) => (
            <Listing>
              <TitleListing>
                <JobTitle>{education.degree}</JobTitle>
                <Location>
                  <Company>
                    <IoSchoolOutline style={{ color: "423edd" }} />{" "}
                    {education.college}
                  </Company>
                </Location>
              </TitleListing>
              <TypeDateListing>
                <Date>
                  <BsCalendar2Date style={{ color: "423edd" }} />{" "}
                  {Moment(education.startDate).format("MMM YYYY")} -{" "}
                  {Moment(education.endDate).format("MMM YYYY")}
                </Date>
              </TypeDateListing>
            </Listing>
          ))}
        </SummaryContainer>
      </Content>
    </ContentHolder>
  );
}

export default CandidateDescription;
