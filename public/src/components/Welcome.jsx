import React from "react";
import styled from "styled-components";
import Robot from "../images/robot.gif";
export default function Welcome({ currentUser }) {
  return (
    <Container>
      <img src={Robot} alt="robot" />
      <h1>
        Welcome, <span>{currentUser.username}!</span>
      </h1>
      <h3>Please select a chat to start messaging</h3>
    </Container>
  );
}

const Container = styled.div`
  /* display: flex; */
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;
