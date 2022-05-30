import React from "react";
import ProfileCard from "./ProfileComponents/CardComponent";
import { ProfileContainer } from "./ProfileComponents/CardComponent/Components";
import CandidateDescription from "./ProfileComponents/InformationComponent";
const Profile = () => {
  //get id of logged in user
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div id="profile">
      <ProfileContainer>
        <ProfileCard user={user} />
        <CandidateDescription user={user} />
      </ProfileContainer>
    </div>
  );
};

export default Profile;
