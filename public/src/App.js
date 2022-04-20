import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Chat } from "./pages/Chat";
// import Navbar from "./components/Navbar";
import Home from "./pages/index";
import { Login } from "./pages/Login";
import Register from "./pages/Register";
import SigninPage from "./pages/signin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SetAvatar from "./pages/SetAvatar";
import VideoCall from "./components/Meeting/VideoCall";
import ApplicantHome from "./pages/Seeker";
// import VideoApp from "./components/videoCall";

function App() {
  const [inCall, setInCall] = useState(false);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/applicant" element={<ApplicantHome />} />
        <Route exact path="/signin" element={<SigninPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/setAvatar" element={<SetAvatar />} />
        <Route
          path="/chat"
          element={<Chat inCall={inCall} setInCall={setInCall} />}
        />
        {/* <Route path="/videoCall/" element={<VideoApp />} /> */}
        <Route
          path="/videoCall"
          element={<VideoCall setInCall={setInCall} />}
        />
      </Routes>
      <ToastContainer autoClose={500} />
    </Router>
  );
}

export default App;
