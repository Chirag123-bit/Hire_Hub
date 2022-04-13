import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Chat } from "./pages/Chat";
// import Navbar from "./components/Navbar";
import Home from "./pages/index";
import { Login } from "./pages/Login";
import Register from "./pages/Register";
import SigninPage from "./pages/signin";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signin" element={<SigninPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>
  );
}

export default App;
