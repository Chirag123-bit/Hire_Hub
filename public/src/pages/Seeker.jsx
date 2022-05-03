import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import SeekerCategory from "../components/SeekerCategory";
import SeekerNav from "../components/SeekerNav";
import Sidebar from "../components/Sidebar";
import ApplicantHome from "../components/SeekerHome";
import SeekerCompany from "../components/SeekerCompany";
import SeekerJobs from "../components/SeekerJobComponent/SeekerJobs";
import Profile from "../components/ProfileComponent";
import JobDescription from "../components/JobDescriptionComponent";
// import SeekerJobs from "../components/SeekerJobComponent/SeekerJobs";

export default function Seeker() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <SeekerNav toggle={toggle} />

      <Routes>
        <Route path="/home" element={<ApplicantHome id="home" />} />
        <Route path="/category" element={<SeekerCategory />} />
        <Route path="/company" element={<SeekerCompany />} />
        <Route path="/jobs" element={<SeekerJobs />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/job" element={<JobDescription />} />
      </Routes>

      <Footer />
    </>
  );
}
