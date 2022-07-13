import { Box, Grid, Paper } from "@material-ui/core";
import { Step, StepLabel, Stepper } from "@mui/material";
import { withStyles } from "@mui/styles";
import axios from "axios";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { toast } from "react-toastify";
import background from "../../../images/background.png";
import { registerRoute, userUpdateRoute } from "../../../utils/APIRoutes";
import { renderText } from "../../Common/Auth/DisplayComponent";
import AdditionlInfo from "./FormSteps/AdditionalInformation";
import PersonalBio from "./FormSteps/PersonalBio";
import ProfessionalInfo from "./FormSteps/ProfessionalInformation";
import { Styles } from "./styles";

class ProfileUpdateForm extends Component {
  toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  handleUserValidation = () => {
    const { skillSet, educationSet, sector, summary, gender, type } =
      this.state.data;
    console.log(skillSet);
    if (skillSet.length < 1 || skillSet[0].skill === "") {
      toast.error("Please add atleast one skill", this.toastOptions);
      return false;
    } else if (educationSet.length < 1 || educationSet[0].skill === "") {
      toast.error(
        "Please add atleast one education background",
        this.toastOptions
      );
      return false;
    } else if (sector === "") {
      toast.error("Please specify your sector", this.toastOptions);
      return false;
    } else if (summary === "") {
      toast.error("Please tell us about yourself(Summary)", this.toastOptions);
      return false;
    } else if (gender === "") {
      toast.error("Please select your gender", this.toastOptions);
      return false;
    } else if (type === "") {
      toast.error("Please specify your user type", this.toastOptions);
      return false;
    }
    return true;
  };

