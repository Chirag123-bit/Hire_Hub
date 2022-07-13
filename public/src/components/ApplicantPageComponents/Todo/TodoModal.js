import { TextField } from "@mui/material";
import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./todos.css";

export const TodosModal = ({
  showModal,
  setShowModal,
  Todo,
  handleTodoInput,
  handleSubmit,
}) => {
  return (
    <>
      {showModal ? (
        <Modal
          show={showModal}
          onHide={setShowModal}
          id="todoModal"
          style={{ color: "transparent" }}
        >
          <form id="TodoForm">
            <Modal.Header
              closeButton
              onClick={setShowModal}
              className="flex-column-reverse align-items-center"
            >
              <div className="ModalHead d-flex justify-content-center align-items-center">
                <h1 style={{ color: "white" }}>Create a New Todo</h1>
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
                  label="Todo Title"
                  name="title"
                  style={{
                    width: "100%",
                    marginBottom: "1rem",
                    borderColor: "#fff !important",
                  }}
                  value={Todo.title}
                  onChange={handleTodoInput}
                  InputLabelProps={{
                    style: {
                      color: "#fff",
                      borderColor: "#fff",
                    },
                  }}
                />
                <TextField
                  required
                  id="outlined-multiline-flexible1"
                  label="Note"
                  name="note"
                  multiline
                  minRows={6}
                  style={{ width: "100%" }}
                  value={Todo.note}
                  onChange={handleTodoInput}
                  InputLabelProps={{
                    style: { color: "#fff", borderColor: "#fff" },
                  }}
                />
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={setShowModal} size="md">
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
