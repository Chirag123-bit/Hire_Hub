import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FiClock } from "react-icons/fi";
import {
  ContentsContainer,
  EventContainer,
  EventsHolder,
} from "./TodoComponents";

import axios from "axios";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import { BsFillCaretDownFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Tilt from "react-tilt";
import { toast } from "react-toastify";
import {
  addTodo,
  deleteTodo,
  getTodo,
  updateTodo,
} from "../../../utils/APIRoutes";
import { TodosModal } from "./TodoModal";
import "./todos.css";

function ApplicantTodos() {
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
  });
  const [showModal, setShowModal] = useState(false);
  const [events, setEvents] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState("all");
  var allEvents;

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
        updateTodo,
        {
          id,
        },
        config
      )
      .then((res) => {
        console.log(res);
        toast.success("Todo Updated Successfully", toastOptions);
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
      .delete(deleteTodo + `/${id}`, config)
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
        addTodo,
        {
          title: event.title,
          note: event.note,
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
          });
          toast.success("Todo was added successfully", toastOptions);
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
      .get(getTodo, config)
      .then((result) => {
        console.log(result);
        if (result.status === 200) {
          setEvents(result.data.todos);
          allEvents = result.data.todos;
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

  return (
    <EventContainer>
      <ContentsContainer>
        <h1 style={{ color: "white" }}>Your Todos</h1>
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
            <AiOutlinePlus /> Add Todo
          </Button>
        </div>

        <div id="btnHolder">
          {selected === "all" ? (
            <Button
              variant="btn btn-primary"
              style={{ color: "white", border: "none" }}
            >
              <FiClock size={18} /> <span>All</span>
            </Button>
          ) : (
            <Button
              variant="outline-primary"
              style={{ color: "white", border: "none" }}
              onClick={() => setSelected("all")}
            >
              <FiClock size={18} /> <span>All</span>
            </Button>
          )}
          {selected === "pending" ? (
            <Button
              variant="btn btn-warning"
              style={{ color: "white", border: "none" }}
            >
              <FiClock size={18} /> <span>Pending</span>
            </Button>
          ) : (
            <Button
              variant="outline-warning"
              style={{ color: "white", border: "none" }}
              onClick={() => setSelected("pending")}
            >
              <FiClock size={18} /> <span>Pending</span>
            </Button>
          )}

          {selected === "completed" ? (
            <Button
              variant="btn btn-success"
              style={{ color: "white", border: "none" }}
            >
              <FiClock size={18} /> <span>Completed</span>
            </Button>
          ) : (
            <Button
              variant="outline-success"
              style={{ color: "white", border: "none" }}
              onClick={() => setSelected("completed")}
            >
              <FiClock size={18} /> <span>Completed</span>
            </Button>
          )}
        </div>
      </ContentsContainer>

      <EventsHolder>
        {loading ? (
          <div> Loading </div>
        ) : events == null ? (
          <div style={{ width: "40%", margin: "auto" }}>
            <Tilt
              options={{
                scale: 1,
              }}
            >
              <div
                data-tilt
                data-tilt-glare
                data-tilt-max-glare="0.3"
                className="cardEmpty"
              >
                <h2 class="name">No Todos Found</h2>
                <p style={{ color: "white", textAlign: "center" }}>
                  {" "}
                  Explore the site
                </p>
                <div style={{ margin: "auto" }}>
                  <Link to="/applicant/home">
                    <button
                      style={{
                        backgroundColor: "#0d6efd",
                        color: "white",
                        padding: "0.5rem",
                        borderRadius: "1rem",
                      }}
                    >
                      Explore Now
                    </button>
                  </Link>
                </div>
              </div>
            </Tilt>
          </div>
        ) : (
          events.map((event) => {
            if (selected === "all") {
              return (
                <div
                  class="event-card"
                  style={{ width: "80%", marginBottom: "1rem" }}
                  id={event._id}
                >
                  <div className="event">
                    <div className="event-details">
                      <p className="event-name">{event.event.title}</p>
                    </div>

                    <div className="event-description">
                      <p style={{ textAlign: "justify" }}>{event.event.note}</p>
                    </div>
                    <div className="event-badge">
                      <p style={{ textAlign: "justify" }}>
                        {event.event.isCompleted ? (
                          <h5>
                            <Badge bg="success">Completed</Badge>
                          </h5>
                        ) : (
                          <h5>
                            <Badge bg="warning">Pending</Badge>
                          </h5>
                        )}
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
            } else if (selected === "completed") {
              if (event.event.isCompleted) {
                return (
                  <div
                    class="event-card"
                    style={{ width: "80%", marginBottom: "1rem" }}
                    id={event._id}
                  >
                    <div className="event">
                      <div className="event-details">
                        <p className="event-name">{event.event.title}</p>
                      </div>

                      <div className="event-description">
                        <p style={{ textAlign: "justify" }}>
                          {event.event.note}
                        </p>
                      </div>
                      <div className="event-badge">
                        <p style={{ textAlign: "justify" }}>
                          {event.event.isCompleted ? (
                            <h5>
                              <Badge bg="success">Completed</Badge>
                            </h5>
                          ) : (
                            <h5>
                              <Badge bg="warning">Pending</Badge>
                            </h5>
                          )}
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
              }
            } else {
              if (!event.event.isCompleted) {
                return (
                  <div
                    class="event-card"
                    style={{ width: "80%", marginBottom: "1rem" }}
                    id={event._id}
                  >
                    <div className="event">
                      <div className="event-details">
                        <p className="event-name">{event.event.title}</p>
                      </div>

                      <div className="event-description">
                        <p style={{ textAlign: "justify" }}>
                          {event.event.note}
                        </p>
                      </div>
                      <div className="event-badge">
                        <p style={{ textAlign: "justify" }}>
                          {event.event.isCompleted ? (
                            <h5>
                              <Badge bg="success">Completed</Badge>
                            </h5>
                          ) : (
                            <h5>
                              <Badge bg="warning">Pending</Badge>
                            </h5>
                          )}
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
              }
            }
          })
        )}
      </EventsHolder>

      {showModal && (
        <TodosModal
          showModal={showModal}
          setShowModal={closeModel}
          Todo={event}
          handleTodoInput={handleEventInput}
          handleDateInput={handleDateInput}
          handleStartInput={handleStartInput}
          handleEndInput={handleEndInput}
          handleSubmit={handleSubmit}
        />
      )}
    </EventContainer>
  );
}

export default ApplicantTodos;
