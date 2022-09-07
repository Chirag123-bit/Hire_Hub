import axios from "axios";
import { motion } from "framer-motion";
import Moment from "moment";
import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BiDollar, BiHome, BiMap, BiTimeFive, BiUser } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  addEvent,
  addNewJob,
  addTodo,
  editJob,
  getEvent,
  getTodo,
} from "../../../utils/APIRoutes";
import EventsBar from "../Common/EventsBar";
import {
  ActionsDropDown,
  CreateButton,
  DashboardContainer,
  DisqualifyCard,
  DropBtn,
  DropDown,
  DropItem,
  DropLink,
  HeadContainer,
  HiredCard,
  InterviewCard,
  JobCardBody,
  JobCardHeader,
  JobContainer,
  JobInfoSide,
  JobInfoTop,
  JobsContainerRow,
  JobStatusCards,
  JobTitle,
  LowerHead,
  NegotiationCard,
  NewCandidateCard,
  RejectCard,
  SearchBar,
  SearchContainer,
  ShortlistCard,
  TaskCard,
  ThreeDots,
  Title,
  UpperHead,
} from "./Components";
import { EventsModal } from "./Events/EventModal";
import { JobEditModal } from "./JobEditModal/modal";
import { JobModal } from "./JobModal/modal";

function Dashboard({
  isOpen,
  company,
  loading,
  jobInfo,
  setSelectedJob,
  getCompanyJob,
}) {
  const navigate = useNavigate();
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const [event, setEvent] = useState({
    title: "",
    note: "Lorem Epsum",
    date: new Date(),
    startTime: "9:00",
    endTime: "10:00",
  });

  const handleEventDateInput = (e) => {
    setEvent({ ...event, date: e });
  };
  const handleStartInput = (e) => {
    setEvent({ ...event, startTime: e });
  };
  const handleEndInput = (e) => {
    setEvent({ ...event, endTime: e });
  };
  const handleEventInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setEvent({ ...event, [name]: value });
  };
  const handleTodoInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setTodo({ ...todo, [name]: value });
  };

  const handleOverview = (data) => {
    setSelectedJob(data);
    navigate("/employer/dashboard/job-post", {
      state: {
        data: data,
      },
    });
  };

  // const [skills, requirements, responsibilities] = [];
  var skills = [];
  var requirements = [];
  var responsibilities = [];

  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const openModal = () => {
    setAddJob({
      title: "",
      about: "",
      sallary: "",
      description: "",
      sector: "",

      skillSet: [{ skill: "" }],

      responsibilitiesSet: [{ responsibility: "" }],

      requirementsSet: [{ requirement: "" }],
      closeTime: "",
    });
    setShowModal((prev) => !prev);
  };

  const openEditModal = (job) => {
    var skillSets = job.skills.map((skill) => {
      return {
        skill: skill,
      };
    });
    var responsibilitySet = job.responsibilities.map((responsibility) => {
      return {
        responsibility: responsibility,
      };
    });
    var requirementsSet = job.requirements.map((requirement) => {
      return {
        requirement: requirement,
      };
    });
    const dt = new Date(job.closeDate);
    setAddJob({
      title: job.title,
      about: job.about,
      sallary: job.sallary,
      description: job.description,
      sector: job.sector,
      closeTime: dt,

      skillSet: skillSets,
      responsibilitiesSet: responsibilitySet,

      requirementsSet: requirementsSet,
    });
    setSelectedId(job._id);
    setShowEditModal(true);
  };
  const closeEditModal = () => {
    setShowEditModal(false);
  };
  const [showEventModal, setShowEventModal] = useState(false);
  const openEventModal = () => {
    setShowEventModal((prev) => !prev);
  };

  const closeModel = () => {
    setShowModal(false);
  };
  const closeEventModel = () => {
    setShowEventModal(false);
  };
  const [showTodoModal, setShowTodoModal] = useState(false);
  const openTodoModal = () => {
    setShowTodoModal((prev) => !prev);
  };

  const closeTodoModel = () => {
    setShowTodoModal(false);
  };

  //Fields required for adding Job
  const [addJob, setAddJob] = useState({
    title: "",
    about: "",
    sallary: "",
    description: "",
    sector: "",

    skillSet: [{ skill: "" }],

    responsibilitiesSet: [{ responsibility: "" }],

    requirementsSet: [{ requirement: "" }],
    closeTime: "",
  });

  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setAddJob({ ...addJob, [name]: value });
  };

  const handleDateInput = (e) => {
    setAddJob({ ...addJob, closeTime: e });
  };

  const handleEventSubmit = async (e) => {
    e.preventDefault();
    const token = await JSON.parse(localStorage.getItem("token"));
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .post(
        addEvent,
        {
          title: event.title,
          note: event.note,
          date: event.date,
          startTime: event.startTime,
          endTime: event.endTime,
        },
        config
      )
      .then((result) => {
        console.log(result);
        if (result.status === 200) {
          getEvents();
          closeEventModel();
          setEvent({
            title: "",
            note: "Lorem Epsum",
            date: new Date(),
            startTime: "9:00",
            endTime: "10:00",
          });
          toast.success("Event was added successfully", toastOptions);
        } else {
          toast.error(result.data.msg, toastOptions);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.msg, toastOptions);
      });
  };

  const [events, setEvents] = useState([]);
  const [todos, setTodos] = useState([]);
  const [loadingEvents, setLoadingEvents] = useState(false);
  const [loadingTodos, setLoadingTodos] = useState(false);

  const getEvents = async () => {
    setLoadingEvents(true);
    const token = await JSON.parse(localStorage.getItem("token"));
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get(getEvent, config)
      .then((result) => {
        console.log(result);
        if (result.status === 200) {
          setEvents(result.data.events);
        } else {
          toast.error("Error Fetching events", toastOptions);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Some Unknown error occured", toastOptions);
      });
    setLoadingEvents(false);
  };

  const getTodos = async () => {
    setLoadingTodos(true);
    const token = await JSON.parse(localStorage.getItem("token"));
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get(getTodo, config)
      .then((result) => {
        console.log(result);
        if (result.status === 200) {
          setTodos(result.data.todos);
        } else {
          toast.error("Error Fetching todos", toastOptions);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Some Unknown error occured", toastOptions);
      });
    setLoadingTodos(false);
  };

  const [todo, setTodo] = useState({
    title: "",
    note: "Lorem Epsum",
  });

  const handleTodoSubmit = async (e) => {
    e.preventDefault();
    const token = await JSON.parse(localStorage.getItem("token"));
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    if (todo.title === "") {
      toast.error("Please enter a title", toastOptions);
      return;
    }
    axios
      .post(
        addTodo,
        {
          title: todo.title,
          note: todo.note,
        },
        config
      )
      .then((result) => {
        console.log(result);
        if (result.status === 200) {
          getTodos();
          setTodo({
            title: "",
            note: "Lorem Epsum",
          });
          toast.success("Todo was added successfully", toastOptions);
        } else {
          toast.error(result.data.msg, toastOptions);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.msg, toastOptions);
      });
  };

  const handleAddSkill = () => {
    var newSkills = addJob.skillSet;
    newSkills.push({ skill: "" });
    setAddJob({ ...addJob, skillSet: newSkills });
  };

  const handleRemoveSkill = (index) => {
    var newSkills = addJob.skillSet;
    newSkills.splice(index, 1);
    setAddJob({ ...addJob, skillSet: newSkills });
  };

  const handleOnSkillChange = (e, index) => {
    var newSkills = addJob.skillSet;
    newSkills[index].skill = e.target.value;
    setAddJob({ ...addJob, skillSet: newSkills });
  };

  const handleAddRequirement = () => {
    var newSkills = addJob.requirementsSet;
    newSkills.push({ requirement: "" });
    setAddJob({ ...addJob, requirementsSet: newSkills });
  };

  const handleRemoveRequirement = (index) => {
    var newSkills = addJob.requirementsSet;
    newSkills.splice(index, 1);
    setAddJob({ ...addJob, requirementsSet: newSkills });
  };

  const handleOnResponsibilityChange = (e, index) => {
    var newSkills = addJob.responsibilitiesSet;
    newSkills[index].responsibility = e.target.value;
    setAddJob({ ...addJob, responsibilitiesSet: newSkills });
  };

  const handleAddResponsibility = () => {
    var newSkills = addJob.responsibilitiesSet;
    newSkills.push({ responsibility: "" });
    setAddJob({ ...addJob, responsibilitiesSet: newSkills });
  };

  const handleRemoveResponsibility = (index) => {
    var newSkills = addJob.responsibilitiesSet;
    newSkills.splice(index, 1);
    setAddJob({ ...addJob, responsibilitiesSet: newSkills });
  };

  const handleOnRequirementChange = (e, index) => {
    var newSkills = addJob.requirementsSet;
    newSkills[index].requirement = e.target.value;
    setAddJob({ ...addJob, requirementsSet: newSkills });
  };

  //Functions for extracting inputs
  const extractSkills = () => {
    addJob.skillSet.forEach(function (value) {
      if (value.skill !== "") skills.push(value.skill);
    });
  };
  const extractRequirements = () => {
    addJob.requirementsSet.forEach(function (value) {
      if (value.requirement !== "") requirements.push(value.requirement);
    });
  };
  const extractResponsibilities = () => {
    addJob.responsibilitiesSet.forEach(function (value) {
      if (value.responsibility !== "")
        responsibilities.push(value.responsibility);
    });
  };

  var monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const validateInputedData = () => {
    if (
      addJob.title === "" ||
      addJob.about === "" ||
      addJob.sallary === "" ||
      addJob.description === "" ||
      skills.length === 0 ||
      requirements.length === 0 ||
      responsibilities.length === 0 ||
      addJob.closeTime === "" ||
      addJob.sector === ""
    ) {
      toast.error("Please Fill all the fields", toastOptions);
      return false;
    } else {
      return true;
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    extractSkills();
    extractRequirements();
    extractResponsibilities();

    const title = addJob.title;
    const about = addJob.about;
    const sallary = addJob.sallary;
    const description = addJob.description;
    const closeTime = addJob.closeTime;
    const sector = addJob.sector;

    if (validateInputedData()) {
      const response = await axios.post(addNewJob, {
        title,
        about,
        sallary,
        description,
        skills,
        requirements,
        responsibilities,
        closeTime,
        company,
        sector,
      });

      if (response.data.success) {
        toast.success(response.data.msg, toastOptions);
        setAddJob({
          title: "",
          about: "",
          sallary: "",
          description: "",
          sector: "",

          skillSet: [{ skill: "" }],

          responsibilitiesSet: [{ responsibility: "" }],

          requirementsSet: [{ requirement: "" }],
          closeTime: "",
        });
        skills = [];
        responsibilities = [];
        requirements = [];
      } else {
        toast.error(response.data.msg, toastOptions);
      }
    }
  };
  const [selectedId, setSelectedId] = useState(null);
  const handleEditSubmit = async (event) => {
    event.preventDefault();
    extractSkills();
    extractRequirements();
    extractResponsibilities();
    const token = await JSON.parse(localStorage.getItem("token"));
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const title = addJob.title;
    const about = addJob.about;
    const sallary = addJob.sallary;
    const description = addJob.description;
    const closeTime = addJob.closeTime;
    const _id = selectedId;

    if (validateInputedData()) {
      try {
        const response = await axios.put(
          editJob,
          {
            title,
            about,
            sallary,
            description,
            skills,
            requirements,
            responsibilities,
            closeTime,
            _id,
          },
          config
        );
        console.log(response);

        if (response.data.success) {
          toast.success(response.data.msg, toastOptions);
          setAddJob({
            title: "",
            about: "",
            sallary: "",
            description: "",
            sector: "",

            skillSet: [{ skill: "" }],

            responsibilitiesSet: [{ responsibility: "" }],

            requirementsSet: [{ requirement: "" }],
            closeTime: "",
          });
          skills = [];
          responsibilities = [];
          requirements = [];
          getCompanyJob();
          closeEditModal();
        } else {
          getCompanyJob();

          toast.error(response.data.msg, toastOptions);
          closeEditModal();
        }
      } catch (err) {
        setAddJob({
          title: "",
          about: "",
          sallary: "",
          description: "",
          sector: "",

          skillSet: [{ skill: "" }],

          responsibilitiesSet: [{ responsibility: "" }],

          requirementsSet: [{ requirement: "" }],
          closeTime: "",
        });
        toast.error("Failed to update job details", toastOptions);
        closeEditModal();
      }
    }
  };

  useEffect(() => {
    getEvents();
    getTodos();
  }, []);

  return (
    <motion.div
      className="sideContent"
      animate={{
        maxWidth: isOpen ? "82%" : "92%",
        transition: { duration: 0.5, type: "spring", damping: 10 },
      }}
    >
      <DashboardContainer
        className="col-lg-7 col-xl-8 mb-4 mb-lg-0"
        style={{ width: "66%", minHeight: "100vh" }}
      >
        <HeadContainer>
          <UpperHead className="d-flex  justify-content-between">
            <Title className="mb-0">Dashboard</Title>
            <CreateButton
              type="button"
              className="btn btn-success btn-with-shadow mb-4"
              onClick={() => openModal("sth")}
            >
              <AiOutlinePlus /> Create New Job
            </CreateButton>
          </UpperHead>
          <LowerHead className="d-flex align-items-start justify-content-between">
            <DropDown
              name="typeSelect"
              id="typeSelect"
              className="selectpicker"
              data-live-search-style="begins"
              data-live-search="true"
            >
              <DropItem value="Active">Active Jobs</DropItem>
              <DropItem value="Inactive">Inactive Jobs</DropItem>
              <DropItem value="Draft">Draft Jobs</DropItem>
            </DropDown>
            <SearchContainer className="form-group form-group-with-search d-flex align-items-center">
              <FiSearch
                style={{
                  position: "absolute",
                  color: "white",
                  marginLeft: "0.7rem",
                }}
              />
              <SearchBar
                type="text"
                placeholder="Search"
                className="form-control"
              />
            </SearchContainer>
          </LowerHead>
        </HeadContainer>

        <JobsContainerRow className="row">
          {
            // Map through jobs and display them in the dashboard if not loading
            loading
              ? ""
              : jobInfo.map((jobDetail) => (
                  <JobContainer className="col-12">
                    <JobCardHeader className="bg-transparent d-flex justify-content-between align-items-center p-4">
                      <JobInfoTop className="d-flex flex-column">
                        <JobTitle className="text-capitalize mr-2">
                          {jobDetail.job.title}
                        </JobTitle>
                        <p className="text-secondary mb-1">
                          Last Submission Date:{" "}
                          {Moment(jobDetail.job.closeDate).format(
                            "MMM Do YYYY"
                          )}{" "}
                        </p>
                        <div className="text-secondary small d-inline-flex align-items-center">
                          <span style={{ marginRight: "0.3rem" }}>
                            <BiTimeFive />
                            Full Time
                          </span>
                          <span style={{ marginRight: "0.3rem" }}>
                            <BiMap />
                            {company.region}, {company.country}
                          </span>
                          <span style={{ marginRight: "0.3rem" }}>
                            <BiHome />
                            {jobDetail.job.skills[0]}, {jobDetail.job.skills[1]}
                          </span>
                          <span style={{ marginRight: "0.3rem" }}>
                            <BiDollar />
                            {jobDetail.job.sallary}/month
                          </span>
                          <span style={{ marginRight: "0.3rem" }}>
                            <BiUser /> {jobDetail.job.applicants.length}
                          </span>
                        </div>
                      </JobInfoTop>
                      <JobInfoSide className="dropdown options-dropdown">
                        <DropBtn
                          type="button"
                          data-toggle="dropdown"
                          className="btn-option btn d-flex align-items-center justify-content-center"
                          aria-expanded="false"
                        >
                          <ThreeDots />
                        </DropBtn>
                        <ActionsDropDown className="dropdown-menu dropdown-menu-right py-2 mt-1">
                          <DropLink
                            href="#"
                            className="dropdown-item px-4 py-2"
                          >
                            Preview
                          </DropLink>
                          <DropLink
                            href="#"
                            className="dropdown-item px-4 py-2"
                            onClick={() => openEditModal(jobDetail.job)}
                          >
                            Edit
                          </DropLink>
                          <DropLink
                            href="#"
                            className="dropdown-item px-4 py-2"
                          >
                            Sharable link
                          </DropLink>
                          <DropLink
                            href="#"
                            className="dropdown-item px-4 py-2"
                          >
                            Deactivate
                          </DropLink>
                          <DropLink
                            href="#"
                            className="dropdown-item px-4 py-2"
                          >
                            Delete
                          </DropLink>
                        </ActionsDropDown>
                      </JobInfoSide>
                    </JobCardHeader>
                    <JobCardBody className="p-4">
                      <JobStatusCards className="d-flex overflow-auto ">
                        <NewCandidateCard
                          className="card-widget candidates card"
                          style={{ marginBottom: "1rem", marginRight: "1rem" }}
                        >
                          <p
                            className="text-size-15 default-font-color mb-0"
                            style={{ color: "#cccdcd" }}
                          >
                            {jobDetail.applicants.New.length}
                          </p>
                          <p className="text-size-13 text-muted mb-0 text-capitalize">
                            New
                          </p>
                        </NewCandidateCard>
                        <InterviewCard
                          className="card-widget candidates card"
                          style={{ marginBottom: "1rem", marginRight: "1rem" }}
                        >
                          <p
                            className="text-size-15 default-font-color mb-0"
                            style={{ color: "#cccdcd" }}
                          >
                            {jobDetail.applicants.Interview.length}
                          </p>
                          <p className="text-size-13 text-muted mb-0 text-capitalize">
                            Interview
                          </p>
                        </InterviewCard>
                        <NegotiationCard
                          className="card-widget candidates card"
                          style={{ marginBottom: "1rem", marginRight: "1rem" }}
                        >
                          <p
                            className="text-size-15 default-font-color mb-0"
                            style={{ color: "#cccdcd" }}
                          >
                            {jobDetail.applicants.Negotiation.length}
                          </p>
                          <p className="text-size-13 text-muted mb-0 text-capitalize">
                            Negotiation
                          </p>
                        </NegotiationCard>
                        <ShortlistCard
                          className="card-widget candidates card"
                          style={{ marginBottom: "1rem", marginRight: "1rem" }}
                        >
                          <p
                            className="text-size-15 default-font-color mb-0"
                            style={{ color: "#cccdcd" }}
                          >
                            {jobDetail.applicants.Shortlist.length}
                          </p>
                          <p className="text-size-13 text-muted mb-0 text-capitalize">
                            Shortlist
                          </p>
                        </ShortlistCard>
                        <TaskCard
                          className="card-widget candidates card"
                          style={{ marginBottom: "1rem", marginRight: "1rem" }}
                        >
                          <p
                            className="text-size-15 default-font-color mb-0"
                            style={{ color: "#cccdcd" }}
                          >
                            {jobDetail.applicants.TaskPhase.length}
                          </p>
                          <p className="text-size-13 text-muted mb-0 text-capitalize">
                            Task Phase
                          </p>
                        </TaskCard>
                        <HiredCard
                          className="card-widget candidates card"
                          style={{ marginBottom: "1rem", marginRight: "1rem" }}
                        >
                          <p
                            className="text-size-15 default-font-color mb-0"
                            style={{ color: "#cccdcd" }}
                          >
                            {jobDetail.applicants.Hired.length}
                          </p>
                          <p className="text-size-13 text-muted mb-0 text-capitalize">
                            Hired
                          </p>
                        </HiredCard>
                        <RejectCard
                          className="card-widget candidates card"
                          style={{ marginBottom: "1rem", marginRight: "1rem" }}
                        >
                          <p
                            className="text-size-15 default-font-color mb-0"
                            style={{ color: "#cccdcd" }}
                          >
                            {jobDetail.applicants.Rejected.length}
                          </p>
                          <p className="text-size-13 text-muted mb-0 text-capitalize">
                            Rejected
                          </p>
                        </RejectCard>
                        <DisqualifyCard
                          className="card-widget candidates card"
                          style={{ marginBottom: "1rem", marginRight: "1rem" }}
                        >
                          <p
                            className="text-size-15 default-font-color mb-0"
                            style={{ color: "#cccdcd" }}
                          >
                            {jobDetail.applicants.Disqualified.length}
                          </p>
                          <p className="text-size-13 text-muted mb-0 text-capitalize">
                            Disqualified
                          </p>
                        </DisqualifyCard>
                      </JobStatusCards>
                      <div className="mt-3">
                        <button
                          type="button"
                          class="text-size-13 btn btn-sm btn-outline-primary px-3"
                          onClick={() => {
                            handleOverview(jobDetail);
                          }}
                        >
                          Overview
                        </button>
                      </div>
                    </JobCardBody>
                  </JobContainer>
                ))
          }
        </JobsContainerRow>
      </DashboardContainer>
      <EventsBar
        isOpen={isOpen}
        openModal={openEventModal}
        events={events}
        loading={loadingEvents}
        todos={todos}
        loadingTodos={loadingTodos}
        handleTodoInput={handleTodoInput}
        todo={todo}
        handleTodoSubmit={handleTodoSubmit}
        getTodos={getTodos}
      />
      {showModal && (
        <JobModal
          showModal={showModal}
          setShowModal={closeModel}
          job={addJob}
          handleJobInput={handleJobInput}
          handleAddSkill={handleAddSkill}
          handleRemoveSkill={handleRemoveSkill}
          handleAddRequirement={handleAddRequirement}
          handleRemoveRequirement={handleRemoveRequirement}
          handleOnSkillChange={handleOnSkillChange}
          handleOnRequirementChange={handleOnRequirementChange}
          handleOnResponsibilityChange={handleOnResponsibilityChange}
          handleAddResponsibility={handleAddResponsibility}
          handleRemoveResponsibility={handleRemoveResponsibility}
          handleDateInput={handleDateInput}
          handleSubmit={handleSubmit}
        />
      )}
      {showEditModal && (
        <JobEditModal
          showModal={showEditModal}
          setShowModal={closeModel}
          job={addJob}
          handleJobInput={handleJobInput}
          handleAddSkill={handleAddSkill}
          handleRemoveSkill={handleRemoveSkill}
          handleAddRequirement={handleAddRequirement}
          handleRemoveRequirement={handleRemoveRequirement}
          handleOnSkillChange={handleOnSkillChange}
          handleOnRequirementChange={handleOnRequirementChange}
          handleOnResponsibilityChange={handleOnResponsibilityChange}
          handleAddResponsibility={handleAddResponsibility}
          handleRemoveResponsibility={handleRemoveResponsibility}
          handleDateInput={handleDateInput}
          handleSubmit={handleEditSubmit}
          closeModel={closeEditModal}
        />
      )}

      {showEventModal && (
        <EventsModal
          showModal={showEventModal}
          setShowModal={closeModel}
          event={event}
          handleEventInput={handleEventInput}
          handleDateInput={handleEventDateInput}
          handleStartInput={handleStartInput}
          handleEndInput={handleEndInput}
          closeModel={closeEventModel}
          handleSubmit={handleEventSubmit}
        />
      )}
    </motion.div>
  );
}

export default Dashboard;
