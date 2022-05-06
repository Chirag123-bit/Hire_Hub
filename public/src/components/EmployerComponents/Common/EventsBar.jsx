import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineUser, AiOutlinePlus, AiTwotoneDelete } from "react-icons/ai";
import { FiClock } from "react-icons/fi";
import { MdOutlineClear } from "react-icons/md";

function EventsBar({ isOpen }) {
  return (
    <motion.div
      className="eventsBar"
      animate={{
        width: isOpen ? "350px" : "400px",
        transition: { duration: 0.5, type: "spring", damping: 10 },
      }}
    >
      <div className="EventsContainer">
        <div className="headTitleSection">
          <h5 className="titleStyle">Your events</h5>
          <button className="viewAll">View All</button>
        </div>
        <div className="events">
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
          </div>
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
          </div>
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
          </div>
        </div>
      </div>

      <div className="EventsContainer">
        <div className="headTitleSection">
          <h5 className="titleStyle">Your Todos</h5>
        </div>
        <div className="TodoContainer">
          <div className="todoAdd">
            <input type="text" name="todo" placeholder="Add a to-do" />{" "}
            <AiOutlinePlus />
          </div>
          <div className="todos">
            <p className="todo-info">You have 1 pending item</p>
            <ul className="todo-list">
              <li>
                <input type="checkbox" class="todo-checkbox" id="todo1" />
                <label for="todo1">Todo1</label>
                <button type="button" class="delete-btn">
                  <AiTwotoneDelete />
                </button>
              </li>
            </ul>
            <div className="d-flex justify-content-around">
              <button className="btn btn-sm btn-primary px-2 mr-1">
                Show Complete
              </button>
              <button className="btn btn-sm btn-danger d-inline-flex align-items-center justify-content-center px-2">
                <MdOutlineClear /> Clear All
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default EventsBar;
