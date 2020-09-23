import React, { useState } from "react";
import "./profileTabs.css";
const ProfileTabs = (props) => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="profile__tabs">
      <div
        className={`tab__item ${current === 0 ? "active" : ""}`}
        onClick={() => {
          setCurrent(0);
          props.setCurrentTab(0);
        }}
      >
        About
      </div>
      <div
        className={`tab__item ${current === 1 ? "active" : ""}`}
        onClick={() => {
          setCurrent(1);
          props.setCurrentTab(1);
        }}
      >
        Photos
      </div>
      <div
        className={`tab__item ${current === 2 ? "active" : ""}`}
        onClick={() => {
          setCurrent(2);
          props.setCurrentTab(2);
        }}
      >
        Followers
      </div>
      <div
        className={`tab__item ${current === 3 ? "active" : ""}`}
        onClick={() => {
          setCurrent(3);
          props.setCurrentTab(3);
        }}
      >
        Following
      </div>
      <div
        className={`tab__item ${current === 4 ? "active" : ""}`}
        onClick={() => {
          setCurrent(4);
          props.setCurrentTab(4);
        }}
      >
        Fishponds
      </div>
    </div>
  );
};

export default ProfileTabs;
