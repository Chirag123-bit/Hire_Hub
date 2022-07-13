import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getJob } from "../utils/APIRoutes";
import JobDescriptionSection from "./JobDescriptionComponents/LowerSectionComponent";
import { SideWrapper } from "./JobDescriptionComponents/LowerSectionComponent/Components";
import Sidebar from "./JobDescriptionComponents/SidebarComponent";
import JobInfoSection from "./JobDescriptionComponents/UpperSectionComponent";

function JobDescription() {
  const [isLoading, setIsLoading] = useState(true);
  const [job, setJob] = useState([]);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    axios.get(getJob, { params: { id: id } }).then((result) => {
      setJob(result.data.data);
      setIsLoading(false);
      console.log(job);
    });
  }, []);
  return (
    <>
      <JobInfoSection job={job} isLoading={isLoading} />
      <SideWrapper>
        <JobDescriptionSection job={job} isLoading={isLoading} />
        <Sidebar job={job} isLoading={isLoading} />
      </SideWrapper>
    </>
  );
}

export default JobDescription;
