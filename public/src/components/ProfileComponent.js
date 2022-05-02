import React from "react";
import ProfileCard from "./ProfileComponents/CardComponent";
import { ProfileContainer } from "./ProfileComponents/CardComponent/Components";
import CandidateDescription from "./ProfileComponents/InformationComponent";
const Profile = () => {
  return (
    <div id="profile">
      <ProfileContainer>
        <ProfileCard />
        <CandidateDescription />
      </ProfileContainer>
    </div>
  );
};

export default Profile;
