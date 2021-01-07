import React from "react";
import NavBar from "../NavBar/navBar";
import SelfCommittee from "./selfCommittee";

import "./committeeProfile.css";
import "../UserProfile/userProfile.css";
import { getUserDetails, self } from "../../Services/userService";
import {committeeSelf, getUserDetailsCommittee} from '../../Services/committeeService'
import {
  startLoadingOtherUser,
  startLoadingSelfUser,
} from "../../Redux/Actions/userAction";
import { connect } from "react-redux";
import LoadingOverlay from "react-loading-overlay";
import OtherCommittee from "./otherCommittee";

const CommitteeProfile = (props) => {
  if (!localStorage.token) {
    props.history.push("/login");
  }
  if (props.user.userName === null && !props.selfUserRequestSent) {
    props.startLoadingSelfUser(); // Prevent duplicate requests
    
    props.self().catch((error) => {
      props.committeeSelf().catch(() => {
        props.history.push("/login");
      })
      
    });
  }

  let userName = props.match.params.userName;

  if (props.user.userName !== null && props.user.userName !== userName && !props.otherUserRequestSent) {
    // Get the user from userService
    if (!props.otherUser) {
      console.log("HELLO THERE")
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
      <NavBar {...props} />
      {props.user.userName === userName ? (
        <SelfCommittee user={props.user} />
      ) : !props.otherUser ? (
        <LoadingOverlay
          active={!props.otherUser}
          spinner
          text="Loading User Profile"
          className="overlay"
        ></LoadingOverlay>
      ) : (
        <OtherCommittee user={props.otherUser} currentUser={props.user} />
      )}
    </>
  );
};
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
      return dispatch(getUserDetailsCommittee(userName, other));
    },
    self: () => {
      return dispatch(self());
    },
    committeeSelf: () => {
      return dispatch(committeeSelf())
    },
    startLoadingSelfUser: () => {
      return dispatch(startLoadingSelfUser());
    },
    startLoadingOtherUser: () => {
      return dispatch(startLoadingOtherUser());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommitteeProfile);
