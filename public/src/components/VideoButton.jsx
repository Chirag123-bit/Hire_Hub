import React, { useState } from "react";
import styled from "styled-components";
import { BiVideo } from "react-icons/bi";
import { videoCall } from "../utils/APIRoutes";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

export default function VideoButton({ currentUser, inCall, setInCall }) {
  let navigate = useNavigate();
  const handleClick = async () => {
    // const roomId = uuid();
    setInCall(true);

    navigate("/videoCall");
  };

  return (
    <Button onClick={handleClick}>
      <BiVideo />
    </Button>
  );
}

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: #9a86f3;
  border: none;
  cursor: pointer;
  svg {
    font-size: 1.3rem;
    color: #ebe7ff;
  }
`;
