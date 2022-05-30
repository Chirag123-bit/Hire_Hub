import Moment from "moment";
import React from "react";
import { JobApplicantsContainer } from "./Components";
import TabsComponent from "./TabContainer";

const JobApplicants = ({ isOpen, selectedJob }) => {
  return (
    <JobApplicantsContainer className="min-height" isOpen={isOpen}>
      <h4 class="mb-2" style={{ color: "#CCCCCC", textAlign: "center" }}>
        Overview For {selectedJob.job.title}
      </h4>
      <h6 style={{ color: "#CCCCCC" }}>
        Last Application Date:{" "}
        {Moment(selectedJob.job.closeDate).format("MMM Do YYYY")}{" "}
      </h6>
      <h6 style={{ color: "#CCCCCC" }}>
        Total Applicants: {selectedJob.job.applicants.length}
      </h6>
      <h6 style={{ color: "#CCCCCC" }}>
        Job Status: {selectedJob.job.isActive ? "Active" : "Inactive"}
      </h6>

      <TabsComponent selectedJob={selectedJob} />
    </JobApplicantsContainer>
  );
};

export default JobApplicants;
