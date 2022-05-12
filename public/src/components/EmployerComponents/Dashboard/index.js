import React from "react";
import {
  DashboardContainer,
  HeadContainer,
  UpperHead,
  LowerHead,
  Title,
  CreateButton,
  DropDown,
  DropItem,
  SearchContainer,
  SearchBar,
  JobContainer,
  JobsContainerRow,
  JobCardHeader,
  JobInfoTop,
  JobInfoSide,
  JobTitle,
  ThreeDots,
  DropBtn,
  ActionsDropDown,
  DropLink,
  JobCardBody,
  JobStatusCards,
  NewCandidateCard,
  InterviewCard,
  NegotiationCard,
  ShortlistCard,
  TaskCard,
  HiredCard,
  DisqualifyCard,
  RejectCard,
} from "./Components";

import { FiSearch } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { BiTimeFive, BiHome, BiDollar, BiUser, BiMap } from "react-icons/bi";
import EventsBar from "../Common/EventsBar";
import { motion } from "framer-motion";

function Dashboard({ isOpen }) {
  return (
    <motion.div className="sideContent"
    animate={{
        maxWidth: isOpen? "82%":"90%",marginLeft:isOpen?"16rem":"7rem",
        transition: { duration: 0.2, type: "spring", damping: 10 },
      }}
    >
      <DashboardContainer className="col-lg-7 col-xl-8 mb-4 mb-lg-0" style={{width: isOpen?"65" :"68%"}}>
        <HeadContainer>
          <UpperHead className="d-flex  justify-content-between">
            <Title className="mb-0">Dashboard</Title>
            <CreateButton
              type="button"
              className="btn btn-success btn-with-shadow mb-4"
            >
              <AiOutlinePlus /> Create New Job
            </CreateButton>
          </UpperHead>
          <LowerHead className="d-flex align-items-start justify-content-between">
            <DropDown
              name="typeSelect"
              id="typeSelect"
              className="selectpicker"
              data-live-search-style="begins"
              data-live-search="true"
            >
              <DropItem value="Active">Active Jobs</DropItem>
              <DropItem value="Inactive">Inactive Jobs</DropItem>
              <DropItem value="Draft">Draft Jobs</DropItem>
            </DropDown>
            <SearchContainer className="form-group form-group-with-search d-flex align-items-center">
              <FiSearch
                style={{
                  position: "absolute",
                  color: "white",
                  marginLeft: "0.7rem",
                }}
              />
              <SearchBar
                type="text"
                placeholder="Search"
                className="form-control"
              />
            </SearchContainer>
          </LowerHead>
        </HeadContainer>

        <JobsContainerRow class="row">
          <JobContainer className="col-12">
            <JobCardHeader className="bg-transparent d-flex justify-content-between align-items-center p-4">
              <JobInfoTop className="d-flex flex-column">
                <JobTitle className="text-capitalize mr-2">
                  Backend Developer
                </JobTitle>
                <p className="text-secondary mb-1">
                  Last Submission Date: 2022-04-21
                </p>
                <div className="text-secondary small d-inline-flex align-items-center">
                  <span style={{ marginRight: "0.3rem" }}>
                    <BiTimeFive />
                    Full Time
                  </span>
                  <span style={{ marginRight: "0.3rem" }}>
                    <BiMap />
                    Kathmandu
                  </span>
                  <span style={{ marginRight: "0.3rem" }}>
                    <BiHome />
                    Python
                  </span>
                  <span style={{ marginRight: "0.3rem" }}>
                    <BiDollar />
                    30,000/month
                  </span>
                  <span style={{ marginRight: "0.3rem" }}>
                    <BiUser />5
                  </span>
                </div>
              </JobInfoTop>
              <JobInfoSide className="dropdown options-dropdown">
                <DropBtn
                  type="button"
                  data-toggle="dropdown"
                  class="btn-option btn d-flex align-items-center justify-content-center"
                  aria-expanded="false"
                >
                  <ThreeDots />
                </DropBtn>
                <ActionsDropDown className="dropdown-menu dropdown-menu-right py-2 mt-1">
                  <DropLink href="#" class="dropdown-item px-4 py-2">
                    Preview
                  </DropLink>
                  <DropLink href="#" class="dropdown-item px-4 py-2">
                    Edit
                  </DropLink>
                  <DropLink href="#" class="dropdown-item px-4 py-2">
                    Sharable link
                  </DropLink>
                  <DropLink href="#" class="dropdown-item px-4 py-2">
                    Deactivate
                  </DropLink>
                  <DropLink href="#" class="dropdown-item px-4 py-2">
                    Delete
                  </DropLink>
                </ActionsDropDown>
              </JobInfoSide>
            </JobCardHeader>
            <JobCardBody className="p-4">
              <JobStatusCards className="d-flex overflow-auto ">
                <NewCandidateCard
                  className="card-widget candidates card"
                  style={{ marginBottom: "1rem", marginRight: "1rem" }}
                >
                  <p
                    className="text-size-15 default-font-color mb-0"
                    style={{ color: "#cccdcd" }}
                  >
                    0
                  </p>
                  <p className="text-size-13 text-muted mb-0 text-capitalize">
                    New
                  </p>
                </NewCandidateCard>
                <InterviewCard
                  className="card-widget candidates card"
                  style={{ marginBottom: "1rem", marginRight: "1rem" }}
                >
                  <p
                    className="text-size-15 default-font-color mb-0"
                    style={{ color: "#cccdcd" }}
                  >
                    1
                  </p>
                  <p className="text-size-13 text-muted mb-0 text-capitalize">
                    Interview
                  </p>
                </InterviewCard>
                <NegotiationCard
                  className="card-widget candidates card"
                  style={{ marginBottom: "1rem", marginRight: "1rem" }}
                >
                  <p
                    className="text-size-15 default-font-color mb-0"
                    style={{ color: "#cccdcd" }}
                  >
                    7
                  </p>
                  <p className="text-size-13 text-muted mb-0 text-capitalize">
                    Negotiation
                  </p>
                </NegotiationCard>
                <ShortlistCard
                  className="card-widget candidates card"
                  style={{ marginBottom: "1rem", marginRight: "1rem" }}
                >
                  <p
                    className="text-size-15 default-font-color mb-0"
                    style={{ color: "#cccdcd" }}
                  >
                    4
                  </p>
                  <p className="text-size-13 text-muted mb-0 text-capitalize">
                    Shortlist
                  </p>
                </ShortlistCard>
                <TaskCard
                  className="card-widget candidates card"
                  style={{ marginBottom: "1rem", marginRight: "1rem" }}
                >
                  <p
                    className="text-size-15 default-font-color mb-0"
                    style={{ color: "#cccdcd" }}
                  >
                    4
                  </p>
                  <p className="text-size-13 text-muted mb-0 text-capitalize">
                    Task Phase
                  </p>
                </TaskCard>
                <HiredCard
                  className="card-widget candidates card"
                  style={{ marginBottom: "1rem", marginRight: "1rem" }}
                >
                  <p
                    className="text-size-15 default-font-color mb-0"
                    style={{ color: "#cccdcd" }}
                  >
                    6
                  </p>
                  <p className="text-size-13 text-muted mb-0 text-capitalize">
                    Hired
                  </p>
                </HiredCard>
                <RejectCard
                  className="card-widget candidates card"
                  style={{ marginBottom: "1rem", marginRight: "1rem" }}
                >
                  <p
                    className="text-size-15 default-font-color mb-0"
                    style={{ color: "#cccdcd" }}
                  >
                    8
                  </p>
                  <p className="text-size-13 text-muted mb-0 text-capitalize">
                    Rejected
                  </p>
                </RejectCard>
                <DisqualifyCard
                  className="card-widget candidates card"
                  style={{ marginBottom: "1rem", marginRight: "1rem" }}
                >
                  <p
                    className="text-size-15 default-font-color mb-0"
                    style={{ color: "#cccdcd" }}
                  >
                    5
                  </p>
                  <p className="text-size-13 text-muted mb-0 text-capitalize">
                    Disqualified
                  </p>
                </DisqualifyCard>
              </JobStatusCards>
              <div className="mt-3">
                <a
                  href="dashboard/job-post/1"
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  <button
                    type="button"
                    class="text-size-13 btn btn-sm btn-outline-primary px-3"
                  >
                    Overview
                  </button>
                </a>
              </div>
            </JobCardBody>
          </JobContainer>
          <JobContainer className="col-12">
            <JobCardHeader className="bg-transparent d-flex justify-content-between align-items-center p-4">
              <JobInfoTop className="d-flex flex-column">
                <JobTitle className="text-capitalize mr-2">
                  Backend Developer
                </JobTitle>
                <p className="text-secondary mb-1">
                  Last Submission Date: 2022-04-21
                </p>
                <div className="text-secondary small d-inline-flex align-items-center">
                  <span style={{ marginRight: "0.3rem" }}>
                    <BiTimeFive />
                    Full Time
                  </span>
                  <span style={{ marginRight: "0.3rem" }}>
                    <BiMap />
                    Kathmandu
                  </span>
                  <span style={{ marginRight: "0.3rem" }}>
                    <BiHome />
                    Python
                  </span>
                  <span style={{ marginRight: "0.3rem" }}>
                    <BiDollar />
                    30,000/month
                  </span>
                  <span style={{ marginRight: "0.3rem" }}>
                    <BiUser />5
                  </span>
                </div>
              </JobInfoTop>
              <JobInfoSide className="dropdown options-dropdown">
                <DropBtn
                  type="button"
                  data-toggle="dropdown"
                  class="btn-option btn d-flex align-items-center justify-content-center"
                  aria-expanded="false"
                >
                  <ThreeDots />
                </DropBtn>
                <ActionsDropDown className="dropdown-menu dropdown-menu-right py-2 mt-1">
                  <DropLink href="#" class="dropdown-item px-4 py-2">
                    Preview
                  </DropLink>
                  <DropLink href="#" class="dropdown-item px-4 py-2">
                    Edit
                  </DropLink>
                  <DropLink href="#" class="dropdown-item px-4 py-2">
                    Sharable link
                  </DropLink>
                  <DropLink href="#" class="dropdown-item px-4 py-2">
                    Deactivate
                  </DropLink>
                  <DropLink href="#" class="dropdown-item px-4 py-2">
                    Delete
                  </DropLink>
                </ActionsDropDown>
              </JobInfoSide>
            </JobCardHeader>
            <JobCardBody className="p-4">
              <JobStatusCards className="d-flex overflow-auto ">
                <NewCandidateCard
                  className="card-widget candidates card"
                  style={{ marginBottom: "1rem", marginRight: "1rem" }}
                >
                  <p
                    className="text-size-15 default-font-color mb-0"
                    style={{ color: "#cccdcd" }}
                  >
                    0
                  </p>
                  <p className="text-size-13 text-muted mb-0 text-capitalize">
                    New
                  </p>
                </NewCandidateCard>
                <InterviewCard
                  className="card-widget candidates card"
                  style={{ marginBottom: "1rem", marginRight: "1rem" }}
                >
                  <p
                    className="text-size-15 default-font-color mb-0"
                    style={{ color: "#cccdcd" }}
                  >
                    1
                  </p>
                  <p className="text-size-13 text-muted mb-0 text-capitalize">
                    Interview
                  </p>
                </InterviewCard>
                <NegotiationCard
                  className="card-widget candidates card"
                  style={{ marginBottom: "1rem", marginRight: "1rem" }}
                >
                  <p
                    className="text-size-15 default-font-color mb-0"
                    style={{ color: "#cccdcd" }}
                  >
                    7
                  </p>
                  <p className="text-size-13 text-muted mb-0 text-capitalize">
                    Negotiation
                  </p>
                </NegotiationCard>
                <ShortlistCard
                  className="card-widget candidates card"
                  style={{ marginBottom: "1rem", marginRight: "1rem" }}
                >
                  <p
                    className="text-size-15 default-font-color mb-0"
                    style={{ color: "#cccdcd" }}
                  >
                    4
                  </p>
                  <p className="text-size-13 text-muted mb-0 text-capitalize">
                    Shortlist
                  </p>
                </ShortlistCard>
                <TaskCard
                  className="card-widget candidates card"
                  style={{ marginBottom: "1rem", marginRight: "1rem" }}
                >
                  <p
                    className="text-size-15 default-font-color mb-0"
                    style={{ color: "#cccdcd" }}
                  >
                    4
                  </p>
                  <p className="text-size-13 text-muted mb-0 text-capitalize">
                    Task Phase
                  </p>
                </TaskCard>
                <HiredCard
                  className="card-widget candidates card"
                  style={{ marginBottom: "1rem", marginRight: "1rem" }}
                >
                  <p
                    className="text-size-15 default-font-color mb-0"
                    style={{ color: "#cccdcd" }}
                  >
                    6
                  </p>
                  <p className="text-size-13 text-muted mb-0 text-capitalize">
                    Hired
                  </p>
                </HiredCard>
                <RejectCard
                  className="card-widget candidates card"
                  style={{ marginBottom: "1rem", marginRight: "1rem" }}
                >
                  <p
                    className="text-size-15 default-font-color mb-0"
                    style={{ color: "#cccdcd" }}
                  >
                    8
                  </p>
                  <p className="text-size-13 text-muted mb-0 text-capitalize">
                    Rejected
                  </p>
                </RejectCard>
                <DisqualifyCard
                  className="card-widget candidates card"
                  style={{ marginBottom: "1rem", marginRight: "1rem" }}
                >
                  <p
                    className="text-size-15 default-font-color mb-0"
                    style={{ color: "#cccdcd" }}
                  >
                    5
                  </p>
                  <p className="text-size-13 text-muted mb-0 text-capitalize">
                    Disqualified
                  </p>
                </DisqualifyCard>
              </JobStatusCards>
              <div className="mt-3">
                <a
                  href="dashboard/job-post/2"
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  <button
                    type="button"
                    class="text-size-13 btn btn-sm btn-outline-primary px-3"
                  >
                    Overview
                  </button>
                </a>
              </div>
            </JobCardBody>
          </JobContainer>
          <JobContainer className="col-12">
            <JobCardHeader className="bg-transparent d-flex justify-content-between align-items-center p-4">
              <JobInfoTop className="d-flex flex-column">
                <JobTitle className="text-capitalize mr-2">
                  Backend Developer
                </JobTitle>
                <p className="text-secondary mb-1">
                  Last Submission Date: 2022-04-21
                </p>
                <div className="text-secondary small d-inline-flex align-items-center">
                  <span style={{ marginRight: "0.3rem" }}>
                    <BiTimeFive />
                    Full Time
                  </span>
                  <span style={{ marginRight: "0.3rem" }}>
                    <BiMap />
                    Kathmandu
                  </span>
                  <span style={{ marginRight: "0.3rem" }}>
                    <BiHome />
                    Python
                  </span>
                  <span style={{ marginRight: "0.3rem" }}>
                    <BiDollar />
                    30,000/month
                  </span>
                  <span style={{ marginRight: "0.3rem" }}>
                    <BiUser />5
                  </span>
                </div>
              </JobInfoTop>
              <JobInfoSide className="dropdown options-dropdown">
                <DropBtn
                  type="button"
                  data-toggle="dropdown"
                  class="btn-option btn d-flex align-items-center justify-content-center"
                  aria-expanded="false"
                >
                  <ThreeDots />
                </DropBtn>
                <ActionsDropDown className="dropdown-menu dropdown-menu-right py-2 mt-1">
                  <DropLink href="#" class="dropdown-item px-4 py-2">
                    Preview
                  </DropLink>
                  <DropLink href="#" class="dropdown-item px-4 py-2">
                    Edit
                  </DropLink>
                  <DropLink href="#" class="dropdown-item px-4 py-2">
                    Edit job post
                  </DropLink>
                  <DropLink href="#" class="dropdown-item px-4 py-2">
                    Sharable link
                  </DropLink>
                  <DropLink href="#" class="dropdown-item px-4 py-2">
                    Deactivate
                  </DropLink>
                  <DropLink href="#" class="dropdown-item px-4 py-2">
                    Delete
                  </DropLink>
                </ActionsDropDown>
              </JobInfoSide>
            </JobCardHeader>
            <JobCardBody className="p-4">
              <JobStatusCards className="d-flex overflow-auto ">
                <NewCandidateCard
                  className="card-widget candidates card"
                  style={{ marginBottom: "1rem", marginRight: "1rem" }}
                >
                  <p
                    className="text-size-15 default-font-color mb-0"
                    style={{ color: "#cccdcd" }}
                  >
                    0
                  </p>
                  <p className="text-size-13 text-muted mb-0 text-capitalize">
                    New
                  </p>
                </NewCandidateCard>
                <InterviewCard
                  className="card-widget candidates card"
                  style={{ marginBottom: "1rem", marginRight: "1rem" }}
                >
                  <p
                    className="text-size-15 default-font-color mb-0"
                    style={{ color: "#cccdcd" }}
                  >
                    1
                  </p>
                  <p className="text-size-13 text-muted mb-0 text-capitalize">
                    Interview
                  </p>
                </InterviewCard>
                <NegotiationCard
                  className="card-widget candidates card"
                  style={{ marginBottom: "1rem", marginRight: "1rem" }}
                >
                  <p
                    className="text-size-15 default-font-color mb-0"
                    style={{ color: "#cccdcd" }}
                  >
                    7
                  </p>
                  <p className="text-size-13 text-muted mb-0 text-capitalize">
                    Negotiation
                  </p>
                </NegotiationCard>
                <ShortlistCard
                  className="card-widget candidates card"
                  style={{ marginBottom: "1rem", marginRight: "1rem" }}
                >
                  <p
                    className="text-size-15 default-font-color mb-0"
                    style={{ color: "#cccdcd" }}
                  >
                    4
                  </p>
                  <p className="text-size-13 text-muted mb-0 text-capitalize">
                    Shortlist
                  </p>
                </ShortlistCard>
                <TaskCard
                  className="card-widget candidates card"
                  style={{ marginBottom: "1rem", marginRight: "1rem" }}
                >
                  <p
                    className="text-size-15 default-font-color mb-0"
                    style={{ color: "#cccdcd" }}
                  >
                    4
                  </p>
                  <p className="text-size-13 text-muted mb-0 text-capitalize">
                    Task Phase
                  </p>
                </TaskCard>
                <HiredCard
                  className="card-widget candidates card"
                  style={{ marginBottom: "1rem", marginRight: "1rem" }}
                >
                  <p
                    className="text-size-15 default-font-color mb-0"
                    style={{ color: "#cccdcd" }}
                  >
                    6
                  </p>
                  <p className="text-size-13 text-muted mb-0 text-capitalize">
                    Hired
                  </p>
                </HiredCard>
                <RejectCard
                  className="card-widget candidates card"
                  style={{ marginBottom: "1rem", marginRight: "1rem" }}
                >
                  <p
                    className="text-size-15 default-font-color mb-0"
                    style={{ color: "#cccdcd" }}
                  >
                    8
                  </p>
                  <p className="text-size-13 text-muted mb-0 text-capitalize">
                    Rejected
                  </p>
                </RejectCard>
                <DisqualifyCard
                  className="card-widget candidates card"
                  style={{ marginBottom: "1rem", marginRight: "1rem" }}
                >
                  <p
                    className="text-size-15 default-font-color mb-0"
                    style={{ color: "#cccdcd" }}
                  >
                    5
                  </p>
                  <p className="text-size-13 text-muted mb-0 text-capitalize">
                    Disqualified
                  </p>
                </DisqualifyCard>
              </JobStatusCards>
              <div className="mt-3">
                <a
                  href="dashboard/job-post/3"
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  <button
                    type="button"
                    class="text-size-13 btn btn-sm btn-outline-primary px-3"
                  >
                    Overview
                  </button>
                </a>
              </div>
            </JobCardBody>
          </JobContainer>
        </JobsContainerRow>
      </DashboardContainer>
      <EventsBar isOpen={isOpen} />
    </motion.div>
  );
}

export default Dashboard;
