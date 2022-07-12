import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineUser } from "react-icons/ai";
import { FiClock } from "react-icons/fi";
import {
  ContentsContainer,
  EventContainer,
  EventsHolder,
} from "./EventComponents";

import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import { BsFillCaretDownFill } from "react-icons/bs";
import { EventsModal } from "./EventModal";
import "./events.css";

function ApplicantEvents() {
  const [event, setEvent] = useState({
    title: "",
    note: "",
    date: new Date(),
    startTime: "",
    endTime: "",
  });
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const closeModel = () => {
    setShowModal(false);
  };

  const handleDateInput = (e) => {
    console.log(e);
    setEvent({ ...event, date: e });
  };
  const handleStartInput = (e) => {
    console.log(e);
    setEvent({ ...event, startTime: e });
  };
  const handleEndInput = (e) => {
    console.log(e);
    setEvent({ ...event, endTime: e });
  };
  const handleEventInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setEvent({ ...event, [name]: value });
  };
  return (
    <EventContainer>
      <ContentsContainer>
        <h1 style={{ color: "white" }}>Your Events</h1>
        <div id="addBtnHolder">
          <Button
            variant="outline-primary"
            style={{ color: "white", marginBottom: "1rem" }}
            onClick={() => openModal()}
          >
            <AiOutlinePlus /> Add Event
          </Button>
        </div>

        <div id="btnHolder">
          <Button
            variant="outline-primary"
            style={{ color: "white", border: "none" }}
          >
            <FiClock size={18} /> <span>Today</span>
          </Button>
          <Button
            variant="outline-warning"
            style={{ color: "white", border: "none" }}
          >
            <FiClock size={18} /> <span>This Week</span>
          </Button>
          <Button
            variant="outline-danger"
            style={{ color: "white", border: "none" }}
          >
            <FiClock size={18} /> <span>This Month</span>
          </Button>
          <Button
            variant="outline-success"
            style={{ color: "white", border: "none" }}
          >
            <FiClock size={18} />
            <span>All</span>
          </Button>
        </div>
      </ContentsContainer>

      <EventsHolder>
        <div class="event-card" style={{ width: "80%", marginBottom: "1rem" }}>
          <div className="event">
            <div className="calendar">
              <div className="calendar-body">
                <span className="month" style={{ width: "100%" }}>
                  Janurary
                </span>
                <span className="date">15</span>
                <span className="day">Sunday</span>
              </div>
            </div>
            <div className="event-details">
              <p className="event-name">Call</p>
              <div className="event-participant">
                {" "}
                <AiOutlineUser /> Some User
              </div>
              <div className="event-time">
                {" "}
                <FiClock /> 8:00-10:30
              </div>
            </div>

            <div className="event-description">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque euismod, nisi vel consectetur euismod,
              </p>
            </div>
            <div className="event-dropdown">
              <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-basic"
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                  }}
                >
                  <BsFillCaretDownFill />
                </Dropdown.Toggle>

                <Dropdown.Menu
                  style={{
                    backgroundColor: "transparent",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <Dropdown.Item href="#/action-2" style={{ color: "white" }}>
                    Complete
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3" style={{ color: "white" }}>
                    Delete
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
      </EventsHolder>

      {showModal && (
        <EventsModal
          showModal={showModal}
          setShowModal={closeModel}
          event={event}
          handleEventInput={handleEventInput}
          handleDateInput={handleDateInput}
          handleStartInput={handleStartInput}
          handleEndInput={handleEndInput}
        />
      )}
    </EventContainer>
  );
}

export default ApplicantEvents;
