import { AddIcon } from "@chakra-ui/icons";
import { Box, Button, Stack, Text, useToast } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { getSender } from "../../config/ChatLogic";
import { ChatState } from "../../context/ChatProvider";
import { accessUserChat } from "../../utils/APIRoutes";
import ChatLoading from "./ChatLoading";
import GroupChatModal from "./Modals/GroupChatModal";
const MyChats = ({ fetchAgain }) => {
  const [loggedUser, setLoggedUser] = useState();
  const { setSelectedChat, selectedChat, chats, setChats, user } = ChatState();

  const toast = useToast();

  const fetchChat = async (userId) => {
    const token = await JSON.parse(localStorage.getItem("token"));

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axios.get(accessUserChat, config, { userId });

      console.log(data);
      setChats(data);
    } catch (error) {
      toast({
        title: "Error",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-left",
        description: error.message,
      });
    }
  };

  useEffect(() => {
    setLoggedUser(JSON.parse(localStorage.getItem("user")));
    fetchChat();
  }, [fetchAgain]);

  return (
    <Box
      display={{ base: selectedChat ? "none" : "flex", md: "flex" }}
      flexDirection="column"
      alignItems="center"
      p={3}
      bg="white"
      w={{ base: "100%", md: "31%" }}
      borderRadius="lg"
      borderWidth="1px"
    >
      <Box
        pb={3}
        px={3}
        fontSize={{ base: "28px", md: "30px" }}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        w="100%"
      >
        My Chats
        <GroupChatModal>
          <Button
            display="flex"
            fontSize={{ base: "17px", md: "10px", lg: "17px" }}
            rightIcon={<AddIcon />}
          >
            New Group Chat
          </Button>
        </GroupChatModal>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        p={3}
        bg="#f8f8f8"
        w="100%"
        h="100%"
        borderRadius="lg"
        overflowY="hidden"
      >
        {chats ? (
          <Stack overflowy="scroll">
            {chats.map((chat) => (
              <Box
                onClick={() => setSelectedChat(chat)}
                key={chat._id}
                cursor="pointer"
                borderRadius="lg"
                bg={selectedChat === chat ? "#38b2ac" : "e8e8e8"}
                color={selectedChat === chat ? "white" : "black"}
                px={3}
                py={2}
              >
                <Text>
                  {!chat.isGroupChat
                    ? getSender(loggedUser, chat.users)
                    : chat.chatName}
                </Text>
              </Box>
            ))}
          </Stack>
        ) : (
          <ChatLoading />
        )}
      </Box>
    </Box>
  );
};

export default MyChats;
