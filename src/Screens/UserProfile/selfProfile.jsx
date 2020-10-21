import React, { useState } from "react";

import PersonalDetails from "../../Components/PersonalDetails/personalDetails";
import CollegeDetails from "../../Components/CollegeDetails/collegeDetails";
import ProfileHeader from "../../Components/ProfileHeader/profileHeader";
import ProfileTabs from "../../Components/ProfileTabs/profileTabs";
import UserBio from "../../Components/UserBio/userBio";
import MainChat from "../Chat/mainChat";
import Highlights from "../../Components/HighLights/highlights";
import BioForm from "../../Components/AboutPageModals/bioForm";

import "./userProfile.css";
import "./about.css";

const SelfProfile = (props) => {
  //   let userName = props.match.params.userName;
  // if (props.user.userName )
  let user = props.user;

  const [currentTab, setCurrentTab] = useState(0);
  const [bio, setBio] = useState(user.bio);
  const [showBio, toggleBio] = useState(false);
  const handleClose = () => {
    toggleBio(!showBio);
  };
  const handleBioSubmit = () => {
    console.log(bio);
    toggleBio(false);
  };

  return (
    <>
      <div className="userProfile">
        <div className="profile__section">
          <ProfileHeader user={user} />
          <ProfileTabs setCurrentTab={setCurrentTab} />
          <div className="profile__content">
            <div className="about">
              <UserBio bio={user.bio} toggleBio={toggleBio} />
              <BioForm
                show={showBio}
                handleClose={handleClose}
                bio={bio}
                setBio={setBio}
                handleSubmit={handleBioSubmit}
              />
              <div className="details">
                <PersonalDetails personalDetails={user.personalDetails} />
                <CollegeDetails collegeDetails={user.collegeDetails} />
              </div>
              <Highlights />
            </div>
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

export default SelfProfile;
