import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { io } from "socket.io-client";
import { host } from "../utils/APIRoutes";
import Peer from "peerjs";

export default function VideoCall() {
  const navigate = useNavigate();
  const socket = useRef();
  const params = useParams();
  const roomID = params.roomId;

  var currentUser;
  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/login");
    }
  }, []);
  try {
    currentUser = JSON.parse(localStorage.getItem("user"));
  } catch (e) {
    console.log(e);
  }
  useEffect(() => {
    if (currentUser) {
      socket.current = io(host);
      console.log("Loaded");
    }
  }, [currentUser]);

  // useEffect(() => {
  //   socket.current.emit("join-room", {
  //     roomId: roomID,
  //     userId: currentUser._id,
  //   });
  //   socket.current.on("user-connected", (userId) => {
  //     console.log("User Connected", userId);
  //   });
  // }, []);

  const myPeer = new Peer(undefined, {
    host: "/",
    port: "3001",
  });

  myPeer.on("open", (id) => {
    socket.current.emit("join-room", {
      roomId: roomID,
      userId: currentUser._id,
    });
  });

  return <div id="video_grid">{roomID}</div>;
}

const video_grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-auto-rows: 300px;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
