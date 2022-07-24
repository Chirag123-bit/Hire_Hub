import { MenuItem, TextField } from "@mui/material";
import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
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

export const DetailsModal = ({
  showModal,
  setShowModal,
  job,
  handleJobInput,
  handleSubmit,
  closeModal,
  selectCountry,
  selectRegion,
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
                <h1 style={{ color: "white" }}>Update Your Company Details</h1>
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
                  label="Comapny's Name"
                  name="name"
                  style={{
                    width: "100%",
                    marginBottom: "1rem",
                    borderColor: "#fff !important",
                  }}
                  value={job.name}
                  onChange={handleJobInput}
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
                  label="Phone"
                  name="phone"
                  style={{ width: "100%", marginBottom: "1rem" }}
                  value={job.phone}
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
                  style={{ width: "100%", marginBottom: "1rem" }}
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
                <CountryDropdown
                  name="country"
                  label="country"
                  value={job.country}
                  onChange={(val) => selectCountry(val)}
                  style={{
                    width: "100%",
                    padding: "8.5px 14px",
                    background: "#1C1E27",
                    borderColor: "white",
                    color: "orange",
                    marginBottom: "1rem",
                  }}
                />

                <RegionDropdown
                  name="region"
                  label="region"
                  country={job.country}
                  value={job.region}
                  onChange={(val) => selectRegion(val)}
                  style={{
                    width: "100%",
                    padding: "8.5px 14px",
                    background: "#1C1E27",
                    borderColor: "white",
                    color: "orange",
                  }}
                />
              </div>

              <div>
                <h4 style={{ marginBottom: 0, color: "#ccc" }} className="mb-2">
                  About Your Company
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
                  Describe this Company
                </h4>
                <TextField
                  required
                  id="outlined-multiline-flexible1"
                  label="Describe this Company"
                  name="desc"
                  multiline
                  minRows={6}
                  style={{ width: "100%" }}
                  value={job.desc}
                  onChange={handleJobInput}
                  InputLabelProps={{
                    style: { color: "#fff", borderColor: "#fff" },
                  }}
                />
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={closeModal} size="md">
                Cancle
              </Button>
              <Button
                variant="success"
                onClick={handleSubmit}
                size="md"
                type="submit"
              >
                Update
              </Button>
            </Modal.Footer>
          </form>
        </Modal>
      ) : null}
    </>
  );
};
