import React from "react";
import "./profileTabs.css";
const ProfileTabs = () => {
  return (
    <div className="profile__tabs">
      <div className="tab__item active">About</div>
      <div className="tab__item">Photos</div>
      <div className="tab__item">Followers</div>
      <div className="tab__item">Following</div>
      <div className="tab__item">Fishponds</div>
    </div>
  );
};

export default ProfileTabs;
