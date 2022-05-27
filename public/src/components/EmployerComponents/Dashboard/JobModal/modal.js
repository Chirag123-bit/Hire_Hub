import AddButton from "@material-ui/icons/Add";
import RemoveButton from "@material-ui/icons/Remove";
import { IconButton, MenuItem, TextField } from "@mui/material";
import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import DateTimePicker from "react-datetime-picker";
import { SkillHolder } from "../../../ProfileComponents/CardComponent/Components";
import "./style.css";

const sectors = [
  {
    value: "Information Technology",
    label: "Information Technology",
  },
  {
    value: "Health",
    label: "Health",
  },
  {
    value: "Entertainment",
    label: "Entertainment",
  },
  {
    value: "Real Estate",
    label: "Real Estate",
  },
  {
    value: "Finance",
    label: "Finance",
  },
];

export const JobModal = ({
  showModal,
  setShowModal,
  job,
  handleJobInput,
  handleAddSkill,
  handleRemoveSkill,
  handleOnSkillChange,
  handleRemoveRequirement,
  handleAddRequirement,
  handleOnRequirementChange,
  handleOnResponsibilityChange,
  handleAddResponsibility,
  handleRemoveResponsibility,
  handleDateInput,
  handleSubmit,
}) => {
  return (
    <>
      {showModal ? (
        <Modal show={showModal} onHide={setShowModal} className="modalStyle">
          <form>
            <Modal.Header
              closeButton
              onClick={setShowModal}
              className="flex-column-reverse align-items-center"
            >
              <div className="ModalHead d-flex justify-content-center align-items-center">
                <h1 style={{ color: "white" }}>Create a New Job</h1>
              </div>
            </Modal.Header>
            <Modal.Body style={{ backgroundColor: "#1d1f27" }}>
              <div>
                <h4 style={{ marginBottom: 0, color: "#ccc" }} className="mb-2">
                  Basic Information
                </h4>
                <TextField
                  required
                  id="outlined-multiline-flexible1"
                  label="Job Title"
                  name="title"
                  style={{
                    width: "100%",
                    marginBottom: "1rem",
                    borderColor: "#fff !important",
                  }}
                  value={job.title}
                  onChange={handleJobInput}
                  InputLabelProps={{
                    style: {
                      color: "#fff",
                      borderColor: "#fff",
                    },
                  }}
                />
                <TextField
                  type="number"
                  required
                  id="outlined-multiline-flexible1"
                  label="Sallary"
                  name="sallary"
                  style={{ width: "100%", marginBottom: "1rem" }}
                  value={job.sallary}
                  onChange={handleJobInput}
                  InputLabelProps={{
                    style: {
                      color: "#fff",
                      borderColor: "#fff",
                    },
                  }}
                />
                <TextField
                  id="outlined-select-type"
                  select
                  label="Job Sector"
                  name="sector"
                  value={job.sector}
                  onChange={handleJobInput}
                  variant="outlined"
                  style={{ width: "100%" }}
                  size="small"
                  InputLabelProps={{
                    style: {
                      color: "#fff",
                      borderColor: "#fff",
                    },
                  }}
                >
                  {sectors.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <div>
                  <h4
                    style={{ marginBottom: 0, color: "#ccc" }}
                    className="mb-2"
                  >
                    Expires On:
                  </h4>
                  <DateTimePicker
                    onChange={handleDateInput}
                    value={job.closeTime}
                    name="closeTime"
                    style={{ width: "100%" }}
                    minDate={new Date()}
                  />
                </div>
              </div>
              <div>
                <h4 style={{ marginBottom: 0, color: "#ccc" }} className="mb-2">
                  Skills Required
                </h4>
                <SkillHolder className="mb-2">
                  {/* <Skill style={{ background: "#0dcaf0" }}>Python</Skill> */}
                  {job.skillSet.map((skills, index) => {
                    return (
                      <div style={{ display: "flex", marginBottom: "1rem" }}>
                        <TextField
                          required
                          size="small"
                          name="skill"
                          label="Skill"
                          value={skills.skill}
                          onChange={(e) => {
                            handleOnSkillChange(e, index);
                          }}
                          style={{ width: "90%", textTransform: "capitalize" }}
                          InputLabelProps={{
                            style: { color: "#fff" },
                          }}
                          sx={{ input: { color: "orange !important" } }}
                        />
                        <IconButton onClick={() => handleRemoveSkill(index)}>
                          <RemoveButton style={{ color: "orange" }} />
                        </IconButton>
                        <IconButton onClick={handleAddSkill}>
                          <AddButton style={{ color: "orange" }} />
                        </IconButton>
                      </div>
                    );
                  })}
                </SkillHolder>
              </div>
              <div>
                <h4 style={{ marginBottom: 0, color: "#ccc" }} className="mb-2">
                  Job Requirements
                </h4>
                {job.requirementsSet.map((requirements, index) => {
                  return (
                    <div style={{ display: "flex", marginBottom: "1rem" }}>
                      <TextField
                        required
                        size="small"
                        name="requirement"
                        label="requirement"
                        value={requirements.requirement}
                        onChange={(e) => {
                          handleOnRequirementChange(e, index);
                        }}
                        style={{ width: "90%", textTransform: "capitalize" }}
                        InputLabelProps={{
                          style: { color: "#fff" },
                        }}
                        sx={{ input: { color: "orange !important" } }}
                      />
                      <IconButton
                        onClick={() => handleRemoveRequirement(index)}
                      >
                        <RemoveButton style={{ color: "orange" }} />
                      </IconButton>
                      <IconButton onClick={handleAddRequirement}>
                        <AddButton style={{ color: "orange" }} />
                      </IconButton>
                    </div>
                  );
                })}
              </div>
              <div>
                <h4 style={{ marginBottom: 0, color: "#ccc" }} className="mb-2">
                  Job Responsibilities
                </h4>
                {job.responsibilitiesSet.map((responsibilities, index) => {
                  return (
                    <div style={{ display: "flex", marginBottom: "1rem" }}>
                      <TextField
                        required
                        size="small"
                        name="responsibility"
                        label="responsibility"
                        value={responsibilities.responsibility}
                        onChange={(e) => {
                          handleOnResponsibilityChange(e, index);
                        }}
                        style={{ width: "90%", textTransform: "capitalize" }}
                        InputLabelProps={{
                          style: { color: "#fff" },
                        }}
                        sx={{ input: { color: "orange !important" } }}
                      />
                      <IconButton
                        onClick={() => handleRemoveResponsibility(index)}
                      >
                        <RemoveButton style={{ color: "orange" }} />
                      </IconButton>
                      <IconButton onClick={handleAddResponsibility}>
                        <AddButton style={{ color: "orange" }} />
                      </IconButton>
                    </div>
                  );
                })}
              </div>
              <div>
                <h4 style={{ marginBottom: 0, color: "#ccc" }} className="mb-2">
                  About this Job
                </h4>
                <TextField
                  required
                  id="outlined-multiline-flexible1"
                  label="About This Job"
                  name="about"
                  multiline
                  minRows={6}
                  style={{ width: "100%" }}
                  value={job.about}
                  onChange={handleJobInput}
                  InputLabelProps={{
                    style: { color: "#fff", borderColor: "#fff" },
                  }}
                />
              </div>
              <div>
                <h4 style={{ marginBottom: 0, color: "#ccc" }} className="mb-2">
                  Describe this Job
                </h4>
                <TextField
                  required
                  id="outlined-multiline-flexible1"
                  label="Describe this Job"
                  name="description"
                  multiline
                  minRows={6}
                  style={{ width: "100%" }}
                  value={job.description}
                  onChange={handleJobInput}
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
