import React, { useState } from "react";
import PersonalDetails from "../../Components/PersonalDetails/personalDetails";
import CollegeDetails from "../../Components/CollegeDetails/collegeDetails";
import ProfileHeader from "../../Components/ProfileHeader/profileHeader";
import ProfileTabs from "../../Components/ProfileTabs/profileTabs";
import UserBio from "../../Components/UserBio/userBio";
import "./userProfile.css";
import "./about.css";
import MainChat from "../Chat/mainChat";
import NavBar from "../NavBar/navBar";
import Highlights from "../../Components/HighLights/highlights";

const UserProfile = () => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <>
      <NavBar />
      <div className="userProfile">
        <div className="profile__section">
          <ProfileHeader />
          <ProfileTabs setCurrentTab={setCurrentTab} />
          <div className="profile__content">
            <div className="about">
              <UserBio />
              <div className="details">
                <PersonalDetails />
                <CollegeDetails />
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

export default UserProfile;
