import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Candidates from "../components/EmployerComponents/Candidates";
import Careers from "../components/EmployerComponents/Career";
import Navbar from "../components/EmployerComponents/Common/Navbar";
import Sidebar from "../components/EmployerComponents/Common/Sidebar";
import Dashboard from "../components/EmployerComponents/Dashboard";
import JobApplicants from "../components/EmployerComponents/JobApplicants";
import { Applicants } from "../components/EmployerComponents/JobApplicants/Overview/Constants";
import Settings from "../components/EmployerComponents/Setting";
import { getCompanyJobDetail } from "../utils/APIRoutes";
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

  const [loading, setLoading] = useState(true);
  var [jobInfo, setJobInfo] = useState([]);
  const [selectedJob, setSelectedJob] = useState([]);
  const [company, setCompany] = useState(null);

  const getCompanyJob = async () => {
    axios
      .get(getCompanyJobDetail, {
        params: {
          user: com._id,
        },
      })
      .then((result) => {
        setJobInfo([]);
        // console.log(result.data.data);
        for (var info in result.data.data) {
          var comp = result.data.data[info].data;
          var applicants = {};
          //filter new applicants
          applicants.New = comp.applicants.filter(
            (applicant) => applicant.status === "New"
          );
          applicants.Shortlist = comp.applicants.filter(
            (applicant) => applicant.status === "Shortlist"
          );
          applicants.Interview = comp.applicants.filter(
            (applicant) => applicant.status === "Interview"
          );
          applicants.Negotiation = comp.applicants.filter(
            (applicant) => applicant.status === "Negotiation"
          );
          applicants.TaskPhase = comp.applicants.filter(
            (applicant) => applicant.status === "Task Phase"
          );
          applicants.Hired = comp.applicants.filter(
            (applicant) => applicant.status === "Hired"
          );
          applicants.Disqualified = comp.applicants.filter(
            (applicant) => applicant.status === "Disqualified"
          );
          applicants.Rejected = comp.applicants.filter(
            (applicant) => applicant.status === "Rejected"
          );
          setJobInfo((oldArray) => [
            ...oldArray,
            { job: comp, applicants: applicants },
          ]);
        }
      });
  };

  useEffect(() => {
    if (loading)
      axios
        .get(getCompanyJobDetail, {
          params: {
            user: com._id,
          },
        })
        .then((result) => {
          // console.log(result.data.data);
          for (var info in result.data.data) {
            var comp = result.data.data[info].data;
            var applicants = {};
            //filter new applicants
            applicants.New = comp.applicants.filter(
              (applicant) => applicant.status === "New"
            );
            applicants.Shortlist = comp.applicants.filter(
              (applicant) => applicant.status === "Shortlist"
            );
            applicants.Interview = comp.applicants.filter(
              (applicant) => applicant.status === "Interview"
            );
            applicants.Negotiation = comp.applicants.filter(
              (applicant) => applicant.status === "Negotiation"
            );
            applicants.TaskPhase = comp.applicants.filter(
              (applicant) => applicant.status === "Task Phase"
            );
            applicants.Hired = comp.applicants.filter(
              (applicant) => applicant.status === "Hired"
            );
            applicants.Disqualified = comp.applicants.filter(
              (applicant) => applicant.status === "Disqualified"
            );
            applicants.Rejected = comp.applicants.filter(
              (applicant) => applicant.status === "Rejected"
            );
            setJobInfo((oldArray) => [
              ...oldArray,
              { job: comp, applicants: applicants },
            ]);
          }
          setLoading(false);
          // setSelectedJob(jobInfo[0]);
        });
  }, []);

  if (localStorage.getItem("user")) {
    cu = JSON.parse(localStorage.getItem("user"));
    com = JSON.parse(localStorage.getItem("company"));
  }

  return (
    <>
      <div className="main-container">
        <Navbar user={cu} company={com} loading={loading} jobInfo={jobInfo} />
        <Sidebar isOpen={isOpen} toggle={toggle} />

        <Routes>
          <Route
            path="/dashboard"
            element={
              <Dashboard
                id="dashboard"
                isOpen={isOpen}
                // company={com._id}
                loading={loading}
                jobInfo={jobInfo}
                company={com}
                setSelectedJob={setSelectedJob}
                getCompanyJob={getCompanyJob}
              />
            }
          />
          <Route
            path="/dashboard/job-post/"
            element={
              <JobApplicants isOpen={isOpen} selectedJob={selectedJob} />
            }
          />
          <Route
            path="/candidates"
            element={
              <Candidates
                id="dashboard"
                isOpen={isOpen}
                Applicants={Applicants}
                jobInfo={jobInfo}
              />
            }
          />
          <Route
            path="/career"
            element={
              <Careers id="dashboard" isOpen={isOpen} user={cu} com={com} />
            }
          />
          <Route
            path="/setting"
            element={
              <Settings id="dashboard" isOpen={isOpen} user={cu} com={com} />
            }
          />
        </Routes>
      </div>

      {/* <Footer /> */}
    </>
  );
}
