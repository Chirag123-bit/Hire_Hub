import Moment from "moment";
import React, { useState } from "react";
import Badge from "react-bootstrap/Badge";
import Table from "react-bootstrap/Table";
import ReactRoundedImage from "react-rounded-image";
import {
  ActionsDropDown,
  DropBtn,
  DropLink,
  JobInfoSide,
  ThreeDots,
} from "../../../Dashboard/Components";
import { ApplicantModal } from "../Modal/modal";
import "./styles.css";

function getStatus(st) {
  if (st === "New" || st === "Shortlist") {
    return (
      <Badge pill bg="primary">
        Under Review
      </Badge>
    );
  } else if (st === "Rejected" || st === "Disqualified") {
    return (
      <Badge pill bg="danger">
        Not Selected
      </Badge>
    );
  } else if (st === "Hired") {
    return (
      <Badge pill bg="success">
        Hired
      </Badge>
    );
  } else {
    return (
      <Badge pill bg="warning" text="dark">
        In Process
      </Badge>
    );
  }
}

function CandidateOverview({ Applicants, selectedJob }) {
  console.log(selectedJob.job.applicants.length);
  const [showModal, setShowModal] = useState(false);
  const openModal = (applicant) => {
    setSelectedUser(applicant);
    setShowModal((prev) => !prev);
  };

  const closeModel = () => {
    setShowModal(false);
  };
  const [selectedUser, setSelectedUser] = useState({});
  const [appliedDate, setAppliedDate] = useState({});
  return (
    <div>
      <Table style={{ color: "#ccc" }}>
        <thead>
          <tr>
            <th style={{ width: "max-content !important" }}>Profile</th>
            <th>Status</th>
            <th>Current Stage</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {selectedJob.job.applicants.map((jb) => {
            return (
              <tr>
                <td>
                  <div
                    className="d-flex align-items-center justify-content-around"
                    style={{ width: "80%", margin: "auto" }}
                  >
                    <div className="avatars-w-50">
                      <ReactRoundedImage
                        image={jb.applicant.avatarImage}
                        // roundedColor="rgb(4,93,233)"
                        imageWidth="40"
                        imageHeight="40"
                        roundedSize="0"
                        // hoverColor="#DD1144"
                      />
                    </div>
                    <div>
                      <p className="mb-0 text-primary text-left">
                        {jb.applicant.firstName} {jb.applicant.lastName}
                      </p>
                      <small className="text-muted text-left">
                        {jb.applicant.email}
                      </small>
                    </div>
                  </div>
                </td>
                <td>{getStatus(jb.status)}</td>
                <td>{jb.applicant.professional.title}</td>
                <td>
                  {" "}
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
                      <DropLink
                        href="#"
                        class="dropdown-item px-4 py-2"
                        onClick={() => {
                          setAppliedDate(
                            Moment(jb.appliedDate).format("MMM Do YYYY")
                          );
                          openModal(jb.applicant);
                        }}
                      >
                        View Candidate
                      </DropLink>
                      <DropLink href="#" class="dropdown-item px-4 py-2">
                        Hire
                      </DropLink>
                      <DropLink href="#" class="dropdown-item px-4 py-2">
                        Disqualify
                      </DropLink>
                      <DropLink href="#" class="dropdown-item px-4 py-2">
                        Delete
                      </DropLink>
                    </ActionsDropDown>
                  </JobInfoSide>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      {showModal && (
        <ApplicantModal
          showModal={showModal}
          setShowModal={closeModel}
          selectedUser={selectedUser}
          appliedDate={appliedDate}
        />
      )}
    </div>
  );
}

export default CandidateOverview;
