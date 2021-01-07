import {
  Category,
  Dashboard,
  EmojiEvents,
  People,
  Settings,
} from "@material-ui/icons";
import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import profile from "../../Assets/Images/profile_user@2x.png";
import SettingsModal from "../Settings/settings";
import "./newsFeedProfile.css";

const NewFeedProfile = ({ user, history }) => {
  const [settings, setSettings] = useState(false);

  const handleClose = () => {
    setSettings(!settings);
  };

  const handleSettingsSubmit = (data, type = "password") => {
    console.log(data);
    setSettings(false);
  }

  let name = user.isCommittee ? user.name : user.firstName + " " + user.lastName

  return (
    <>
      <div className="profile__info">
        <img
          src={user.profilePhotoURL || profile}
          alt="profile"
          onClick={() => user.isCommittee ? history.push("/committee/" + user.userName) : history.push("/user/" + user.userName)}
        />
        <p className="profile__name">{name}</p>
        <p className="profile__bio">{user.intro}</p>
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
          <div className="settings__option" onClick={() => setSettings(true)}>
            <Settings />
            Settings
          </div>
          <SettingsModal show={settings} handleClose={handleClose} handleSettingsSubmit={handleSettingsSubmit} changePassword={true}/>
        </div>
      </div>
    </>
  );
};

// REDUX AREA
const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
  };
};

export default connect(mapStateToProps, {})(withRouter(NewFeedProfile));
