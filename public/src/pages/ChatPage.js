import { Box, ChakraProvider } from "@chakra-ui/react";
import React, { useState } from "react";
import ChatBox from "../components/Chat/ChatBox";
import MyChats from "../components/Chat/MyChats";
import SideDrawer from "../components/Chat/SideDrawer";
import { ChatState } from "../context/ChatProvider";

function ChatPage() {
  const { user } = ChatState();
  const [fetchAgain, setFetchAgain] = useState(false);
  return (
    <ChakraProvider>
      <div style={{ width: "100%" }}>
        {user && <SideDrawer />}
        <Box
          display="flex"
          justifyContent="space-between"
          w="100%"
          h="91.5vh"
          p="0.8rem"
        >
          {user && <MyChats fetchAgain={fetchAgain} />}
          {user && (
            <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
          )}
        </Box>
      </div>
    </ChakraProvider>
  );
}

export default ChatPage;
