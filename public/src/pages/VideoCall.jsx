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

  var testData = !!document.getElementById("video-grid");
  if (!testData) {
    var elm = document.createElement("div");
    elm.id = "video-grid";
    document.body.append(elm);
  }
  const videoGrid = document.getElementById("video-grid");
  var currentUser;
  const myPeer = new Peer(undefined, {
    host: "/",
    port: "3001",
  });
  myPeer.on("open", (id) => {
    socket.emit("join-room", {
      roomId: roomID,
      userId: currentUser._id,
    });
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

  function addVideoStream(video, stream) {
    video.srcObject = stream;
    video.addEventListener("loadedmetadata", () => {
      video.play();
    });
    videoGrid.append(video);
  }
  function connectToNewUser(userId, stream) {
    const call = myPeer.call(userId, stream);
    console.log(call);

    const video = document.createElement("video");
    call.on("stream", (userVideoStream) => {
      console.log(userVideoStream);
      addVideoStream(video, userVideoStream);
    });
    call.on("close", () => {
      video.remove();
    });
  }

  const myVideo = document.createElement("video");
  myVideo.muted = true;
  const peers = {};
  navigator.mediaDevices
    .getUserMedia({
      video: true,
      audio: true,
    })
    .then((stream) => {
      addVideoStream(myVideo, stream);

      myPeer.on("call", (call) => {
        console.log("Called");
        call.answer(stream);
        const video = document.createElement("video");
        call.on("stream", (userVideoStream) => {
          addVideoStream(video, userVideoStream);
        });
      });

      socket.on("user-connected", (userId) => {
        connectToNewUser(userId, stream);
      });
    });

  socket.on("user-disconnected", (userId) => {
    if (peers[userId]) peers[userId].close();
  });

  myPeer.on("open", (id) => {
    socket.emit("join-room", roomID, id);
  });

  return <></>;
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
