import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import SeekerNav from "../components/SeekerNav";
import Footer from "../components/Footer";

const ApplicantHome = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />

      <SeekerNav toggle={toggle} />
      <Footer />
    </>
  );
};

export default ApplicantHome;
