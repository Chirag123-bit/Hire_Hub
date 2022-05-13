import React from "react";
import { JobApplicantsContainer } from "./Components";
import TabsComponent from "./TabContainer";

function JobApplicants({ isOpen }) {
  return (
    <JobApplicantsContainer className="min-height" isOpen={isOpen}>
      <h4 class="mb-2" style={{ color: "#CCCCCC" }}>
        Overview - Backend Developer
      </h4>
      <TabsComponent />
    </JobApplicantsContainer>
  );
}

export default JobApplicants;
