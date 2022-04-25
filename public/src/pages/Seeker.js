import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import SeekerNav from "../components/SeekerNav";
import Footer from "../components/Footer";
import SeekerHero from "../components/SeekerHero";
import SeekerSolutions from "../components/SeekerSolutions";
import SeekerJob from "../components/SeekerJob";
import Companies from "../components/SeekerCompanies";

const ApplicantHome = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />

      <SeekerNav toggle={toggle} />

      <SeekerHero />
      <SeekerSolutions />
      <SeekerJob />
      <Companies />
      <Footer />
    </>
  );
};

export default ApplicantHome;
