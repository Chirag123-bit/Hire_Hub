import React from "react";
import { JobApplicantsContainer } from "./Components";
import TabsComponent from "./TabContainer";

const tabContent = [
  {
    title: "Overview",
    content: "<h1> Hello </h1>",
  },
  {
    title: "Candidates",
    content: "<h1> Hello Candidates </h1>",
  },
];

function JobApplicants() {
  return (
    <JobApplicantsContainer className="full-height">
      <TabsComponent />
    </JobApplicantsContainer>
  );
}

export default JobApplicants;
