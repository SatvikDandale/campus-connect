import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import PersonalDetails from "../../Components/PersonalDetails/personalDetails";
import CollegeDetails from "../../Components/CollegeDetails/collegeDetails";
import ProfileHeader from "../../Components/ProfileHeader/profileHeader";
import ProfileTabs from "../../Components/ProfileTabs/profileTabs";
import UserBio from "../../Components/UserBio/userBio";
import MainChat from "../Chat/mainChat";
import Highlights from "../../Components/HighLights/highlights";
import BioForm from "../../Components/AboutPageModals/bioForm";
import PersonalDetailsForm from "../../Components/AboutPageModals/personalDetailsForm";

import { updateUserAbout } from "../../Services/userService";
import {setMinimised} from '../../Redux/Actions/chatAction'

import "./userProfile.css";
import "./about.css";
import FollowersAndFollowingList from "../../Components/FollowersList/followers";
import PhotosTab from "../../Components/PhotosTab/photosTab";

const SelfProfile = (props) => {
  //   let userName = props.match.params.userName;
  // if (props.user.userName )
  let user = props.user;

  useEffect(() => {
    props.setMinimised(true);
  })

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
    props.updateUserAbout({
      ...aboutObject,
      bio: bio.trim(),
    });
    setBio(bio.trim());
    toggleBio(false);
  };

  const [personalDetails, setPersonalDetails] = useState({
    homeTown: user.personalDetails.homeTown || "",
    talents: user.personalDetails.talents || [],
    achievements: user.personalDetails.achievements || [],
  });
  const [showPersonalForm, togglePersonal] = useState(false);
  const handlePersonalClose = () => {
    togglePersonal(!togglePersonal);
  };
  const handlePersonalSubmit = () => {
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
      personalDetails: {
        ...personalDetails,
        homeTown: personalDetails.homeTown.trim(),
      },
    });
    setPersonalDetails({
      ...personalDetails,
      homeTown: personalDetails.homeTown.trim(),
    });
    togglePersonal(false);
  };

  return (
    <>
      <div className="userProfile">
        <div className="profile__section">
          <ProfileHeader user={user} updateUserAbout={props.updateUserAbout} />
          <ProfileTabs setCurrentTab={setCurrentTab} />
          <div className="profile__content">
            {currentTab === 0 ? (
              <div className="about">
                <UserBio bio={user.bio} toggleBio={toggleBio} />
                <BioForm
                  show={showBio}
                  handleClose={handleBioClose}
                  bio={bio}
                  setBio={setBio}
                  handleSubmit={handleBioSubmit}
                />
                <div className="details">
                  <PersonalDetails
                    personalDetails={user.personalDetails}
                    togglePersonal={togglePersonal}
                  />
                  <PersonalDetailsForm
                    show={showPersonalForm}
                    handleClose={handlePersonalClose}
                    personalDetails={personalDetails}
                    setPersonalDetails={setPersonalDetails}
                    handleSubmit={handlePersonalSubmit}
                  />
                  <CollegeDetails collegeDetails={user.collegeDetails} />
                </div>
                <Highlights />
              </div>
            ) : null}

            {currentTab === 1 ? (
              <PhotosTab userName={user.userName} self={true} />
            ) : null}
            {currentTab === 2 ? (
              <FollowersAndFollowingList people={user.followers} />
            ) : null}
            {currentTab === 3 ? (
              <FollowersAndFollowingList people={user.following} />
            ) : null}
          </div>
        </div>
        {currentTab === 0 ? (
          <div className="stats">
            <div className="views">
              <p className="number">80</p>
              <p>Views</p>
            </div>
            <div className="search">
              <p className="number">80</p>
              <p>Searches</p>
            </div>
            <div className="popularity">
              <p className="number">9/10</p>
              <p>Popularity Index</p>
            </div>
          </div>
        ) : null}

        <MainChat />
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUserAbout: (updatedUserDetails) => {
      return dispatch(updateUserAbout(updatedUserDetails));
    },
    setMinimised: (condition = false) => {
      return dispatch(setMinimised(condition))
    }
  };
};

export default connect(null, mapDispatchToProps)(SelfProfile);
