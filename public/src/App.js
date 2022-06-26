import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EmailVerified from "./components/Common/Email/EmailVerified";
import VideoCall from "./components/Meeting/VideoCall";
import ChatProvider from "./context/ChatProvider";
import Auth from "./pages/Auth";
import ChatPage from "./pages/ChatPage";
import Code_sent from "./pages/code_sent";
import Employer from "./pages/Employer";
import Home from "./pages/index";
import Seeker from "./pages/Seeker";
import SetAvatar from "./pages/SetAvatar";

// import VideoApp from "./components/videoCall";

function App() {
  const [inCall, setInCall] = useState(false);
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/auth/*" element={<Auth />} />
        <Route path="/verified" element={<EmailVerified />} />
        <Route path="/setAvatar" element={<SetAvatar />} />
        {/* <Route
          path="/chat"
          element={<Chat inCall={inCall} setInCall={setInCall} />}
        /> */}

        {/* <Route path="/videoCall/" element={<VideoApp />} /> */}
        <Route
          path="/videoCall"
          element={<VideoCall setInCall={setInCall} />}
        />

        <Route exact path="/employer/*" element={<Employer />} />

        <Route exact path="/applicant/*" element={<Seeker />} />
        <Route exact path="/codesent/:id" element={<Code_sent />} />
      </Routes>

      <ChatProvider>
        <Routes>
          <Route path="/chats" element={<ChatPage />} />
        </Routes>
      </ChatProvider>
      <ToastContainer autoClose={500} />
    </>
  );
}

export default App;
