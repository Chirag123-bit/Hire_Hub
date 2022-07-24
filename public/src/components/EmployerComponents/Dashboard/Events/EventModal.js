import { TextField } from "@mui/material";
import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";
// import "./events.css";

export const EventsModal = ({
  showModal,
  setShowModal,
  event,
  handleEventInput,
  handleDateInput,
  handleStartInput,
  handleEndInput,
  closeModel,
  handleSubmit,
}) => {
  return (
    <>
      {showModal ? (
        <Modal
          show={showModal}
          onHide={setShowModal}
          id="eventModal"
          style={{ color: "transparent" }}
        >
          <form id="eventForm">
            <Modal.Header
              closeButton
              onClick={setShowModal}
              className="flex-column-reverse align-items-center"
            >
              <div className="ModalHead d-flex justify-content-center align-items-center">
                <h1 style={{ color: "white" }}>Create a New Event</h1>
              </div>
            </Modal.Header>
            <Modal.Body
              style={{
                backgroundColor: "transparent",
                backdropFilter: "blur(10px)",
              }}
            >
              <div>
                <TextField
                  required
                  id="outlined-multiline-flexible1"
                  label="Event Title"
                  name="title"
                  style={{
                    width: "100%",
                    marginBottom: "1rem",
                    borderColor: "#fff !important",
                  }}
                  value={event.title}
                  onChange={handleEventInput}
                  InputLabelProps={{
                    style: {
                      color: "#fff",
                      borderColor: "#fff",
                    },
                  }}
                />

                <div>
                  <h4
                    style={{ marginBottom: 0, color: "#ccc" }}
                    className="mb-2"
                  >
                    Event On:
                  </h4>
                  <DatePicker
                    onChange={handleDateInput}
                    selected={event.date}
                    name="closeTime"
                    style={{ width: "100%" }}
                    minDate={new Date()}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "1rem 0",
                  }}
                >
                  <div style={{ width: "45%" }}>
                    <h4
                      style={{ marginBottom: 0, color: "#ccc" }}
                      className="mb-2"
                    >
                      Starts On:
                    </h4>
                    <TimePicker
                      onChange={handleStartInput}
                      value={event.startTime}
                      name="startTime"
                      style={{ width: "100%" }}
                      minDate={new Date()}
                    />
                  </div>
                  <div style={{ width: "45%" }}>
                    <h4
                      style={{ marginBottom: 0, color: "#ccc" }}
                      className="mb-2"
                    >
                      Ends On:
                    </h4>
                    <TimePicker
                      onChange={handleEndInput}
                      value={event.endTime}
                      name="endTime"
                      style={{ width: "100%", color: "white" }}
                      minDate={new Date()}
                    />
                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={closeModel} size="md">
                Cancle
              </Button>
              <Button
                variant="success"
                onClick={handleSubmit}
                size="md"
                type="submit"
              >
                Create
              </Button>
            </Modal.Footer>
          </form>
        </Modal>
      ) : null}
    </>
  );
};
