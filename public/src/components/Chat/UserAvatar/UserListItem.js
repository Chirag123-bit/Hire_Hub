import { Avatar, Box, Text } from "@chakra-ui/react";
import React from "react";

const UserListItem = ({ user, handleFunction }) => {
  return (
    <Box
      onClick={handleFunction}
      cursor="pointer"
      bg="#E8E8E8"
      _hover={{
        background: "#38B2AC",
        color: "white",
      }}
      w="100%"
      display="flex"
      alignItems="center"
      color="black"
      px={3}
      py={2}
      my={3}
      borderRadius="lg"
    >
      <Avatar
        mr={2}
        size="sm"
        name={user.firstName + " " + user.lastName}
        src={user.avatarImage}
      />
      <Box>
        <Text>{user.firstName + " " + user.lastName}</Text>
        <Text fontSize="xs" color="gray.500">
          {user.email}
        </Text>
      </Box>
    </Box>
  );
};

export default UserListItem;
