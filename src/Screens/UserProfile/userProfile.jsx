import React from "react";
import ProfileHeader from "../../Components/ProfileHeader/profileHeader";
import ProfileTabs from "../../Components/ProfileTabs/profileTabs";
import "./userProfile.css";

const UserProfile = () => {
  return (
    <div className="userProfile">
      <div className="profile__section">
        <ProfileHeader />
        <ProfileTabs />
      </div>
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
      <div className="newsfeed__chat minimised">
        <h1>Chat</h1>
      </div>
    </div>
  );
};

export default UserProfile;
