import React from "react";
import JobInfoSection from "./JobDescriptionComponents/UpperSectionComponent";
import JobDescriptionSection from "./JobDescriptionComponents/LowerSectionComponent";

function JobDescription() {
  return (
    <div id="job-description">
      <JobInfoSection />
      <JobDescriptionSection />
    </div>
  );
}

export default JobDescription;
