import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ChatContext = createContext();
const ChatProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [selectedChat, setSelectedChat] = useState();
  const [chats, setChats] = useState([]);
  const [notification, setNotification] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();
  var redirect = false;
  var redirectPath = "/";

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("user"));
    console.log(location.pathname.split("/")[1]);
    setUser(userInfo);

    if (!userInfo) {
      if (
        location.pathname == "/auth/login" ||
        location.pathname == "/auth/register" ||
        location.pathname == "/"
      ) {
        redirect = false;
      } else {
        redirect = true;
        redirectPath = "/";
      }
    }

    if (userInfo) {
      if (userInfo.isVerified) {
        if (location.pathname == "/codesent") {
          redirect = true;
          redirectPath = "/";
        }
        if (
          location.pathname == "/auth/login" ||
          location.pathname == "/auth/register"
        ) {
          redirect = true;
          redirectPath = "/";
        }

        if (
          userInfo.type == "Applicant" &&
          location.pathname.split("/")[1] === "employer"
        ) {
          redirect = true;
          redirectPath = "/applicant/home";
        }

        if (
          userInfo.type == "Company" &&
          location.pathname.split("/")[1] === "applicant"
        ) {
          redirect = true;
          redirectPath = "/employer/dashboard";
        }
      } else {
        if (
          location.pathname == "/auth/login" ||
          location.pathname == "/auth/register" ||
          location.pathname == "/codesent"
        ) {
          redirect = false;
        } else {
          redirect = true;
          redirectPath = "/codesent";
        }
        // if (
        //   location.pathname == "/auth/login" ||
        //   location.pathname == "/auth/register"
        // ) {
        //   redirect = false;
        // }
      }
    }

    if (redirect) {
      navigate(redirectPath);
    }
  }, [navigate]);
  return (
    <ChatContext.Provider
      value={{
        user,
        setUser,
        selectedChat,
        setSelectedChat,
        chats,
        setChats,
        notification,
        setNotification,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const ChatState = () => {
  return useContext(ChatContext);
};
export default ChatProvider;
