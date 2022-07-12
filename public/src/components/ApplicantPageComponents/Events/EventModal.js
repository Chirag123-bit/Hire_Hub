import { TextField } from "@mui/material";
import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";
import "./events.css";

export const EventsModal = ({
  showModal,
  setShowModal,
  event,
  handleEventInput,
  handleDateInput,
  handleStartInput,
  handleEndInput,
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
                <TextField
                  required
                  id="outlined-multiline-flexible1"
                  label="Note"
                  name="note"
                  multiline
                  minRows={6}
                  style={{ width: "100%" }}
                  value={event.note}
                  onChange={handleEventInput}
                  InputLabelProps={{
                    style: { color: "#fff", borderColor: "#fff" },
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

//   <div>
//     <h4 style={{ marginBottom: 0, color: "#ccc" }} className="mb-2">
//       Skills Required
//     </h4>
//     <SkillHolder className="mb-2">
//       {/* <Skill style={{ background: "#0dcaf0" }}>Python</Skill> */}
//       {job.skillSet.map((skills, index) => {
//         return (
//           <div style={{ display: "flex", marginBottom: "1rem" }}>
//             <TextField
//               required
//               size="small"
//               name="skill"
//               label="Skill"
//               value={skills.skill}
//               onChange={(e) => {
//                 handleOnSkillChange(e, index);
//               }}
//               style={{ width: "90%", textTransform: "capitalize" }}
//               InputLabelProps={{
//                 style: { color: "#fff" },
//               }}
//               sx={{ input: { color: "orange !important" } }}
//             />
//             <IconButton onClick={() => handleRemoveSkill(index)}>
//               <RemoveButton style={{ color: "orange" }} />
//             </IconButton>
//             <IconButton onClick={handleAddSkill}>
//               <AddButton style={{ color: "orange" }} />
//             </IconButton>
//           </div>
//         );
//       })}
//     </SkillHolder>
//   </div>
//   <div>
//     <h4 style={{ marginBottom: 0, color: "#ccc" }} className="mb-2">
//       Job Requirements
//     </h4>
//     {job.requirementsSet.map((requirements, index) => {
//       return (
//         <div style={{ display: "flex", marginBottom: "1rem" }}>
//           <TextField
//             required
//             size="small"
//             name="requirement"
//             label="requirement"
//             value={requirements.requirement}
//             onChange={(e) => {
//               handleOnRequirementChange(e, index);
//             }}
//             style={{ width: "90%", textTransform: "capitalize" }}
//             InputLabelProps={{
//               style: { color: "#fff" },
//             }}
//             sx={{ input: { color: "orange !important" } }}
//           />
//           <IconButton
//             onClick={() => handleRemoveRequirement(index)}
//           >
//             <RemoveButton style={{ color: "orange" }} />
//           </IconButton>
//           <IconButton onClick={handleAddRequirement}>
//             <AddButton style={{ color: "orange" }} />
//           </IconButton>
//         </div>
//       );
//     })}
//   </div>
//   <div>
//     <h4 style={{ marginBottom: 0, color: "#ccc" }} className="mb-2">
//       Job Responsibilities
//     </h4>
//     {job.responsibilitiesSet.map((responsibilities, index) => {
//       return (
//         <div style={{ display: "flex", marginBottom: "1rem" }}>
//           <TextField
//             required
//             size="small"
//             name="responsibility"
//             label="responsibility"
//             value={responsibilities.responsibility}
//             onChange={(e) => {
//               handleOnResponsibilityChange(e, index);
//             }}
//             style={{ width: "90%", textTransform: "capitalize" }}
//             InputLabelProps={{
//               style: { color: "#fff" },
//             }}
//             sx={{ input: { color: "orange !important" } }}
//           />
//           <IconButton
//             onClick={() => handleRemoveResponsibility(index)}
//           >
//             <RemoveButton style={{ color: "orange" }} />
//           </IconButton>
//           <IconButton onClick={handleAddResponsibility}>
//             <AddButton style={{ color: "orange" }} />
//           </IconButton>
//         </div>
//       );
//     })}
//   </div>
//   <div>
//     <h4 style={{ marginBottom: 0, color: "#ccc" }} className="mb-2">
//       About this Job
//     </h4>
// <TextField
//   required
//   id="outlined-multiline-flexible1"
//   label="About This Job"
//   name="about"
//   multiline
//   minRows={6}
//   style={{ width: "100%" }}
//   value={job.about}
//   onChange={handleJobInput}
//   InputLabelProps={{
//     style: { color: "#fff", borderColor: "#fff" },
//   }}
// />
//   </div>
//   <div>
//     <h4 style={{ marginBottom: 0, color: "#ccc" }} className="mb-2">
//       Describe this Job
//     </h4>
//     <TextField
//       required
//       id="outlined-multiline-flexible1"
//       label="Describe this Job"
//       name="description"
//       multiline
//       minRows={6}
//       style={{ width: "100%" }}
//       value={job.description}
//       onChange={handleJobInput}
//       InputLabelProps={{
//         style: { color: "#fff", borderColor: "#fff" },
//       }}
//     />

//   </div>
