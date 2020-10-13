import React from "react";
import "./userBio.css";

const UserBio = ({ bio }) => {
  return (
    <div className="bio">
      <p className="bio__heading">Bio</p>
      <pre className="bio__content">{bio.trim()}</pre>
    </div>
  );
};

export default UserBio;
