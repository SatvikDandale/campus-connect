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

const SelfCommittee = (props) => {
  let user = props.user;

  useEffect(() => {
    props.setMinimised(true);
  });

  const [currentTab, setCurrentTab] = useState(0);
  const [bio, setBio] = useState(user.bio);
  const [showBio, toggleBio] = useState(false);

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
    console.log({
      ...aboutObject,
      bio: bio.trim(),
    });
    setBio(bio.trim());
    toggleBio(false);
  };

  return (
    <div className="userProfile">
      <div className="profile__section">
        <ProfileHeader user={user} updateUserAbout={props.updateUserAbout} committee={true}/>
        <ProfileTabs setCurrentTab={setCurrentTab} committee={true} />
        <div className="profile__content">
          {currentTab === 0 ? (
          <div className="about">
              <UserBio bio={user.bio} toggleBio={toggleBio} committee={true}></UserBio>
              <BioForm
                  show={showBio}
                  handleClose={handleBioClose}
                  bio={bio}
                  setBio={setBio}
                  handleSubmit={handleBioSubmit}
                  committee={true}
                />
            <Team />
              
          </div>
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
      return dispatch(updateUserAbout(updatedUserDetails));
    },
    setMinimised: (condition = false) => {
      return dispatch(setMinimised(condition));
    },
  };
};
export default connect(null, mapDispatchToProps)(SelfCommittee);
