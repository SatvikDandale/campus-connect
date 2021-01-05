import React, { useEffect } from "react";
import { connect } from "react-redux";
import LoadingOverlay from "react-loading-overlay";

import NavBar from "../NavBar/navBar";
import SelfProfile from "./selfProfile";

import { getUserDetails, self } from "../../Services/userService";
import {
  startLoadingSelfUser,
  startLoadingOtherUser,
  reset,
} from "../../Redux/Actions/userAction";

import "./userProfile.css";
import "./about.css";
import OtherProfile from "./otherProfile";

const UserProfile = (props) => {
  useEffect(() => {
    props.reset();
  }, [])

  if (!localStorage.token) {
    props.history.push("/login");
  }
  if (props.user.userName === null && !props.selfUserRequestSent) {
    props.startLoadingSelfUser(); // Prevent duplicate requests
    props.self();
  }

  let userName = props.match.params.userName;

  if (props.user.userName !== userName && !props.otherUserRequestSent) {
    // Get the user from userService
    if (!props.otherUser) {
      props.startLoadingOtherUser(); // Prevent duplicate requests
      props.getUserDetails(userName, true);
    }
  }

  if (props.error.isError) {
    alert(props.error.errorMessage);
    if (props.error.redirect) {
      props.history.push(props.error.redirectPath);
    }
  }

  return (
    <>
      <NavBar {...props}/>
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
        <OtherProfile user={props.otherUser} currentUser={props.user} />
      )}
    </>
  );
};

// REDUX AREA
const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
    selfUserRequestSent: state.userReducer.selfUserRequestSent,
    otherUser: state.userReducer.otherUser,
    otherUserRequestSent: state.userReducer.otherUserRequestSent,
    error: state.errorReducer,
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
    startLoadingSelfUser: () => {
      return dispatch(startLoadingSelfUser());
    },
    startLoadingOtherUser: () => {
      return dispatch(startLoadingOtherUser());
    },
    reset: () => dispatch(reset()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
