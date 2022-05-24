import { Box, Grid } from "@material-ui/core";
import React from "react";
import {
  renderButton,
  renderInputText,
  renderSelect,
  renderSelectType,
  renderText,
} from "../../DisplayComponent";
import "./styles.css";

export default function PersonalBio({ state, handleOnChange, handleNext }) {
  return (
    <>
      <Box mt={2} mb={4}>
        {renderText({ label: "Please Fill The Personal Details" })}
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          {renderInputText({
            label: "First Name",
            name: "firstName",
            state,
            handleOnChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderInputText({
            label: "Last Name",
            name: "lastName",
            state,
            handleOnChange,
          })}
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{ marginTop: "1rem" }}>
        <Grid item xs={12} sm={6}>
          {renderSelect({
            label: "Gender",
            name: "gender",
            state,
            handleOnChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderSelectType({
            label: "User Type",
            name: "type",
            state,
            handleOnChange,
          })}
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{ marginTop: "1rem" }}>
        <Grid item xs={12} sm={6}>
          {renderInputText({
            label: "Username",
            name: "username",
            state,
            handleOnChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderInputText({
            label: "Password",
            name: "password",
            state,
            handleOnChange,
            type: "password",
          })}
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{ marginTop: "1rem" }}>
        <Grid item xs={12} sm={6}>
          {renderInputText({
            label: "Phone Number",
            name: "phone",
            state,
            handleOnChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderInputText({
            label: "Email Address",
            name: "email",
            state,
            handleOnChange,
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
            label: "Next",
            variant: "outlined",
            handleNext: handleNext,
          })}
        </Box>
      </Grid>
    </>
  );
}
