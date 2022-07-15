import axios from "axios";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { toast } from "react-toastify";
import LoadingImage from "../../../images/loading.gif";
import {
  changeLogo,
  editCompanyDetails,
  getCompanyJobs,
  host,
} from "../../../utils/APIRoutes";
import {
  ApplyButton,
  CompanyInfoHoler,
  JobCard,
  JobCardsHoler,
  JobDescription,
  JobDescriptionBox,
  JobFooter,
  JobTitleHolder,
  Muted,
  Sallary,
} from "../../ApplicantPageComponents/Home/SeekerJob/JobElements";
import { JobType } from "../../ProfileComponents/InformationComponent/Component";
import { JobTitle } from "../Dashboard/Components";
import { DetailsModal } from "./DetailsModal/modal";
import "./styles.css";

function Careers({ isOpen, user, com }) {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [company, setCompany] = useState(com);
  const openModal = () => {
    console.log("open modal");
    setShowModal(true);
    console.log(showModal);
  };

  const closeModel = () => {
    setShowModal(false);
  };
  useEffect(() => {
    axios
      .get(getCompanyJobs, {
        params: {
          user: company._id,
        },
      })
      .then((result) => {
        console.log(result.data);
        setJobs(result.data.data);
        setIsLoading(false);
      });
  }, []);

  const inputFile = useRef(null);
  const handleBtnClick = () => {
    inputFile.current.click();
  };
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const [profileUrl, setProfileUrl] = useState(company.avatarImage);

  const selectCountry = (e) => {
    setCompany({ ...company, country: e });
  };
  const selectRegion = (e) => {
    setCompany({ ...company, region: e });
  };

  const getNewImage = async () => {
    setIsUpdating(true);
    const currentUser = await JSON.parse(localStorage.getItem("company"));
    setCompany(currentUser);
    setProfileUrl(currentUser.avatarImage);
    setIsUpdating(false);
  };
  const [updating, setIsUpdating] = useState(false);

  const onImageChange = async (e) => {
    const formData = new FormData();
    formData.append("image", e.target.files[0]);

    const token = JSON.parse(localStorage.getItem("token"));
    const config = {
      headers: {
        "content-type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const res = await axios.post(changeLogo, formData, config);
      if (res.status === 200) {
        console.log(res);
        localStorage.removeItem("company");
        localStorage.setItem("company", JSON.stringify(res.data.company));
        toast.success("Logo updated successfully", toastOptions);
        getNewImage();
      } else {
        toast.error(
          "Failed to update profile. Please select a valid image",
          toastOptions
        );
      }
    } catch (err) {
      toast.error(
        "Failed to update logo. Please select a valid image",
        toastOptions
      );
      console.log(err);
    }
  };

  //handle company details update
  const handleCompanyDetailsUpdate = async (e) => {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem("token"));
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    // setIsUpdating(true);
    const data = {
      name: company.name,
      phone: company.phone,
      sector: company.sector,
      country: company.country,
      region: company.region,
      about: company.about,
      desc: company.desc,
    };
    axios.put(editCompanyDetails, data, config).then((res) => {
      if (res.status === 200) {
        localStorage.removeItem("company");
        localStorage.setItem("company", JSON.stringify(res.data.data));
        toast.success("Company details updated successfully", toastOptions);
        closeModel();
      } else {
        toast.error("Failed to update company details", toastOptions);
      }
    });
  };

  const handleCompanyChange = (e) => {
    setCompany({ ...company, [e.target.name]: e.target.value });
  };

  return (
    <>
      <motion.div className="CareerContainer">
        <motion.div
          className="CareerContentHolder"
          animate={{
            width: isOpen ? "98%" : "95%",

            transition: { duration: 0.5, type: "spring", damping: 10 },
          }}
        >
          <input
            type="file"
            id="image"
            name="image"
            ref={inputFile}
            style={{ display: "none" }}
            onChange={onImageChange}
          />
          {isLoading ? (
            <div style={{ width: "max-content", margin: "auto" }}>
              <img src={LoadingImage} alt="loading" />
            </div>
          ) : (
            <>
              <div className="CareerHead">
                <div>
                  <div className="logo-container mb-2" onClick={handleBtnClick}>
                    <img src={host + "/" + company.avatarImage} alt="ss" />
                  </div>
                  <h3 style={{ color: "white" }}>{company.name}</h3>
                  <h5 style={{ color: "white" }}>{company.location}</h5>
                </div>

                <div className="career-dropdown">
                  <Dropdown>
                    <Dropdown.Toggle
                      id="dropdown-career"
                      style={{
                        backgroundColor: "transparent",
                        border: "none",
                      }}
                    ></Dropdown.Toggle>

                    <Dropdown.Menu
                      style={{
                        backgroundColor: "transparent",
                        border: "1px solid white",
                      }}
                    >
                      <Dropdown.Item
                        style={{ color: "white" }}
                        onClick={openModal}
                      >
                        Update Details
                      </Dropdown.Item>
                      <Dropdown.Item
                        style={{ color: "white" }}
                        onClick={handleBtnClick}
                      >
                        Update Logo
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
              <div className="CareerBody">
                <div>
                  <h4 style={{ color: "#0000FF" }}>About Us</h4>
                  <div className="CareerAbout">
                    <p style={{ color: "white" }}>{company.about}</p>
                  </div>
                </div>
                <div>
                  <h4 style={{ color: "#0000FF" }}>Our Services</h4>
                  <div className="CareerAbout">
                    <p style={{ color: "white" }}>{company.desc}</p>
                  </div>
                </div>
                <div>
                  <h4 style={{ color: "#0000FF" }}>Current Openings</h4>
                  <JobCardsHoler style={{ width: "100%" }}>
                    {jobs.map((job) => (
                      <JobCard
                        style={{ backgroundColor: "#242933" }}
                        className="career-card"
                      >
                        <CompanyInfoHoler
                          style={{
                            backgroundColor: "transparent",
                            alignItems: "center",
                            zIndex: "10000",
                          }}
                        >
                          <div className="box1 ">
                            <img
                              src={host + "/" + company.avatarImage}
                              alt="ss"
                            />

                            {/* <FcBrokenLink style={{ fontSize: "1.5rem" }} /> */}
                          </div>
                          <div className="box2">
                            <h6>{company.name}</h6>
                            <p style={{ color: "white !important" }}>
                              {company.region}, {company.country}
                            </p>
                          </div>
                        </CompanyInfoHoler>
                        <JobTitleHolder style={{ zIndex: "10000" }}>
                          <JobTitle>{job.title}</JobTitle>
                          <JobType style={{ backgroundColor: "#242933" }}>
                            Full Time
                          </JobType>
                        </JobTitleHolder>
                        <JobDescriptionBox style={{ zIndex: "10000" }}>
                          <JobDescription>{job.description}</JobDescription>
                        </JobDescriptionBox>
                        <JobFooter style={{ zIndex: "10000" }}>
                          <Sallary>
                            ${job.sallary}
                            <Muted>/month</Muted>
                          </Sallary>
                          <ApplyButton style={{ backgroundColor: "#242933" }}>
                            Edit
                          </ApplyButton>
                        </JobFooter>
                      </JobCard>
                    ))}
                  </JobCardsHoler>
                </div>
              </div>
              <div className="career-footer">
                <div className="logo-container mb-2">
                  <img
                    src={host + "/" + company.avatarImage}
                    alt="ss"
                    style={{ width: "55px" }}
                  />
                </div>
                <p style={{ color: "white" }} className="text-capitalize">
                  {company.sector} based company
                </p>
                <p style={{ color: "white" }}> &copy; {company.name}, 2022</p>
              </div>
            </>
          )}
        </motion.div>
      </motion.div>
      {showModal && (
        <DetailsModal
          job={company}
          showModal={showModal}
          closeModal={closeModel}
          handleJobInput={handleCompanyChange}
          handleSubmit={handleCompanyDetailsUpdate}
          selectCountry={selectCountry}
          selectRegion={selectRegion}
        />
      )}
    </>
  );
}

export default Careers;
