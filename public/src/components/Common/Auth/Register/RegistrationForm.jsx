import { Box, Grid, Paper, TextField, Typography } from "@material-ui/core";
import React, { Component } from "react";
import { Styles } from "./styles";
import PropTypes from "prop-types";
import { withStyles } from "@mui/styles";
import { renderInputText, renderText } from "../DisplayComponent";

class RegistrationForm extends Component {
  state = {
    data: {
      firstName: "",
      lastName: "",
    },
    errors: {},
  };
  render() {
    const { classes } = this.props;
    const handleOnChange = ({ target }) => {
      const { data, errors } = this.state;
      target.value.length <= 3
        ? (errors[
            target.name
          ] = `Length of ${target.name} must be greater than 3`)
        : (errors[target.name] = "");
      data[target.name] = target.value;
      this.setState({ data, errors });
    };
    return (
      <div>
        <Grid container className={classes.formContainer}>
          <Grid item xs={12} sm={7}>
            <Box p={2} mb={2} component={Paper}>
              {renderText({ label: "Stepper" })}
            </Box>

            <Box mb={4} component={Paper}>
              <form className={classes.form}>
                <Box mt={2} mb={4}>
                  {renderText({ label: "Form Step 1" })}
                </Box>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    {renderInputText({
                      label: "First Name",
                      name: "firstName",
                      state: this.state,
                      handleOnChange,
                    })}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    {renderInputText({
                      label: "Last Name",
                      name: "lastName",
                      state: this.state,
                      handleOnChange,
                    })}
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Grid>
        </Grid>
      </div>
    );
  }
}

RegistrationForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(Styles)(RegistrationForm);
