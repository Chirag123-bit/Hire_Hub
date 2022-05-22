import React from "react";
import { Box, Grid } from "@material-ui/core";
import {
  renderInputText,
  renderButton,
  renderText,
  renderSelectSector,
} from "../../DisplayComponent";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import { Button, IconButton, TextField } from "@mui/material";
import RemoveButton from "@material-ui/icons/Remove";
import AddButton from "@material-ui/icons/Add";
import { v4 as uuid } from "uuid";

export default function AdditionlInfo({
  state,
  handleOnChange,
  handleNext,
  selectCountry,
  selectRegion,
  handlePrev,
  handleOnSkillChange,
  handleRemoveSkill,
  handleAddSkill,
  setProfile,
}) {
  if (state.data.type == "Company")
    return (
      <>
        <Box mt={2} mb={4}>
          {renderText({ label: "Please Fill The Additional Details" })}
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {renderInputText({
              label: "Comapny Name",
              name: "cname",
              state,
              handleOnChange,
            })}
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {renderSelectSector({
              label: "Sector",
              name: "csector",
              state,
              handleOnChange,
            })}
          </Grid>
        </Grid>
        <Grid container spacing={2} style={{ marginTop: "1rem" }}>
          <Grid item xs={12} sm={6}>
            <CountryDropdown
              name="country"
              label="country"
              value={state.data.country}
              onChange={(val) => selectCountry(val)}
              style={{ width: "100%", padding: "8.5px 14px" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <RegionDropdown
              name="region"
              label="region"
              country={state.data.country}
              value={state.data.region}
              onChange={(val) => selectRegion(val)}
              style={{ width: "100%", padding: "8.5px 14px" }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} style={{ marginTop: "1rem" }}>
          <Grid item xs={12} sm={6}>
            <input
              accept="image/*"
              id="raised-button-file"
              type="file"
              onChange={(e) => {
                setProfile(e.target.files[0]);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <label htmlFor="raised-button-file">
              <Button variant="outlined" component="span" color="secondary">
                Upload Your Profile Picture
              </Button>
            </label>
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
              label: "Next",
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
          {renderText({ label: "Please Fill The Additional Details" })}
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {renderInputText({
              label: "Your Job Title",
              name: "title",
              state,
              handleOnChange,
            })}
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {renderSelectSector({
              label: "Sector",
              name: "sector",
              state,
              handleOnChange,
            })}
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {state.data.skillSet.map((skills, index) => {
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
                  />
                  <IconButton onClick={() => handleRemoveSkill(index)}>
                    <RemoveButton />
                  </IconButton>
                  <IconButton onClick={handleAddSkill}>
                    <AddButton />
                  </IconButton>
                </div>
              );
            })}
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              id="outlined-multiline-flexible12"
              label="Describe yourself"
              name="summary"
              multiline
              minRows={6}
              style={{ width: "100%" }}
              value={state.data.summary}
              onChange={handleOnChange}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} style={{ marginTop: "1rem" }}>
          <Grid item xs={12} sm={6}>
            <input
              accept="image/*"
              id="raised-button-file"
              type="file"
              onChange={(e) => {
                setProfile(e.target.files[0]);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <label htmlFor="raised-button-file">
              <Button variant="outlined" component="span" color="secondary">
                Upload Your Profile Picture
              </Button>
            </label>
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
              label: "Next",
              variant: "outlined",
              handleNext: handleNext,
            })}
          </Box>
        </Grid>
      </>
    );
  }
}
