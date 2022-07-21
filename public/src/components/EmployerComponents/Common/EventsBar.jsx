import axios from "axios";
import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineUser, AiTwotoneDelete } from "react-icons/ai";
import { FiClock } from "react-icons/fi";
import { MdOutlineClear } from "react-icons/md";
import { toast } from "react-toastify";
import { deleteTodo, updateTodo } from "../../../utils/APIRoutes";

function EventsBar({
  isOpen,
  openModal,
  closeModel,
  loading,
  events,
  handleTodoInput,
  todo,
  loadingTodos,
  handleTodoSubmit,
  todos,
  getTodos,
}) {
  const [todoList, setTodos] = useState(todos);
  const [hideCompleted, setHideCompleted] = useState(true);
  const clearTodos = () => {
    setTodos([]);
  };
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const changeIncomplete = async (todo, status) => {
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
          id: todo,
        },
        config
      )
      .then((result) => {
        console.log(result);
        if (result.status === 200) {
          toast.success("Todo updated successfully", toastOptions);
          getTodos();
        } else {
          toast.error("Error Fetching todos", toastOptions);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Some Unknown error occured", toastOptions);
      });
  };

  const removeTodo = async (todo) => {
    console.log(todo);
    const token = await JSON.parse(localStorage.getItem("token"));
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .post(
        deleteTodo,
        {
          id: todo,
        },
        config
      )
      .then((result) => {
        console.log(result);
        if (result.status === 200) {
          toast.success("Todo updated successfully", toastOptions);
          getTodos();
        } else {
          toast.error("Error Fetching todos", toastOptions);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Some Unknown error occured", toastOptions);
      });
  };

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
    <div className="eventsBar" style={{ width: "30%" }}>
      <div className="EventsContainer">
        <div className="headTitleSection">
          <h5 className="titleStyle">Your events</h5>
          <button className="viewAll" onClick={() => openModal()}>
            Add Event
          </button>
        </div>
        <div className="events">
          {loading ? (
            <div>Loading...</div>
          ) : (
            events.map((event) => {
              console.log(event);
              var date;
              try {
                date = new Date(event.event.date) ?? new Date();
              } catch (err) {
                date = new Date();
              }
              // const date = new Date(event.event.date) ?? new Date();
              let dt = date.getDate();
              let day = date.toLocaleString("en-us", { weekday: "long" });
              let month = monthNames[date.getMonth()];

              return (
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
                </div>
              );
            })
          )}
        </div>
      </div>

      <div className="EventsContainer">
        <div className="headTitleSection">
          <h5 className="titleStyle">Your Todos</h5>
        </div>
        <div className="TodoContainer">
          <div className="todoAdd">
            <input
              type="text"
              name="title"
              placeholder="Add a to-do"
              id="todoInput"
              value={todo.title}
              onChange={handleTodoInput}
            />{" "}
            <AiOutlinePlus onClick={handleTodoSubmit} />
          </div>
          {loadingTodos ? (
            <div>Loading...</div>
          ) : (
            <div className="todos">
              <p className="todo-info">
                You have{" "}
                {todos.filter((item) => item.event.isCompleted == false).length}{" "}
                pending item
              </p>
              <ul className="todo-list">
                {todos
                  .filter((item) => item.event.isCompleted == false)
                  .map((todo) => {
                    console.log(todo.event.title);
                    return (
                      <li>
                        <input
                          type="checkbox"
                          class="todo-checkbox"
                          id={todo.event._id}
                          onClick={() => {
                            changeIncomplete(todo.event._id, "Completed");
                          }}
                        />
                        <label for={todo.event._id}>{todo.event.title}</label>
                        <button type="button" class="delete-btn">
                          <AiTwotoneDelete
                            onClick={() => {
                              removeTodo(todo.event._id);
                            }}
                          />
                        </button>
                      </li>
                    );
                  })}
              </ul>
              <div className="d-flex justify-content-around mb-3">
                <button
                  className="btn btn-sm btn-primary px-2 mr-1"
                  onClick={() => {
                    setHideCompleted(!hideCompleted);
                  }}
                  style={{ outline: "none" }}
                >
                  {hideCompleted ? "Show" : "Hide"} Complete
                </button>
                <button
                  className="btn btn-sm btn-danger d-inline-flex align-items-center justify-content-center px-2"
                  onClick={clearTodos}
                  style={{ outline: "none" }}
                >
                  <MdOutlineClear /> Clear All
                </button>
              </div>

              {hideCompleted ? (
                ""
              ) : (
                <div>
                  <p className="todo-info">
                    You have{" "}
                    {
                      todos.filter((item) => item.event.isCompleted == true)
                        .length
                    }{" "}
                    completed item
                  </p>
                  <ul className="todo-list">
                    {todos
                      .filter((item) => item.event.isCompleted == true)
                      .map((todo) => (
                        <li style={{ background: "rgba(70, 195, 95, 0.08)" }}>
                          <input
                            type="checkbox"
                            class="todo-checkbox"
                            id={todo.event._id}
                            checked
                            onClick={() => {
                              changeIncomplete(todo.event._id, "Incomplete");
                            }}
                          />
                          <label for={todo.event._id}>{todo.event.title}</label>
                          <button type="button" class="delete-btn">
                            <AiTwotoneDelete
                              onClick={() => {
                                removeTodo(todo);
                              }}
                            />
                          </button>
                        </li>
                      ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default EventsBar;
