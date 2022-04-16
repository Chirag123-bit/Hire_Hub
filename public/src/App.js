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
import VideoCall from "./pages/VideoCall";

function App() {
  const [socket, setSocket] = useState(null);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signin" element={<SigninPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/setAvatar" element={<SetAvatar />} />
        <Route
          path="/chat"
          element={<Chat socket={socket} setSocket={setSocket} />}
        />
        <Route
          path="/videoCall/:roomId"
          element={<VideoCall socket={socket} />}
        />
      </Routes>
      <ToastContainer autoClose={500} />
    </Router>
  );
}

export default App;
