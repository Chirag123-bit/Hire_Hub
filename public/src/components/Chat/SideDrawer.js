import { useDisclosure } from "@chakra-ui/hooks";
import { BellIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Input,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Spinner,
  Text,
  Tooltip,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChatState } from "../../context/ChatProvider";
import { accessUserChat, chatUserSearch } from "../../utils/APIRoutes";
import ChatLoading from "./ChatLoading";
import UserListItem from "./UserAvatar/UserListItem";

const SideDrawer = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);
  const { user, setSelectedChat, chats, setChats } = ChatState();
  const navigate = useNavigate();
  const { isOpen, onClose, onOpen } = useDisclosure();

  const logoutHandler = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const accessChat = async (userId) => {
    const token = await JSON.parse(localStorage.getItem("token"));

    try {
      setLoadingChat(true);
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.post(accessUserChat, { userId }, config);

      if (!chats.find((c) => c._id === data._id)) setChats([data, ...chats]);

      setLoadingChat(false);
      setSelectedChat(data);
      onClose();
    } catch (error) {
      toast({
        title: "Error",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "top-left",
        description: error.message,
      });
    }
  };
  const toast = useToast();
  const handleSearch = async () => {
    const token = await JSON.parse(localStorage.getItem("token"));

    if (!search) {
      toast({
        title: "Please enter a search term",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "top-left",
      });
    }

    try {
      setLoading(true);
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.get(
        chatUserSearch + `search=${search}`,
        config
      );
      setSearchResult(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast({
        title: "Something went wrong",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "bottom-left",
        description: error.message,
      });
    }
  };
  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        w="100%"
        p="5px 10px 5px 10px"
        bg="white"
        borderWidth="5px"
        alignItems="center"
      >
        <Tooltip label="Search Users" placement="bottom" hasArrow>
          <Button variant="ghost" onClick={onOpen}>
            <i class="fa fa-search" aria-hidden="true"></i>
            <Text display={{ base: "none", md: "flex" }} px="4">
              Search User
            </Text>
          </Button>
        </Tooltip>

        <Text fontSize="2x1" fontWeight="bold">
          HireHub Messenger
        </Text>
        <div>
          <Menu>
            <MenuButton p={1}>
              <BellIcon fontSize="2xl" m={1} />
            </MenuButton>
            {/* <MenuList></MenuList> */}
          </Menu>
          <Menu>
            <MenuButton as={Button} rightIcom={<ChevronRightIcon />}>
              <Avatar
                size="sm"
                cursor="pointer"
                name={user.firstName + " " + user.lastName}
                src={user.avatarImage}
              />
            </MenuButton>
            <MenuList>
              <MenuItem
                onClick={() => {
                  navigate("/applicant/profile");
                }}
              >
                My Profile
              </MenuItem>
              <MenuDivider />
              <MenuItem onClick={logoutHandler}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </Box>

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Search Users</DrawerHeader>
          <DrawerBody>
            <Box display="flex">
              <Input
                placeholder="Search by name or email"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                mr={2}
              />
              <Button onClick={handleSearch}>Go</Button>
            </Box>
            {loading ? (
              <ChatLoading />
            ) : (
              searchResult.map((user) => {
                return (
                  <UserListItem
                    key={user._id}
                    user={user}
                    handleFunction={() => accessChat(user._id)}
                  />
                );
              })
            )}

            {loadingChat && <Spinner ml="auto" display="flex" />}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SideDrawer;
