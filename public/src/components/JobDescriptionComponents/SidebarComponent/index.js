import { Skeleton } from "@mui/material";
import axios from "axios";
import Moment from "moment";
import React, { useEffect, useState } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { MdOutlineMessage } from "react-icons/md";
import { toast } from "react-toastify";
import { applyForJob, checkAlreadyApplied } from "../../../utils/APIRoutes";
import {
  ApplyButton,
  ButtonContainer,
  ChatContainer,
  ChatInput,
  DisabledApplyButton,
  MessageButton,
  SaveButton,
  SectionWrapper,
} from "./Component";

function Sidebar({ job, isLoading }) {
  const [dataRecived, setDataRecived] = useState(false);
  const [allow, setAllow] = useState(false);
  const [jobData, setJobData] = useState({});
  const [user, setUser] = useState(null);
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  useEffect(() => {
    const cu = JSON.parse(localStorage.getItem("user"));
    setUser(cu);
    if (job) {
      axios
        .get(checkAlreadyApplied, {
          params: {
            jobId: job._id,
            userId: cu._id,
          },
        })
        .then((result) => {
          setJobData(result.data.data);
          setAllow(result.data.status);
          setDataRecived(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isLoading]);

  const handleApply = () => {
    const token = JSON.parse(localStorage.getItem("token"));
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .post(
        applyForJob,
        {
          params: {
            job: job._id,
            user: user._id,
          },
        },
        config
      )
      .then((result) => {
        toast.success(result.data.msg, toastOptions);
        window.location.reload();
      })
      .catch((err) => {
        toast.error(err, toastOptions);
        console.log(err);
      });
  };

  return (
    <SectionWrapper>
      <ButtonContainer>
        {isLoading ? (
          <Skeleton variant="rectangular">
            <ApplyButton
              to="/applicant/home"
              primary="true"
              dark="true"
            ></ApplyButton>
          </Skeleton>
        ) : dataRecived ? (
          allow ? (
            <ApplyButton
              to="/applicant/home"
              primary="true"
              dark="true"
              onClick={handleApply}
            >
              <AiOutlineCheckCircle /> Apply For This Job
            </ApplyButton>
          ) : (
            <div style={{ color: "white" }}>
              <DisabledApplyButton
                primary="true"
                dark="true"
                disabled={true}
                style={{ cursor: "not-allowed" }}
              >
                <AiOutlineCheckCircle /> Apply For This Job
              </DisabledApplyButton>
              You have already applied for this job on:{" "}
              <center>
                {" "}
                <b>
                  {" "}
                  {Moment(jobData.appliedDate).format("MMM Do YYYY")}{" "}
                </b>{" "}
              </center>
            </div>
          )
        ) : (
          <Skeleton variant="rectangular">
            <ApplyButton to="/applicant/home" primary="true" dark="true">
              <AiOutlineCheckCircle /> Apply For This Job
            </ApplyButton>
          </Skeleton>
        )}
        <SaveButton to="/applicant/home" primary="false" dark="true">
          <BsBookmark /> Save This Job
        </SaveButton>
      </ButtonContainer>

      <ChatContainer>
        <ChatInput
          name="message"
          rows="6"
          cols="38"
          placeholder="Enter your message"
        ></ChatInput>
        <MessageButton to="/applicant/home" primary="true" dark="true">
          <MdOutlineMessage /> Send Message
        </MessageButton>
      </ChatContainer>
    </SectionWrapper>
  );
}

export default Sidebar;
