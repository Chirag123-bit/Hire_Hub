import _ from "lodash";
import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import "./styles.css";
import ReactRoundedImage from "react-rounded-image";
import Profile from "../../../../../images/profile.jpg";
import Badge from 'react-bootstrap/Badge'
import { ActionsDropDown, DropBtn, DropLink, JobInfoSide, ThreeDots } from "../../../Dashboard/Components";
import { ApplicantModal } from "../Modal/modal";


  

function getStatus(st){
  if(st === "New" || st === "Shortlist"){
    return <Badge pill bg="primary">
    Under Review
  </Badge>
  }
  else if(st==="Rejected" || st==="Disqualified"){
    return <Badge pill bg="danger">
    Not Selected
  </Badge>
  }

  else if(st==="Hired"){
    return <Badge pill bg="success">
    Hired
  </Badge>
  }
  else{
    return <Badge pill bg="warning" text="dark">
    In Process
  </Badge>
  }
}

function CandidateOverview({ Applicants }) {
  const [showModal, setShowModal] = useState(false);
  const openModal = (username) => {
      setShowModal((prev) => !prev);
    };

  const closeModel = () => {
    setShowModal(false);
  };
  return (
    <div>
      <Table style={{ color: "#ccc" }}>
        <thead>
          <tr>
            <th style={{width:"max-content !important"}}>Profile</th>
            <th>Status</th>
            <th>Current Stage</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>

          {_.map(Applicants, (data, key) => {
            {
              return(data.items.map((el, index) => {
 
                return(<tr>
                  <td>
                    <div className="d-flex align-items-center justify-content-around" style={{width:"80%", margin:"auto"}}>
                                    <div className="avatars-w-50">
                                      <ReactRoundedImage
                                        image={Profile}
                                        roundedColor="rgb(4,93,233)"
                                        imageWidth="40"
                                        imageHeight="40"
                                        roundedSize="0"
                                        hoverColor="#DD1144"
                                      />
                                    </div>
                                    <div>
                                      <p className="mb-0 text-primary text-left">
                                        {el.full_name}
                                      </p>
                                      <small className="text-muted text-left">
                                        {el.email}
                                      </small>
                                    </div>
                                  </div>
                  </td>
                  <td>{
                      getStatus(data.title)
                    }</td>
                  <td>{data.title}</td>
                  <td>  <JobInfoSide className="dropdown options-dropdown">
                <DropBtn
                  type="button"
                  data-toggle="dropdown"
                  class="btn-option btn d-flex align-items-center justify-content-center"
                  aria-expanded="false"
                >
                  <ThreeDots />
                </DropBtn>
                <ActionsDropDown className="dropdown-menu dropdown-menu-right py-2 mt-1">
                  <DropLink href="#" class="dropdown-item px-4 py-2" onClick={() => openModal(data.username)}>
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
                </tr>)
                
              }))
            }
          })}
        </tbody>
      </Table>
      {showModal && (
        <ApplicantModal showModal={showModal} setShowModal={closeModel} />
      )}
    </div>
  );
}

export default CandidateOverview;
