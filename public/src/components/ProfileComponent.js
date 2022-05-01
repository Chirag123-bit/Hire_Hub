import React from "react";
import ProfileCard from "./ProfileComponents/CardComponent";
import { ProfileContainer } from "./ProfileComponents/CardComponent/Components";
const Profile = () => {
  return (
    <div id="profile">
      <ProfileContainer>
        <ProfileCard />
      </ProfileContainer>
    </div>
  );
};

export default Profile;
