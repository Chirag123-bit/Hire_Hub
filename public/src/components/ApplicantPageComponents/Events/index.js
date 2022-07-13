import React, { useEffect, useState } from "react";
import { AiOutlinePlus, AiOutlineUser } from "react-icons/ai";
import { FiClock } from "react-icons/fi";
import {
  ContentsContainer,
  EventContainer,
  EventsHolder,
} from "./EventComponents";

import axios from "axios";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import { BsFillCaretDownFill } from "react-icons/bs";
import { toast } from "react-toastify";
import {
  addEvent,
  deleteEvent,
  getEvent,
  updateEvent,
} from "../../../utils/APIRoutes";
import { EventsModal } from "./EventModal";
import "./events.css";

function ApplicantEvents() {
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const [event, setEvent] = useState({
    title: "",
    note: "",
    date: new Date(),
    startTime: "9:00",
    endTime: "10:00",
  });
  const [showModal, setShowModal] = useState(false);
  const [update, setUpdate] = useState(false);

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

  const handleUpdate = async (id) => {
    const token = await JSON.parse(localStorage.getItem("token"));
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .put(
        updateEvent,
        {
          id,
        },
        config
      )
      .then((res) => {
        console.log(res);
        toast.success("Event Updated Successfully", toastOptions);
        getEvents();
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error Updating Event", toastOptions);
      });
  };

  const handleDelete = async (id) => {
    const token = await JSON.parse(localStorage.getItem("token"));
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .delete(deleteEvent + `/${id}`, config)
      .then((res) => {
        console.log(res);
        toast.success("Event Removed Successfully", toastOptions);
        getEvents();
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error Removing Event", toastOptions);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await JSON.parse(localStorage.getItem("token"));
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .post(
        addEvent,
        {
          title: event.title,
          note: event.note,
          date: event.date,
          startTime: event.startTime,
          endTime: event.endTime,
        },
        config
      )
      .then((result) => {
        console.log(result);
        if (result.status === 200) {
          closeModel();
          setEvent({
            title: "",
            note: "",
            date: new Date(),
            startTime: "9:00",
            endTime: "10:00",
          });
          toast.success("Event was added successfully", toastOptions);
          getEvents();
        } else {
          toast.error(result.data.msg, toastOptions);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.msg, toastOptions);
      });
  };

  //get all events
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const getEvents = async () => {
    setLoading(true);
    const token = await JSON.parse(localStorage.getItem("token"));
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get(getEvent, config)
      .then((result) => {
        console.log(result);
        if (result.status === 200) {
          setEvents(result.data.events);
        } else {
          toast.error("Error Fetching events", toastOptions);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Some Unknown error occured", toastOptions);
      });
    setLoading(false);
  };
  useEffect(() => {
    getEvents();
  }, []);
  var monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <EventContainer>
      <ContentsContainer>
        <h1 style={{ color: "white" }}>Your Events</h1>
        <div id="addBtnHolder">
          <Button
            variant="outline-primary"
            style={{
              color: "white",
              marginBottom: "1rem",
              backdropFilter: "blur(10px)",
            }}
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
        {loading ? (
          <div></div>
        ) : (
          events.map((event) => {
            const date = new Date(event.event.date);
            let dt = date.getDate();
            let day = date.toLocaleString("en-us", { weekday: "long" });
            let month = monthNames[date.getMonth()];
            return (
              <div
                class="event-card"
                style={{ width: "80%", marginBottom: "1rem" }}
                id={event._id}
              >
                <div className="event">
                  <div className="calendar">
                    <div className="calendar-body">
                      <span className="month" style={{ width: "100%" }}>
                        {month}
                      </span>
                      <span className="date">{dt}</span>
                      <span className="day">{day}</span>
                    </div>
                  </div>
                  <div className="event-details">
                    <p className="event-name">{event.event.title}</p>
                    <div className="event-participant">
                      {" "}
                      <AiOutlineUser /> Chirag Simkhada
                    </div>
                    <div className="event-time">
                      {" "}
                      <FiClock /> {event.event.startTime}-{event.event.endTime}
                    </div>
                  </div>

                  <div className="event-description">
                    <p style={{ textAlign: "justify" }}>{event.event.note}</p>
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
                        <Dropdown.Item
                          href="#/action-2"
                          style={{ color: "white" }}
                          onClick={() => handleUpdate(event.event._id)}
                        >
                          Complete
                        </Dropdown.Item>
                        <Dropdown.Item
                          href="#/action-3"
                          style={{ color: "white" }}
                          onClick={() => handleDelete(event.event._id)}
                        >
                          Delete
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
              </div>
            );
          })
        )}
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
          handleSubmit={handleSubmit}
        />
      )}
    </EventContainer>
  );
}

export default ApplicantEvents;
