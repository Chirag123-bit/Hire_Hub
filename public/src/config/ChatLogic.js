export const getSender = (loggedUser, users) => {
  return users[0]._id === loggedUser._id
    ? users[1].firstName + " " + users[1].lastName
    : users[0].firstName + " " + users[0].lastName;
};
