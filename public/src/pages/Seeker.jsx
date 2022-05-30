import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import SeekerNav from "../components/ApplicantPageComponents/Common/SeekerNav";
import Careers from "../components/ApplicantPageComponents/Company/CompanyView";
import SeekerJobs from "../components/ApplicantPageComponents/Jobs/SeekerJobComponent/SeekerJobs";
import Footer from "../components/Common/Footer";
import JobDescription from "../components/JobDescriptionComponent";
import Sidebar from "../components/OnboardingPageComponents/Sidebar";
import Profile from "../components/ProfileComponent";
import SeekerCategory from "../components/SeekerCategory";
import SeekerCompany from "../components/SeekerCompany";
import ApplicantHome from "../components/SeekerHome";
// import SeekerJobs from "../components/SeekerJobComponent/SeekerJobs";

export default function Seeker() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <SeekerNav toggle={toggle} />
      <div className="seeker-gradient">
        <Routes>
          <Route path="/home" element={<ApplicantHome id="home" />} />
          <Route path="/category" element={<SeekerCategory />} />
          <Route path="/company" element={<SeekerCompany />} />
          <Route path="/company/:id" element={<Careers />} />
          <Route path="/jobs" element={<SeekerJobs />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/job/:id" element={<JobDescription />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}
