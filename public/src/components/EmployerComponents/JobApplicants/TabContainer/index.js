import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CandidateOverview from "../Candidates/CandidatesOverview";
import Overview from "../Overview";
import { Applicants } from "../Overview/Constants";
import "./style.css";
const TabsComponent = ({ isOpen }) => {
  return (
    <Tabs style={{ backgroundColor: "#262b34" }}>
      <TabList>
        <Tab>Overview</Tab>
        <Tab>Candidates</Tab>
      </TabList>

      <TabPanel className="OverviewContainerClass">
        <Overview Applicants={Applicants} />
      </TabPanel>
      <TabPanel>
        <CandidateOverview Applicants={Applicants} />
      </TabPanel>
    </Tabs>
  );
};
export default TabsComponent;
