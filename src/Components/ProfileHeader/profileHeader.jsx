import { Facebook } from "@material-ui/icons";
import React from "react";
import Profile from "../../Assets/Images/profile_user@2x.png";
import "./profileHeader.css";

const ProfileHeader = ({ user }) => {
  return (
    <div className="profileHeader">
      <img src={Profile} alt="profile" />
      <div className="header__info">
        <div className="details">
          <div className="username">{user.userName}</div>
          <div className="bio">{user.intro}</div>
          <div className="college">{user.collegeDetails.collegeName}</div>
        </div>
        <div className="spacer"></div>
        <div className="icons">
          <Facebook />
          <Facebook />
          <Facebook />
          <Facebook />
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
