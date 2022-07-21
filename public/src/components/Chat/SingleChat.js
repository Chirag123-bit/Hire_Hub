import { ArrowBackIcon } from "@chakra-ui/icons";
import {
  Box,
  FormControl,
  IconButton,
  Input,
  Spinner,
  Text,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import { Navigate } from "react-router-dom";
import io from "socket.io-client";
import { getSender } from "../../config/ChatLogic";
import { ChatState } from "../../context/ChatProvider";
import { message } from "../../utils/APIRoutes";
import UpdateGroupChatModal from "./Modals/UpdateGroupChatModal";
import ScrollableChat from "./ScrollableChat";
import "./Styles/styles.css";

const animationData = require("../../animations/typing.json");

const ENDPOINT = "http://localhost:5000";
var socket, selectedChatCompare;
const SingleChat = ({ fetchAgain, setFetchAgain }) => {
  const { user, selectedChat, setSelectedChat, notification, setNotification } =
    ChatState();
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newMessage, setNewMessage] = useState();
  const toast = useToast();
  const [socketConnected, setSocketConnected] = useState(false);
  const [typing, setTyping] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    if (!user) {
      Navigate("/auth/login");
    }
    socket = io(ENDPOINT);

    socket.emit("setup", user);
    socket.on("connected", () => setSocketConnected(true));
    socket.on("typing", () => setTyping(true));
    socket.on("stop typing", () => setTyping(false));
    console.log(socket.connected);
  }, []);

  const fetchMessages = async () => {
    if (!selectedChat) return;
    const token = await JSON.parse(localStorage.getItem("token"));
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      setLoading(true);

      const { data } = await axios.get(
        message + "/" + selectedChat._id,
        config
      );
      socket.emit("join chat", selectedChat._id);
      setMessages(data);
      setLoading(false);
    } catch (e) {
      toast({
        title: "Error",
        description: e.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    fetchMessages();
    selectedChatCompare = selectedChat;
  }, [selectedChat]);

  console.log(notification, "-------------------------");

  useEffect(() => {
    console.log(socket);

    socket.on("message recieved", (newMessageRecieved) => {
      if (
        !selectedChatCompare ||
        selectedChatCompare._id !== newMessageRecieved.chat._id
      ) {
        if (!notification.includes(newMessageRecieved)) {
          setNotification([...notification, newMessageRecieved]);
          setFetchAgain(!fetchAgain);
        }
      } else {
        setMessages([...messages, newMessageRecieved]);
      }
    });
  });

  const sendMessage = async (e) => {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      socket.emit("stop typing", selectedChat._id);
      const token = await JSON.parse(localStorage.getItem("token"));

      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };
        setNewMessage("");

        const { data } = await axios.post(
          message,
          { content: newMessage, chatId: selectedChat._id },
          config
        );

        setMessages([...messages, data]);
        socket.emit("new message", data);
      } catch (e) {
        console.log(e);
        toast({
          title: "Error",
          description: e.message,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    }
  };
  const typingHandler = (e) => {
    setNewMessage(e.target.value);

    if (!socketConnected) return;
    if (!typing) {
      setTyping(true);
      socket.emit("typing", selectedChat._id);
    }
    let lastTypingTime = new Date().getTime();
    var timerLength = 3000;
    setTimeout(() => {
      var timeNow = new Date().getTime();
      var timeDiff = timeNow - lastTypingTime;
      if (timeDiff >= timerLength && typing) {
        setTyping(false);
        socket.emit("stop typing", selectedChat._id);
      }
    }, timerLength);
  };

  return (
    <>
      {selectedChat ? (
        <>
          <Text
            fontSize={{ base: "28px", md: "30px" }}
            fontWeight="bold"
            pb={3}
            px={2}
            w="100%"
            display="flex"
            justifyContent={{ base: "space-between" }}
            alignItems="center"
          >
            <IconButton
              display={{ base: "flex", md: "none" }}
              icon={<ArrowBackIcon />}
              onClick={() => setSelectedChat("")}
            />
            {!selectedChat.isGroupChat ? (
              <>{getSender(user, selectedChat.users)}</>
            ) : (
              <>
                {selectedChat.chatName.toUpperCase()}
                <UpdateGroupChatModal
                  fetchAgain={fetchAgain}
                  setFetchAgain={setFetchAgain}
                  fetchMessages={fetchMessages}
                />
              </>
            )}
          </Text>
          <Box
            display="flex"
            flexDir="column"
            p={3}
            justifyContent="flex-end"
            bg="#e8e8e8"
            w="100%"
            h="100%"
            borderRadius="lg"
            overflowY="hidden"
          >
            {loading ? (
              <Spinner
                size="xl"
                w={20}
                h={20}
                alignSelf="center"
                margin="auto"
              />
            ) : (
              <div className="messages">
                <ScrollableChat messages={messages} />
              </div>
            )}
            <FormControl onKeyDown={sendMessage} isRequired mt={3}>
              {typing ? (
                <div>
                  <Lottie
                    width={70}
                    style={{ marginBottom: 15, marginLeft: 0 }}
                    options={defaultOptions}
                  />
                </div>
              ) : (
                <></>
              )}

              <Input
                variant="filled"
                placeholder="Type a message..."
                bg="#E0E0E0"
                onChange={typingHandler}
                value={newMessage}
              />
            </FormControl>
          </Box>
        </>
      ) : (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          h="100%"
        >
          <Text fontSize="3xl" fontWeight="bold" justifyContent="center">
            Click on a user to start chatting
          </Text>
        </Box>
      )}
    </>
  );
};

export default SingleChat;
