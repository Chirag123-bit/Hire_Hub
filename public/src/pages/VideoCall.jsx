import React, { Component, useEffect, useRef, useState } from "react";
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
  const myPeer = new Peer(undefined, {
    host: "/",
    port: "3001",
  });

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
    }
  }, [currentUser]);

  useEffect(() => {
    socket.current.emit("join-room", {
      roomId: roomID,
      userId: currentUser._id,
    });

    socket.current.on("user-connected", (userId) => {
      console.log("User Connected", userId);
    });
  }, []);

  myPeer.on("open", (id) => {
    socket.current.emit("join-room", {
      roomId: roomID,
      userId: currentUser._id,
    });
  });

  // let videoGrid;

  // function addVideoStream(video, stream) {
  //   video.srcObject = stream;
  //   video.addEventListener("loadedmetadata", () => {
  //     video.play();
  //   });
  //   videoGrid.append(video);
  // }
  // function connectToNewUser(userId, stream) {
  //   const call = myPeer.call(userId, stream);
  //   console.log("Is ans?");
  //   const video = document.createElement("video");
  //   call.on("stream", (userVideoStream) => {
  //     console.log(userVideoStream);
  //     addVideoStream(video, userVideoStream);
  //   });
  //   call.on("close", () => {
  //     video.remove();
  //   });

  //   // peers[userId] = call;
  // }

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "../scripts/videoChat.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return <div id="video-grid"></div>;
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
