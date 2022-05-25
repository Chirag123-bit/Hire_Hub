import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Candidates from "../components/EmployerComponents/Candidates";
import Careers from "../components/EmployerComponents/Career";
import Navbar from "../components/EmployerComponents/Common/Navbar";
import Sidebar from "../components/EmployerComponents/Common/Sidebar";
import Dashboard from "../components/EmployerComponents/Dashboard";
import JobApplicants from "../components/EmployerComponents/JobApplicants";
import { Applicants } from "../components/EmployerComponents/JobApplicants/Overview/Constants";
import { getCompanyData } from "../utils/APIRoutes";
import "./Employer.css";

export default function Employer() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const navigate = useNavigate();
  const [currUser, setCurrUser] = useState("");
  var cu, com;
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  useEffect(() => {
    if (localStorage.getItem("company") === null) {
      navigate("/auth/login");
      localStorage.clear();
    }
    const { data } = axios.post(getCompanyData, {
      id: com._id,
    });
    if (data.status === false) {
      toast.error(data.msg, toastOptions);
    } else {
      com = data.data;
    }
  }, []);

  if (localStorage.getItem("user")) {
    cu = JSON.parse(localStorage.getItem("user"));
    com = JSON.parse(localStorage.getItem("company"));

    if (currUser.type === "Applicant") {
      navigate("/applicant/home");
    }
  } else {
    navigate("/auth/login");
  }

  return (
    <>
      <div className="main-container">
        <Navbar user={cu} company={com} />
        <Sidebar isOpen={isOpen} toggle={toggle} />

        <Routes>
          <Route
            path="/dashboard"
            element={<Dashboard id="dashboard" isOpen={isOpen} />}
          />
          <Route
            path="/dashboard/job-post/:id"
            element={<JobApplicants isOpen={isOpen} />}
          />
          <Route
            path="/candidates"
            element={
              <Candidates
                id="dashboard"
                isOpen={isOpen}
                Applicants={Applicants}
              />
            }
          />
          <Route
            path="/career"
            element={
              <Careers id="dashboard" isOpen={isOpen} user={cu} company={com} />
            }
          />
        </Routes>
      </div>

      {/* <Footer /> */}
    </>
  );
}
