import React from "react";
import { Box, Grid } from "@material-ui/core";
import { renderButton, renderText } from "../../DisplayComponent";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import RemoveButton from "@material-ui/icons/Remove";
import AddButton from "@material-ui/icons/Add";

export default function ProfessionalInfo({
  state,
  handleOnChange,
  handleNext,
  handlePrev,
  handleOnSkillChange,
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
                  <Accordion style={{ width: "85%" }}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>Education details</Typography>
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
                          <h6>Start Date</h6>
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
                          <h6>Start Date</h6>
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
                  <IconButton onClick={() => handleRemoveEdu(index)}>
                    <RemoveButton />
                  </IconButton>
                  <IconButton onClick={handleAddEdu}>
                    <AddButton />
                  </IconButton>
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
                  <Accordion style={{ width: "85%" }}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>Job Detail</Typography>
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
                          <h6>Start Date</h6>
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
                          <h6>End Date</h6>
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
                  <IconButton onClick={() => handleRemoveWork(index)}>
                    <RemoveButton />
                  </IconButton>
                  <IconButton onClick={handleAddWork}>
                    <AddButton />
                  </IconButton>
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
            })}
          </Box>
        </Grid>
      </>
    );
  }
}
