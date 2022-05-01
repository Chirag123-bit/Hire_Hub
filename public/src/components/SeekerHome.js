import React, { useState } from "react";
import Companies from "./SeekerCompanies";
import SeekerHero from "./SeekerHero";
import SeekerJob from "./SeekerJob";
import SeekerSolutions from "./SeekerSolutions";

const ApplicantHome = () => {
  return (
    <div
      id="home"
      style={{
      }}
    >
      <SeekerHero />
      <SeekerSolutions />
      <SeekerJob />
      <Companies />
    </div>
  );
};

export default ApplicantHome;
