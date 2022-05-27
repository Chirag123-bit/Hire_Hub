import React from "react";
import CompanyHeadSection from "./ApplicantPageComponents/Company/CompaniesHeadSection";
import Categories from "./ApplicantPageComponents/Company/CompaniesSection/index";
const SeekerCompany = () => {
  return (
    <div id="category">
      <CompanyHeadSection />
      <Categories />
    </div>
  );
};

export default SeekerCompany;
