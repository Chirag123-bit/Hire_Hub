import _ from "lodash";
import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import "./styles.css";
import ReactRoundedImage from "react-rounded-image";
import Profile from "../../../../../images/profile.jpg";
function CandidateOverview({ Applicants }) {
  // setState(Applicants.keys);
  return (
    <div>
      <Table style={{ color: "#ccc" }}>
        <thead>
          <tr>
            <th>Profile</th>
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
                    <div className="d-flex align-items-center justify-content-around">
                                    <div className="avatars-w-50">
                                      <ReactRoundedImage
                                        image={Profile}
                                        roundedColor="rgb(4,93,233)"
                                        imageWidth="30"
                                        imageHeight="30"
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
                  <td>{el.full_name}</td>
                  <td>{el.full_name}</td>
                  <td>{el.full_name}</td>
                </tr>)
                
              }))
            }
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default CandidateOverview;
