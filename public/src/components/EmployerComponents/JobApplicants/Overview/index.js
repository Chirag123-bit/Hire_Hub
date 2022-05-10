import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import _ from "lodash";
import "./style.css";
import ReactRoundedImage from "react-rounded-image";
import Profile from "../../../../images/profile.jpg";
import { ApplicantModal } from "../Candidates/Modal/modal";

function Overview({ Applicants }) {
  const [showModal, setShowModal] = useState(false);
  const [modalId, setModalId] = useState(null);

  const openModal = (id) => {
    setModalId(id);
    setShowModal((prev) => !prev);
  };

  const closeModel = () => {
    setShowModal(false);
  };
  const [state, setState] = useState(Applicants);
  const handleDragEnd = ({ destination, source }) => {
    if (!destination) {
      return;
    }
    if (
      destination.index === source.index &&
      destination.droppableId === source.droppableId
    ) {
      return;
    }
    const itemCopy = { ...state[source.droppableId].items[source.index] };
    setState((prev) => {
      prev = { ...prev };
      prev[source.droppableId].items.splice(source.index, 1);

      prev[destination.droppableId].items.splice(
        destination.index,
        0,
        itemCopy
      );

      return prev;
    });
  };
  return (
    <DragDropContext onDragEnd={handleDragEnd} className="d-flex">
      {_.map(state, (data, key) => {
        return (
          <div className={"column"} key="key">
            <div className="d-flex align-items-center text-center justify-content-center">
              <span className="width-15 height-15 bg-primary rounded mr-2"></span>
              <h6
                className="text-capitalize mb-0 text-center"
                style={{ color: "#ccc" }}
              >
                {data.title}
              </h6>
              <span
                className="rounded  px-2 py-1 d-inline-flex align-items-center justify-content-center"
                style={{
                  backgroundColor: "#1c1f26",
                  color: "#6c757d!important",
                }}
              >
                {data.items.length}
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
                    {data.items.map((el, index) => {
                      return (
                        <Draggable
                          key={el.username}
                          index={index}
                          draggableId={el.username}
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
                                  id={el.username + "div"}
                                  onClick={() => openModal(el.username)}
                                >
                                  <div className="d-flex align-items-center justify-content-around">
                                    <div className="mr-2 avatars-w-50">
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
                                      <p className="mb-0 text-primary">
                                        {el.full_name}
                                      </p>
                                      <small className="text-muted">
                                        {el.email}
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
        <ApplicantModal showModal={showModal} setShowModal={closeModel} />
      )}
    </DragDropContext>
  );
}

export default Overview;
