import { Box, Grid } from "@material-ui/core";
import AddButton from "@material-ui/icons/Add";
import RemoveButton from "@material-ui/icons/Remove";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  IconButton,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  renderButton,
  renderText,
} from "../../../Common/Auth/DisplayComponent";
import "./styles.css";
const workTypes = [
  {
    value: "Full Time",
    label: "Full Time",
  },
  {
    value: "Part Time",
    label: "Part Time",
  },
];

export default function ProfessionalInfo({
  state,
  handleOnChange,
  handleNext,
  handlePrev,

  handleDateEdu,
  handleRemoveEdu,
  handleAddEdu,
  handleOnWorkChange,
  handleDateWork,
  handleAddWork,
  handleRemoveWork,
  handleOnEduChange,
}) {
  if (state.data.type == "Company")
    return (
      <>
        <Box mt={2} mb={4}>
          {renderText({ label: "Please Fill The Professional Details" })}
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              id="outlined-multiline-flexible"
              label="About Your Company"
              name="cabout"
              multiline
              minRows={6}
              style={{ width: "100%" }}
              value={state.data.cabout}
              onChange={handleOnChange}
              InputLabelProps={{
                style: { color: "#fff" },
              }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              id="outlined-multiline-flexible1"
              label="Describe your company"
              name="cdesc"
              multiline
              minRows={6}
              style={{ width: "100%" }}
              value={state.data.cdesc}
              onChange={handleOnChange}
              InputLabelProps={{
                style: { color: "#fff" },
              }}
            />
          </Grid>
        </Grid>

        <Grid
          container
          spacing={2}
          justifyContent="flex-end"
          style={{ marginTop: "1rem" }}
        >
          <Box p={2}>
            {renderButton({
              label: "Previous",
              variant: "outlined",
              handleNext: handlePrev,
            })}
          </Box>
          <Box p={2}>
            {renderButton({
              label: "Submit",
              variant: "outlined",
              handleNext: handleNext,
              type: "submit",
            })}
          </Box>
        </Grid>
      </>
    );
  else {
    return (
      <>
        <Box mt={2} mb={4}>
          {renderText({ label: "Please Fill The Professional Details" })}
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box mt={2} mb={1}>
              {renderText({ label: "Education Details" })}
            </Box>
            {state.data.educationSet.map((education, index) => {
              return (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    marginBottom: "1rem",
                  }}
                >
                  <Accordion
                    style={{
                      width: "85%",
                      background: "inherit",
                      border: "1px solid white",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography style={{ color: "white" }}>
                        Education details
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginBottom: "1rem",
                        }}
                      >
                        <TextField
                          name="etitle"
                          label="Degree Name"
                          value={education.etitle}
                          onChange={(e) => {
                            handleOnEduChange(e, "etitle", index);
                          }}
                          style={{ width: "45%" }}
                          size="small"
                          InputLabelProps={{
                            style: { color: "#fff" },
                          }}
                          sx={{ input: { color: "orange !important" } }}
                        />
                        <TextField
                          name="ecollege"
                          label="College Name"
                          value={education.ecollege}
                          onChange={(e) => {
                            handleOnEduChange(e, "ecollege", index);
                          }}
                          style={{ width: "45%" }}
                          size="small"
                          InputLabelProps={{
                            style: { color: "#fff" },
                          }}
                          sx={{ input: { color: "orange !important" } }}
                        />
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginBottom: "1rem",
                        }}
                      >
                        <div
                          style={{
                            width: "45%",
                            distplay: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <h6 style={{ color: "white" }}>Start Date</h6>
                          <ReactDatePicker
                            selected={education.estart}
                            onChange={(date) =>
                              handleDateEdu(date, index, "estart")
                            }
                            dateFormat="yyyy/MM/dd"
                            maxDate={new Date()}
                            showYearDropdown
                            showMonthDropdown
                            scrollableMonthYearDropdown
                          />
                        </div>
                        <div
                          style={{
                            width: "45%",
                            distplay: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <h6>End Date</h6>
                          <ReactDatePicker
                            selected={education.eend}
                            onChange={(date) =>
                              handleDateEdu(date, index, "eend")
                            }
                            dateFormat="yyyy/MM/dd"
                            showYearDropdown
                            showMonthDropdown
                            scrollableMonthYearDropdown
                            minDate={education.estart}
                          />
                        </div>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <IconButton onClick={() => handleRemoveEdu(index)}>
                      <RemoveButton />
                    </IconButton>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <IconButton onClick={handleAddEdu}>
                      <AddButton />
                    </IconButton>
                  </div>
                </div>
              );
            })}
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box mt={2} mb={1}>
              {renderText({ label: "Work Experience" })}
            </Box>
            {state.data.workSet.map((work, index) => {
              return (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    marginBottom: "1rem",
                  }}
                >
                  <Accordion
                    style={{
                      width: "85%",
                      background: "inherit",
                      border: "1px solid white",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography style={{ color: "white" }}>
                        Job Detail
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <TextField
                        name="wtitle"
                        label="Job Title"
                        value={work.wtitle}
                        onChange={(e) => {
                          handleOnWorkChange(e, "wtitle", index);
                        }}
                        style={{ width: "100%" }}
                        size="small"
                        InputLabelProps={{
                          style: { color: "#fff" },
                        }}
                        sx={{ input: { color: "orange !important" } }}
                      />
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginBottom: "1rem",
                          marginTop: "2rem",
                        }}
                      >
                        <TextField
                          name="wcompany"
                          label="Company's Name"
                          value={work.wcompany}
                          onChange={(e) => {
                            handleOnWorkChange(e, "wcompany", index);
                          }}
                          style={{ width: "45%" }}
                          size="small"
                          InputLabelProps={{
                            style: { color: "#fff" },
                          }}
                          sx={{ input: { color: "orange !important" } }}
                        />
                        <TextField
                          name="wlocation"
                          label="Company's Location"
                          value={work.wlocation}
                          onChange={(e) => {
                            handleOnWorkChange(e, "wlocation", index);
                          }}
                          style={{ width: "45%" }}
                          size="small"
                          InputLabelProps={{
                            style: { color: "#fff" },
                          }}
                          sx={{ input: { color: "orange !important" } }}
                        />
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginBottom: "1rem",
                          marginTop: "1rem",
                        }}
                      >
                        <TextField
                          id="outlined-select-type"
                          select
                          label="Work Type"
                          name="wtype"
                          value={work.wtype}
                          onChange={(e) => {
                            handleOnWorkChange(e, "wtype", index);
                          }}
                          variant="outlined"
                          style={{ width: "100%" }}
                          size="small"
                          InputLabelProps={{
                            style: { color: "#fff" },
                          }}
                          sx={{ input: { color: "orange !important" } }}
                        >
                          {workTypes.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </TextField>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginBottom: "1rem",
                        }}
                      >
                        <div
                          style={{
                            width: "45%",
                            distplay: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <h6 style={{ color: "white" }}>Start Date</h6>
                          <ReactDatePicker
                            selected={work.wstart}
                            onChange={(date) =>
                              handleDateWork(date, index, "wstart")
                            }
                            dateFormat="yyyy/MM/dd"
                            maxDate={new Date()}
                            showYearDropdown
                            showMonthDropdown
                            scrollableMonthYearDropdown
                          />
                        </div>
                        <div
                          style={{
                            width: "45%",
                            distplay: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <h6 style={{ color: "white" }}>End Date</h6>
                          <ReactDatePicker
                            selected={work.wend}
                            onChange={(date) =>
                              handleDateWork(date, index, "wend")
                            }
                            dateFormat="yyyy/MM/dd"
                            showYearDropdown
                            showMonthDropdown
                            scrollableMonthYearDropdown
                            minDate={work.wstart}
                          />
                        </div>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <IconButton onClick={() => handleRemoveWork(index)}>
                      <RemoveButton />
                    </IconButton>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <IconButton onClick={handleAddWork}>
                      <AddButton />
                    </IconButton>
                  </div>
                </div>
              );
            })}
          </Grid>
        </Grid>

        <Grid
          container
          spacing={2}
          justifyContent="flex-end"
          style={{ marginTop: "1rem" }}
        >
          <Box p={2}>
            {renderButton({
              label: "Previous",
              variant: "outlined",
              handleNext: handlePrev,
            })}
          </Box>
          <Box p={2}>
            {renderButton({
              label: "Submit",
              variant: "outlined",
              handleNext: handleNext,
              type: "submit",
            })}
          </Box>
        </Grid>
      </>
    );
  }
}