  handleCompanyValidation = () => {
    const { gender, type, cabout, cdesc, cname, country, csector, region } =
      this.state.data;
    if (csector === "") {
      toast.error("Please specify your sector", this.toastOptions);
      return false;
    } else if (gender === "") {
      toast.error("Please specify your sector", this.toastOptions);
      return false;
    } else if (type === "") {
      toast.error("Please specify your user type", this.toastOptions);
      return false;
    } else if (cabout === "") {
      toast.error("Please tell us about your company", this.toastOptions);
      return false;
    } else if (cdesc === "") {
      toast.error("Please describe your company", this.toastOptions);
      return false;
    } else if (cname === "") {
      toast.error("Please enter your company's name", this.toastOptions);
      return false;
    } else if (country === "") {
      toast.error("Please select your company", this.toastOptions);
      return false;
    } else if (region === "") {
      toast.error("Please select your region", this.toastOptions);
      return false;
    }
    return true;
  };
  extractSkills = () => {
    const { data } = this.state;
    data.skillSet.forEach(function (value) {
      if (value.skill !== "") data.skills.push(value.skill);
    });
    this.setState({ data });
  };
  extractWorks = () => {
    const { data } = this.state;
    data.workSet.forEach(function (value) {
      data.work.push(value.skill);
    });
    this.setState({ data });
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    const token = JSON.parse(localStorage.getItem("token"));
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const stateData = this.state.data;
    let firstName = stateData.firstName;
    let lastName = stateData.lastName;
    let gender = stateData.gender;
    let phone = stateData.phone;
    let email = stateData.email;
    let type = stateData.type;
    let username = stateData.username;
    let password = stateData.password;

    if (type === "") {
      toast.error("Please select your type", this.toastOptions);
    }

    if (type === "Applicant") {
      if (this.handleUserValidation()) {
        this.extractSkills();
        let title = stateData.title;
        let skills = stateData.skills;
        let sector = stateData.sector;
        let summary = stateData.summary;
        let workSet = stateData.workSet;
        let educationSet = stateData.educationSet;

        const { data } = await axios.post(
          userUpdateRoute,
          {
            firstName,
            lastName,
            gender,
            phone,
            email,
            type,
            username,
            password,
            title,
            skills,
            sector,
            summary,
            workSet,
            educationSet,
          },
          config
        );
        if (data.status === false) {
          toast.error(data.msg, this.toastOptions);
        } else {
          toast.success("Details Updated Successfully", this.toastOptions);
          localStorage.setItem("user", JSON.stringify(data.user));
        }
      }
    } else if (type === "Company") {
      if (this.handleCompanyValidation()) {
        let c_name = stateData.cname;
        let csector = stateData.csector;
        let country = stateData.country;
        let region = stateData.region;
        let cabout = stateData.cabout;
        let cdesc = stateData.cdesc;
        let workSet = stateData.workSet;
        let educationSet = stateData.educationSet;

        const { data } = await axios.post(registerRoute, {
          firstName,
          lastName,
          gender,
          phone,
          email,
          type,
          username,
          password,

          c_name,
          csector,
          country,
          region,
          cabout,
          cdesc,
          workSet,
          educationSet,
        });
        if (data.status === false) {
          toast.error(data.msg, this.toastOptions);
        } else {
          toast.success(data.msg, this.toastOptions);
          localStorage.setItem("user", JSON.stringify(data.user));
          localStorage.setItem("company", JSON.stringify(data.company));
        }
      }
    }
  };
  user = JSON.parse(localStorage.getItem("user"));
  state = {
    data: {
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      gender: this.user.gender,
      phone: this.user.phone,
      email: this.user.email,
      type: this.user.type,
      username: this.user.username,

      cname: "",
      country: "",
      region: "",
      cabout: "",
      cdesc: "",

      csector: "",

      title: this.user.professional.title,
      summary: this.user.professional.summary,
      skills: [],
      skillSet:
        this.user.professional.skills.length > 0
          ? this.user.professional.skills.map((skill) => {
              return { skill: skill };
            })
          : [{ skill: "" }],

      sector: this.user.professional.sector,

      work: [],
      workSet:
        this.user.additional[0].experience.length > 0
          ? this.user.additional[0].experience.map((work) => {
              console.log(work);
              return {
                wtitle: work.job_title,
                wcompany: work.company,
                wlocation: work.company_location,
                wtype: work.work_type,
                wstart: new Date(work.startDate),
                wend: new Date(work.endDate),
              };
            })
          : [
              {
                wtitle: "",
                wcompany: "",
                wlocation: "",
                wtype: "",
                wstart: "",
                wend: "",
              },
            ],

      education: [],
      educationSet:
        this.user.additional[0].education.length > 0
          ? this.user.additional[0].education.map((edu) => {
              return {
                etitle: edu.degree,
                ecollege: edu.college,
                estart: new Date(edu.startDate),
                eend: new Date(edu.endDate),
              };
            })
          : [{ etitle: "", ecollege: "", estart: "", eend: "" }],
      // educationSet: [{ etitle: "", ecollege: "", estart: "", eend: "" }],
    },
    errors: {},
    currentStep: 0,
    redirect: null,
  };
  render() {
    console.log(this.state.data.skillSet);
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

    const handleOnSkillChange = (e, index) => {
      const { data, errors } = this.state;
      e.target.value.length <= 2
        ? (errors[
            e.target.name
          ] = `Length of ${e.target.name} must be greater than 3`)
        : (errors[e.target.name] = "");
      data.skillSet[index].skill = e.target.value;
      this.setState({ data, errors });
    };

    const handleOnWorkChange = (e, property, index) => {
      const { data, errors } = this.state;
      e.target.value.length <= 0
        ? (errors[e.target.name] = ` ${e.target.name} must not be null`)
        : (errors[e.target.name] = "");
      data.workSet[index][property] = e.target.value;
      this.setState({ data, errors });
    };
    const handleOnEduChange = (e, property, index) => {
      const { data, errors } = this.state;
      e.target.value.length <= 0
        ? (errors[e.target.name] = ` ${e.target.name} must not be null`)
        : (errors[e.target.name] = "");
      data.educationSet[index][property] = e.target.value;
      this.setState({ data });
    };

    const handleAddSkill = () => {
      const { data, errors } = this.state;
      data.skillSet = [...data.skillSet, { skill: "" }];
      this.setState({ data, errors });
    };
    const handleAddEdu = () => {
      const { data, errors } = this.state;
      data.educationSet = [
        ...data.educationSet,
        { etitle: "", ecollege: "", estart: "", eend: "" },
      ];
      this.setState({ data, errors });
    };
    const handleAddWork = () => {
      const { data, errors } = this.state;
      data.workSet = [
        ...data.workSet,
        {
          wtitle: "",
          wcompany: "",
          wlocation: "",
          wtype: "",
          wstart: "",
          wend: "",
        },
      ];
      this.setState({ data, errors });
    };

    const handleRemoveWork = (index) => {
      const { data, errors } = this.state;
      const values = [...data.workSet];
      values.splice(index, 1);
      data.workSet = values;
      this.setState({ data, errors });
    };
    const handleRemoveEdu = (index) => {
      const { data, errors } = this.state;
      const values = [...data.educationSet];
      values.splice(index, 1);
      data.educationSet = values;
      this.setState({ data, errors });
    };
    const handleRemoveSkill = (index) => {
      const { data, errors } = this.state;
      const values = [...data.skillSet];
      values.splice(index, 1);
      data.skillSet = values;
      this.setState({ data, errors });
    };

    const handleNext = () => {
      let { currentStep } = this.state;
      currentStep = currentStep + 1;
      this.setState({ currentStep });
    };
    const handleDateEdu = (date, index, type) => {
      const { data, errors } = this.state;
      data.educationSet[index][type] = date;
      this.setState({ data, errors });
    };
    const handleDateWork = (date, index, type) => {
      const { data, errors } = this.state;
      data.workSet[index][type] = date;
      this.setState({ data, errors });
    };
    const handlePrev = () => {
      let { currentStep } = this.state;
      currentStep = currentStep - 1;
      this.setState({ currentStep });
    };
    const selectCountry = (val) => {
      this.state.data.country = val;
      this.setState({ country: val });
    };

    const selectRegion = (val) => {
      this.state.data.region = val;
      this.setState({ region: val });
    };
    const steps = [
      { label: "Personal Bio" },
      { label: "Additional Information" },
      { label: "Professional Information" },
    ];

    const getStepsItems = (steps) => {
      switch (steps) {
        case 0:
          return (
            <PersonalBio
              state={this.state}
              handleOnChange={handleOnChange}
              handleNext={handleNext}
            />
          );
        case 1:
          return (
            <AdditionlInfo
              state={this.state}
              handleOnChange={handleOnChange}
              handleNext={handleNext}
              handlePrev={handlePrev}
              selectCountry={selectCountry}
              selectRegion={selectRegion}
              handleOnSkillChange={handleOnSkillChange}
              handleAddSkill={handleAddSkill}
              handleRemoveSkill={handleRemoveSkill}
            />
          );
        case 2:
          return (
            <ProfessionalInfo
              state={this.state}
              handleOnChange={handleOnChange}
              handleFinish={handleNext}
              handlePrev={handlePrev}
              handleDateEdu={handleDateEdu}
              handleAddEdu={handleAddEdu}
              handleRemoveEdu={handleRemoveEdu}
              handleOnWorkChange={handleOnWorkChange}
              handleDateWork={handleDateWork}
              handleRemoveWork={handleRemoveWork}
              handleOnEduChange={handleOnEduChange}
              handleAddWork={handleAddWork}
            />
          );
        default:
          return (
            <PersonalBio
              state={this.state}
              handleOnChange={handleOnChange}
              handleNext={handleNext}
            />
          );
      }
    };
    return (
      <div>
        <Grid
          container
          className={classes.formContainer}
          style={{
            background: `url(${background})`,
          }}
        >
          <Grid item xs={12} sm={7}>
            <Paper className={classes.transparent}>
              <Box
                p={2}
                mb={2}
                component={Paper}
                style={{ background: "transparent" }}
                // className={classes.transparent}
              >
                <Box mb={1}>
                  {renderText({
                    label: "HireHub Registration Form",
                    variant: "h5",
                  })}
                </Box>
                <Stepper activeStep={this.state.currentStep} alternativeLabel>
                  {steps.map((item, i) => (
                    <Step key={i}>
                      <StepLabel style={{ color: "orange !important" }}>
                        {item.label}
                      </StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </Box>
            </Paper>

            <Box mb={16} component={Paper} className={classes.transparent}>
              <form
                className={classes.form}
                onSubmit={(event) => this.handleSubmit(event)}
              >
                {getStepsItems(this.state.currentStep)}
              </form>
            </Box>
          </Grid>
        </Grid>
      </div>
    );
  }
}

ProfileUpdateForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(Styles)(ProfileUpdateForm);
