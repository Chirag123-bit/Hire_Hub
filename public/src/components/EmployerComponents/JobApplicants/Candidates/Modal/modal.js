import React from "react";
import "./style.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ReactRoundedImage from "react-rounded-image";
import Profile from "../../../../../images/profile.jpg";
import {
  Skill,
  SkillHolder,
} from "../../../../ProfileComponents/CardComponent/Components";
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
} from "../../../../ProfileComponents/InformationComponent/Component";
import { FaBus } from "react-icons/fa";
import { IoLocationSharp, IoSchoolOutline } from "react-icons/io5";
import { BsCalendar2Date } from "react-icons/bs";

export const ApplicantModal = ({ showModal, setShowModal }) => {
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
              <div style={{ flex: 2 }}>
                <ReactRoundedImage
                  image={Profile}
                  roundedColor="rgb(4,93,233)"
                  imageWidth="110"
                  imageHeight="110"
                  roundedSize="0"
                  hoverColor="#DD1144"
                />
              </div>
              <div>
                <h4 style={{ marginBottom: 0, color: "#ccc" }}>
                  Chirag Simkhada
                </h4>{" "}
                <p className=" mb-0" style={{ color: "#ccc" }}>
                  Kathmandu, Nepal
                </p>{" "}
                <p className=" mb-2" style={{ color: "#ccc" }}>
                  chiragsimkhada@gmail.com
                </p>{" "}
                <small style={{ color: "#ccc" }}>Applied 04/22/2022</small>
              </div>
            </div>
          </Modal.Header>
          <Modal.Body style={{ backgroundColor: "#1d1f27" }}>
            <div>
              <h4 style={{ marginBottom: 0, color: "#ccc" }} className="mb-2">
                Top Skills
              </h4>
              <SkillHolder className="mb-2">
                <Skill style={{ background: "#0dcaf0" }}>Python</Skill>
                <Skill style={{ background: "#0dcaf0" }}>Django</Skill>
                <Skill style={{ background: "#0dcaf0" }}>React</Skill>
                <Skill style={{ background: "#0dcaf0" }}>HTML</Skill>
                <Skill style={{ background: "#0dcaf0" }}>CSS</Skill>
                <Skill style={{ background: "#0dcaf0" }}>JavaScript</Skill>
                <Skill style={{ background: "#0dcaf0" }}>Node</Skill>
                <Skill style={{ background: "#0dcaf0" }}>Java</Skill>
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
