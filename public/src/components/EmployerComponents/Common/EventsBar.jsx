import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineUser, AiTwotoneDelete } from "react-icons/ai";
import { FiClock } from "react-icons/fi";
import { MdOutlineClear } from "react-icons/md";
import { v4 as uuid } from "uuid";
import { todos } from "./Constants";

function EventsBar({ isOpen, openModal, closeModel, loading, events }) {
  const [todoList, setTodos] = useState(todos);
  const [hideCompleted, setHideCompleted] = useState(true);
  const clearTodos = () => {
    setTodos([]);
  };

  const addTodo = () => {
    const todo = document.getElementById("todoInput").value;
    setTodos(
      todoList.concat({ id: uuid(), event: todo, status: "Incomplete" })
    );
  };

  const changeIncomplete = (todo, status) => {
    setTodos(
      todoList.map((item) => {
        if (item === todo) {
          return { ...item, status };
        } else {
        }
        return item;
      })
    );
  };

  const removeTodo = (todo) => {
    setTodos(todoList.filter((item) => item !== todo));
  };

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
            events.map((event) => (
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
            ))
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
              name="todo"
              placeholder="Add a to-do"
              id="todoInput"
            />{" "}
            <AiOutlinePlus onClick={addTodo} />
          </div>
          <div className="todos">
            <p className="todo-info">
              You have{" "}
              {todoList.filter((item) => item.status === "Incomplete").length}{" "}
              pending item
            </p>
            <ul className="todo-list">
              {todoList
                .filter((item) => item.status === "Incomplete")
                .map((todo) => (
                  <li>
                    <input
                      type="checkbox"
                      class="todo-checkbox"
                      id={todo.id}
                      onClick={() => {
                        changeIncomplete(todo, "Completed");
                      }}
                    />
                    <label for={todo.id}>{todo.event}</label>
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
                    todoList.filter((item) => item.status === "Completed")
                      .length
                  }{" "}
                  completed item
                </p>
                <ul className="todo-list">
                  {todoList
                    .filter((item) => item.status === "Completed")
                    .map((todo) => (
                      <li style={{ background: "rgba(70, 195, 95, 0.08)" }}>
                        <input
                          type="checkbox"
                          class="todo-checkbox"
                          id={todo.id}
                          checked
                          onClick={() => {
                            changeIncomplete(todo, "Incomplete");
                          }}
                        />
                        <label for={todo.id}>{todo.event}</label>
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
        </div>
      </div>
    </div>
  );
}

export default EventsBar;
