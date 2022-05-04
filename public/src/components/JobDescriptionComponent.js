import React from "react";
import JobInfoSection from "./JobDescriptionComponents/UpperSectionComponent";
import JobDescriptionSection from "./JobDescriptionComponents/LowerSectionComponent";
import Sidebar from "./JobDescriptionComponents/SidebarComponent";
import { SideWrapper } from "./JobDescriptionComponents/LowerSectionComponent/Components";

function JobDescription() {
  return (
    <div id="job-description">
      <JobInfoSection />
      <SideWrapper>
        <JobDescriptionSection />
        <Sidebar />
      </SideWrapper>
    </div>
  );
}

export default JobDescription;
