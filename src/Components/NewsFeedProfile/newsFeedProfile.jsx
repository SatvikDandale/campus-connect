import {
  Category,
  Dashboard,
  EmojiEvents,
  People,
  Settings,
} from "@material-ui/icons";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import profile from "../../Assets/Images/profile_user@2x.png";
import "./newsFeedProfile.css";

const NewFeedProfile = ({ user, history }) => {
  return (
    <>
      <div className="profile__info">
        <img
          src={profile}
          alt="profile"
          onClick={() => history.push("/user/" + user.userName)}
        />
        <p className="profile__name">{user.firstName + " " + user.lastName}</p>
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
          <div>
            <Settings />
            Settings
          </div>
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
