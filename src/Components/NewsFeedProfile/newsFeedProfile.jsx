import {
  Category,
  Dashboard,
  EmojiEvents,
  People,
  Settings,
} from "@material-ui/icons";
import React from "react";
import profile from "../../Assets/profile_user@2x.png";
import "./newsFeedProfile.css";

const NewFeedProfile = () => {
  return (
    <>
      <div className="profile__info">
        <img src={profile} alt="profile" />
        <p className="profile__name">John Doe</p>
        <p className="profile__bio">
          General Secretary, EPEC Final Year Computer Engineering
        </p>
      </div>
      <div className="profile__menu">
        <p>MENU</p>
        <div className="menu__list">
          <div>
            <Dashboard />
            Dashboard
          </div>
          <div>
            <People />
            Alumni
          </div>
          <div>
            <EmojiEvents />
            Events
          </div>
          <div>
            <Category />
            Lost and Found
          </div>
          <div>
            <Settings />
            Settings
          </div>
        </div>
      </div>
    </>
  );
};

export default NewFeedProfile;
