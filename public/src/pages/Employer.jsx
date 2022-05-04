import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../components/Common/Footer";
import Sidebar from "../components/EmployerComponents/Common/Sidebar";
import Dashboard from "../components/EmployerComponents/Dashboard";
import "./Employer.css";

export default function Employer() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      {/* <Sidebar isOpen={isOpen} toggle={toggle} />
      <SeekerNav toggle={toggle} /> */}

      <Sidebar>
        <Routes>
          <Route path="/dashboard" element={<Dashboard id="dashboard" />} />
        </Routes>
      </Sidebar>

      {/* <Footer /> */}
    </>
  );
}
