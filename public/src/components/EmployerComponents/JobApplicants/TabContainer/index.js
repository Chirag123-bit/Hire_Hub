import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CandidateOverview from "../Candidates/CandidatesOverview";
import Overview from "../Overview";
import { Applicants } from "../Overview/Constants";
import "./style.css";
const TabsComponent = ({ isOpen, selectedJob }) => {
  return (
    <Tabs style={{ backgroundColor: "#262b34" }}>
      <TabList>
        <Tab>Overview</Tab>
        <Tab>Candidates</Tab>
      </TabList>

      <TabPanel className="OverviewContainerClass">
        <Overview Applicants={Applicants} selectedJob={selectedJob} />
      </TabPanel>
      <TabPanel>
        <CandidateOverview Applicants={Applicants} selectedJob={selectedJob} />
      </TabPanel>
    </Tabs>
  );
};
export default TabsComponent;
