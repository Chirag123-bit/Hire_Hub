import React from "react";
import {
  ContentHolder,
  Content,
  DescriptionTitle,
  Summary,
  SummaryContainer,
  Address,
  Company,
  Date,
  JobTitle,
  JobType,
  Listing,
  Location,
  TitleListing,
  TypeDateListing,
} from "./Component";
import { IoSchoolOutline, IoLocationSharp } from "react-icons/io5";
import { BsCalendar2Date } from "react-icons/bs";
import { FaBus } from "react-icons/fa";

function CandidateDescription() {
  return (
    <ContentHolder>
      <Content>
        <SummaryContainer>
          <DescriptionTitle>Professional Summary</DescriptionTitle>
          <Summary>
            On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled and demoralized by the charms of
            pleasure of the moment, so blinded by desire, that they cannot
            foresee the pain and trouble that are bound to ensue; and equal
            blame belongs to those who fail in their duty through weakness of
            will, which is the same as saying through shrinking from toil and
            pain. These cases are perfectly simple and easy to distinguish. In a
            free hour, when our power of choice is untrammelled and when nothing
            prevents our being able to do what we like best, every pleasure is
            to be welcomed and every pain avoided. But in certain circumstances
            and owing to the claims of duty or the obligations of business it
            will frequently occur that pleasures have to be repudiated and
            annoyances accepted. The wise man therefore always holds in these
            matters to this principle of selection: he rejects pleasures to
          </Summary>
        </SummaryContainer>

        <SummaryContainer>
          <DescriptionTitle>Work Experience</DescriptionTitle>
          <Listing>
            <TitleListing>
              <JobTitle>Backend Developer</JobTitle>
              <Location>
                <Company>
                  <FaBus /> Apple Inc
                </Company>
                <Address>
                  <IoLocationSharp /> Los Angeles
                </Address>
              </Location>
            </TitleListing>
            <TypeDateListing>
              <JobType>Full Time</JobType>
              <Date>
                <BsCalendar2Date /> April 2020 - May 2022
              </Date>
            </TypeDateListing>
          </Listing>
          <Listing>
            <TitleListing>
              <JobTitle>Backend Developer</JobTitle>
              <Location>
                <Company>
                  <FaBus /> Apple Inc
                </Company>
                <Address>
                  <IoLocationSharp /> Los Angeles
                </Address>
              </Location>
            </TitleListing>
            <TypeDateListing>
              <JobType>Full Time</JobType>
              <Date>
                <BsCalendar2Date /> April 2020 - May 2022
              </Date>
            </TypeDateListing>
          </Listing>
          <Listing>
            <TitleListing>
              <JobTitle>Backend Developer</JobTitle>
              <Location>
                <Company>
                  <FaBus /> Apple Inc
                </Company>
                <Address>
                  <IoLocationSharp /> Los Angeles
                </Address>
              </Location>
            </TitleListing>
            <TypeDateListing>
              <JobType>Full Time</JobType>
              <Date>
                <BsCalendar2Date /> April 2020 - May 2022
              </Date>
            </TypeDateListing>
          </Listing>
        </SummaryContainer>

        <SummaryContainer>
          <DescriptionTitle>Education</DescriptionTitle>
          <Listing>
            <TitleListing>
              <JobTitle>Masters in Information Technology</JobTitle>
              <Location>
                <Company>
                  <IoSchoolOutline /> Massechusets Instityue of Technology
                </Company>
              </Location>
            </TitleListing>
            <TypeDateListing>
              <Date>
                <BsCalendar2Date /> April 2020 - May 2022
              </Date>
            </TypeDateListing>
          </Listing>
          <Listing>
            <TitleListing>
              <JobTitle>Masters in Information Technology</JobTitle>
              <Location>
                <Company>
                  <IoSchoolOutline /> Massechusets Instityue of Technology
                </Company>
              </Location>
            </TitleListing>
            <TypeDateListing>
              <Date>
                <BsCalendar2Date /> April 2020 - May 2022
              </Date>
            </TypeDateListing>
          </Listing>
          <Listing>
            <TitleListing>
              <JobTitle>Masters in Information Technology</JobTitle>
              <Location>
                <Company>
                  <IoSchoolOutline /> Massechusets Instityue of Technology
                </Company>
              </Location>
            </TitleListing>
            <TypeDateListing>
              <Date>
                <BsCalendar2Date /> April 2020 - May 2022
              </Date>
            </TypeDateListing>
          </Listing>
        </SummaryContainer>
      </Content>
    </ContentHolder>
  );
}

export default CandidateDescription;
