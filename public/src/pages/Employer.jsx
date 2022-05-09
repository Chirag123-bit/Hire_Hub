import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../components/Common/Footer";
import EventsBar from "../components/EmployerComponents/Common/EventsBar";
import Navbar from "../components/EmployerComponents/Common/Navbar";
import Sidebar from "../components/EmployerComponents/Common/Sidebar";
import Dashboard from "../components/EmployerComponents/Dashboard";
import JobApplicants from "../components/EmployerComponents/JobApplicants";
import "./Employer.css";

export default function Employer() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <div className="main-container">
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar />

        <Routes>
          <Route
            path="/dashboard"
            element={<Dashboard id="dashboard" isOpen={isOpen} />}
          />
          <Route
            path="/job-post/:id"
            element={<JobApplicants isOpen={isOpen} />}
          />
        </Routes>
      </div>

      {/* <Footer /> */}
    </>
  );
}
