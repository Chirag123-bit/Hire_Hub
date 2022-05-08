import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Overview from "../Overview";
import "./style.css";
const TabsComponent = () => {
  return (
    <Tabs style={{ backgroundColor: "#262b34" }}>
      <TabList>
        <Tab>Overview</Tab>
        <Tab>Candidates</Tab>
      </TabList>

      <TabPanel className="OverviewContainerClass">
        <Overview />
      </TabPanel>
      <TabPanel>
        <h2>Any content 2</h2>
      </TabPanel>
    </Tabs>
  );
};
export default TabsComponent;
