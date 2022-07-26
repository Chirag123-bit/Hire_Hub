import axios from "axios";
import _ from "lodash";
import Moment from "moment";
import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import ReactRoundedImage from "react-rounded-image";
import { toast } from "react-toastify";
import { updateJobStatus } from "../../../../utils/APIRoutes";
import { ApplicantModal } from "../Candidates/Modal/modal";
import "./style.css";

function Overview({ selectedJob }) {
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  const [appliedDate, setAppliedDate] = useState({});

  const openModal = (applicant) => {
    setSelectedUser(applicant);
    setShowModal((prev) => !prev);
  };

  const closeModel = () => {
    setShowModal(false);
  };
  const [state, setState] = useState(selectedJob.applicants);
  const handleDragEnd = async ({ destination, source }) => {
    if (!destination) {
      return;
    }
    if (
      destination.index === source.index &&
      destination.droppableId === source.droppableId
    ) {
      return;
    }
    const itemCopy = { ...state[source.droppableId][source.index] };
    const user_id = itemCopy.applicant._id;
    const status = destination.droppableId;
    const job_id = selectedJob.job._id;
    axios
      .post(updateJobStatus, {
        job_id,
        user_id,
        status,
      })
      .then((rest) => {
        if (rest.data.success) {
          toast.success(rest.data.msg, toastOptions);
          const newState = [...state];
          newState[source.droppableId][source.index].status = status;
          setState(newState);
        } else {
          toast.error(rest.data.msg, toastOptions);
        }
      });
    setState((prev) => {
      prev = { ...prev };
      prev[source.droppableId].splice(source.index, 1);

      prev[destination.droppableId].splice(destination.index, 0, itemCopy);
      return prev;
    });
  };
  return (
    <DragDropContext onDragEnd={handleDragEnd} className="d-flex">
      {_.map(state, (data, key) => {
        // console.log(data);
        return (
          <div className={"column"} key="key">
            <div className="d-flex align-items-center text-center justify-content-center">
              <span className="width-15 height-15 bg-primary rounded mr-2"></span>
              <h6
                className="text-capitalize mb-0 text-center"
                style={{ color: "#ccc" }}
              >
                {key}
              </h6>
              <span
                className="rounded  px-2 py-1 d-inline-flex align-items-center justify-content-center"
                style={{
                  backgroundColor: "#1c1f26",
                  color: "#6c757d!important",
                }}
              >
                {data.length}
              </span>
            </div>
            <Droppable droppableId={key}>
              {(provided) => {
                return (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className={"droppable-col"}
                  >
                    {data.map((el, index) => {
                      // console.log(el, index);
                      return (
                        <Draggable
                          key={el._id}
                          index={index}
                          draggableId={el.applicant._id}
                        >
                          {(provided) => {
                            return (
                              <div
                                className="itemDrop"
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                <div
                                  className="card-body-drag"
                                  id={el._id + "div"}
                                  onClick={() => {
                                    setAppliedDate(
                                      Moment(el.appliedDate).format(
                                        "MMM Do YYYY"
                                      )
                                    );
                                    openModal(el.applicant);
                                  }}
                                >
                                  <div className="d-flex align-items-center justify-content-around">
                                    <div className="mr-2 avatars-w-50">
                                      <ReactRoundedImage
                                        image={el.applicant.avatarImage}
                                        // roundedColor="rgb(4,93,233)"
                                        imageWidth="30"
                                        imageHeight="30"
                                        roundedSize="0"
                                        // hoverColor="#DD1144"
                                      />
                                    </div>
                                    <div>
                                      <p className="mb-0 text-primary">
                                        {el.applicant.firstName}{" "}
                                        {el.applicant.firstLame}
                                      </p>
                                      <small className="text-muted">
                                        {el.applicant.email}
                                      </small>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          }}
                        </Draggable>
                      );
                    })}
                    {provided.placeholder}
                  </div>
                );
              }}
            </Droppable>
          </div>
        );
      })}
      {showModal && (
        <ApplicantModal
          showModal={showModal}
          setShowModal={closeModel}
          selectedUser={selectedUser}
          appliedDate={appliedDate}
        />
      )}
    </DragDropContext>
  );
}

export default Overview;
