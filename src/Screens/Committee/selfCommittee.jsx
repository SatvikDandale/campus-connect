import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import MainChat from "../Chat/mainChat";
import ProfileHeader from "../../Components/ProfileHeader/profileHeader";
import { setMinimised } from "../../Redux/Actions/chatAction";
import { updateUserAbout } from "../../Services/userService";
import ProfileTabs from "../../Components/ProfileTabs/profileTabs";
import UserBio from "../../Components/UserBio/userBio";
import BioForm from "../../Components/AboutPageModals/bioForm";
import Team from "../../Components/Team/team";
import { updateCommitteeAbout } from "../../Services/committeeService";
import PhotosTab from "../../Components/PhotosTab/photosTab";
import FollowersAndFollowingList from "../../Components/FollowersList/followers";
import TeamModal from "../../Components/Team/teamModal";

const SelfCommittee = (props) => {
  let user = props.user;

  useEffect(() => {
    props.setMinimised(true);
  });

  const [currentTab, setCurrentTab] = useState(0);
  const [bio, setBio] = useState(user.bio);
  const [showBio, toggleBio] = useState(false);
  const [showTeam, toggleTeam] = useState(false);

  const handleBioClose = () => {
    toggleBio(!showBio);
  };

  const handleBioSubmit = () => {
    console.log(bio);
    const {
      followers,
      following,
      groups,
      personalChats,
      posts,
      ...aboutObject
    } = user;
    props.updateUserAbout({
      ...aboutObject,
      bio: bio.trim(),
    });
    setBio(bio.trim());
    toggleBio(false);
  };

  const handleTeamClose = () => {
    toggleTeam(!showTeam);
  }
  

  return (
    <div className="userProfile">
      <div className="profile__section">
        <ProfileHeader
          user={user}
          updateUserAbout={props.updateUserAbout}
          committee={true}
        />
        <ProfileTabs setCurrentTab={setCurrentTab} committee={true} />
        <div className="profile__content">
          {currentTab === 0 ? (
            <div className="about">
              <UserBio
                bio={user.bio}
                toggleBio={toggleBio}
                committee={true}
              ></UserBio>
              <BioForm
                show={showBio}
                handleClose={handleBioClose}
                bio={bio}
                setBio={setBio}
                handleSubmit={handleBioSubmit}
                committee={true}
              />
              <Team toggleTeam={toggleTeam}/>
              <TeamModal show={showTeam} handleClose={handleTeamClose} />
            </div>
          ) : null}
          {currentTab === 1 ? (
            <PhotosTab userName={user.userName} self={true} />
          ) : null}
          {currentTab === 2 ? (
            <FollowersAndFollowingList people={user.followers} />
          ) : null}
        </div>
      </div>
      <MainChat />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUserAbout: (updatedUserDetails) => {
      return dispatch(updateCommitteeAbout(updatedUserDetails));
    },
    setMinimised: (condition = false) => {
      return dispatch(setMinimised(condition));
    },
  };
};
export default connect(null, mapDispatchToProps)(SelfCommittee);
