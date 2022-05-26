import AddButton from "@material-ui/icons/Add";
import RemoveButton from "@material-ui/icons/Remove";
import { IconButton, TextField } from "@mui/material";
import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { BsCalendar2Date } from "react-icons/bs";
import { FaBus } from "react-icons/fa";
import { IoLocationSharp, IoSchoolOutline } from "react-icons/io5";
import { SkillHolder } from "../../../ProfileComponents/CardComponent/Components";
import {
  Address,
  Company,
  Date,
  JobTitle,
  JobType,
  Listing,
  Location,
  Summary,
  TitleListing,
  TypeDateListing,
} from "../../../ProfileComponents/InformationComponent/Component";
import "./style.css";

export const JobModal = ({
  showModal,
  setShowModal,
  job,
  handleJobInput,
  handleAddSkill,
  handleRemoveSkill,
  handleOnSkillChange,
}) => {
  return (
    <>
      {showModal ? (
        <Modal show={showModal} onHide={setShowModal} className="modalStyle">
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
                Skills Required
              </h4>
              <SkillHolder className="mb-2">
                {/* <Skill style={{ background: "#0dcaf0" }}>Python</Skill> */}
                {job.skillSet.map((skills, index) => {
                  return (
                    <div style={{ display: "flex", marginBottom: "1rem" }}>
                      <TextField
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
                Professional Summary
              </h4>
              <Summary
                style={{ margin: "auto", maxWidth: "70%", color: "#ccc" }}
              >
                On the other hand, we denounce with righteous indignation and
                dislike men who are so beguiled and demoralized by the charms of
                pleasure of the moment, so blinded by desire, that they cannot
                foresee the pain and trouble that are bound to ensue; and equal
                blame belongs to those who fail in their duty through weakness
                of will, which is the same as saying through shrinking from toil
                and pain. These cases are perfectly simple and easy to
                distinguish. In a free hour, when our power of choice is
                untrammelled and when nothing prevents our being able to do what
                we like best, every pleasure is to be welcomed and every pain
                avoided. But in certain circumstances and owing to the claims of
                duty or the obligations of business it will frequently occur
                that pleasures have to be repudiated and annoyances accepted.
                The wise man therefore always holds in these matters to this
                principle of selection: he rejects pleasures to
              </Summary>
            </div>

            <div>
              <h4 style={{ marginBottom: 0, color: "#ccc" }} className="mb-2">
                Work Experience
              </h4>
              <Listing
                style={{ maxWidth: "70%", margin: "auto", borderColor: "#ccc" }}
                className="pb-2 mt-2"
              >
                <TitleListing>
                  <JobTitle style={{ color: "#ccc" }}>
                    Backend Developer
                  </JobTitle>
                  <Location>
                    <Company style={{ color: "#ccc" }}>
                      <FaBus /> Apple Inc
                    </Company>
                    <Address style={{ color: "#ccc" }}>
                      <IoLocationSharp /> Los Angeles
                    </Address>
                  </Location>
                </TitleListing>
                <TypeDateListing>
                  <JobType style={{ background: "#198754", color: "#ccc" }}>
                    Full Time
                  </JobType>
                  <Date style={{ color: "#ccc" }}>
                    <BsCalendar2Date /> April 2020 - May 2022
                  </Date>
                </TypeDateListing>
              </Listing>
              <Listing
                style={{ maxWidth: "70%", margin: "auto", borderColor: "#ccc" }}
                className="pb-2 mt-2"
              >
                <TitleListing>
                  <JobTitle style={{ color: "#ccc" }}>
                    Backend Developer
                  </JobTitle>
                  <Location>
                    <Company style={{ color: "#ccc" }}>
                      <FaBus /> Apple Inc
                    </Company>
                    <Address style={{ color: "#ccc" }}>
                      <IoLocationSharp /> Los Angeles
                    </Address>
                  </Location>
                </TitleListing>
                <TypeDateListing>
                  <JobType style={{ background: "#198754", color: "#ccc" }}>
                    Full Time
                  </JobType>
                  <Date style={{ color: "#ccc" }}>
                    <BsCalendar2Date /> April 2020 - May 2022
                  </Date>
                </TypeDateListing>
              </Listing>
            </div>
            <div>
              <h4 style={{ marginBottom: 0, color: "#ccc" }} className="mb-2">
                Domain Education
              </h4>
              <Listing
                style={{ maxWidth: "70%", margin: "auto", borderColor: "#ccc" }}
                className="pb-2 mt-2"
              >
                <TitleListing>
                  <JobTitle style={{ color: "#ccc" }}>
                    Masters in Information Technology
                  </JobTitle>
                  <Location>
                    <Company style={{ color: "#ccc" }}>
                      <IoSchoolOutline /> Massechusets Instityue of Technology
                    </Company>
                  </Location>
                </TitleListing>
                <TypeDateListing>
                  <Date style={{ color: "#ccc" }}>
                    <BsCalendar2Date style={{ color: "#ccc" }} /> April 2020 -
                    May 2022
                  </Date>
                </TypeDateListing>
              </Listing>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={setShowModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      ) : null}
    </>
  );
};
