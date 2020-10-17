import React from "react";
import { connect } from "react-redux";
import LoadingOverlay from "react-loading-overlay";

import NavBar from "../NavBar/navBar";
import SelfProfile from "./selfProfile";

import { getUserDetails, self } from "../../Services/userService";

import "./userProfile.css";
import "./about.css";

const UserProfile = (props) => {
  console.log(props);
  if (!localStorage.token) {
    props.history.push("/login");
  }
  if (props.user.userName === null) {
    props.self();
  }
  let userName = props.match.params.userName;
  if (props.user.userName !== userName) {
    // Get the user from userService
    console.log(userName);
    console.log(props.user);
    if (!props.otherUser) props.getUserDetails(userName, true);
  }

  return (
    <>
      <NavBar />
      {props.user.userName === userName ? (
        <SelfProfile user={props.user} />
      ) : !props.otherUser ? (
        <LoadingOverlay
          active={!props.otherUser}
          spinner
          text="Loading User Profile"
          className="overlay"
        ></LoadingOverlay>
      ) : (
        <SelfProfile user={props.otherUser} />
      )}
    </>
  );
};

// REDUX AREA
const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
    otherUser: state.userReducer.otherUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserDetails: (userName, other = false) => {
      return dispatch(getUserDetails(userName, other));
    },
    self: () => {
      return dispatch(self());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
