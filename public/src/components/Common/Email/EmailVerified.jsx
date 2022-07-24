import React, { useEffect } from "react";
import styled from "styled-components";
import background from "../../../images/backup.jpg";
import Navbar from "../../OnboardingPageComponents/Navbar";

export default function EmailVerified() {
  useEffect(() => {
    //redirect after 5 seconds
    setTimeout(() => {
      window.location.href = "/";
    }, 5000);
  });
  return (
    <>
      <Navbar />
      <VerifiedContainer
        style={{
          background: `url(${background})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div style={{ backdropFilter: "blur(20px)" }}>
          <h2>Email has been verified</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="85"
            height="85"
            fill="currentColor"
            className="bi bi-check-circle-fill animated swing"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
          </svg>
          <h3>Redirecting Now!</h3>
        </div>
      </VerifiedContainer>
    </>
  );
}

const VerifiedContainer = styled.div`
  margin: 0;
  padding: 0;
  color: #fff;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  height: 100vh;
  display: flex;

  div {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 50%;
    align-items: center;
    padding-bottom: 25px;
    padding-top: 10px;
    align-self: center;
  }
  .animated {
    background-repeat: no-repeat;
    background-position: left top;
    -webkit-animation-duration: 10s;
    animation-duration: 10s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
  h2 {
    text-align: center;
    padding: 10px;
    width: 80%;
  }

  @keyframes swing {
    20% {
      transform: rotate(15deg);
    }
    40% {
      transform: rotate(-10deg);
    }
    60% {
      transform: rotate(5deg);
    }
    80% {
      transform: rotate(-5deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  .swing {
    -webkit-transform-origin: top center;
    transform-origin: top center;
    -webkit-animation-name: swing;
    animation-name: swing;
  }
`;
