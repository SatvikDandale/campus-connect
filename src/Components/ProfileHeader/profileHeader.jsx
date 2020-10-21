import { Edit, Facebook } from "@material-ui/icons";
import React, { useState } from "react";
import Profile from "../../Assets/Images/profile_user@2x.png";
import NameForm from "../AboutPageModals/nameForm";
import "./profileHeader.css";

const ProfileHeader = ({ user, updateUserAbout }) => {
  const [name, setName] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
  });
  const [showName, toggleName] = useState(false);
  const handleClose = () => {
    toggleName(!showName);
  };
  const handleBioSubmit = () => {
    console.log(name);
    const {
      followers,
      following,
      groups,
      personalChats,
      posts,
      ...aboutObject
    } = user;
    updateUserAbout({
      ...aboutObject,
      ...name,
    });
    toggleName(false);
  };
  return (
    <div className="profileHeader">
      <img src={Profile} alt="profile" />
      <div className="header__info">
        <div className="details">
          <div className="username">
            {user.firstName + " " + user.lastName}
            <NameForm
              show={showName}
              handleClose={handleClose}
              name={name}
              setName={setName}
              handleSubmit={handleBioSubmit}
            />
            <div style={{ width: "1rem" }}></div>
            {<Edit onClick={() => toggleName(true)} />}
          </div>
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
