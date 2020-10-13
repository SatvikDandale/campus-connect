import React, { useState } from "react";
import { connect } from "react-redux";
import PersonalDetails from "../../Components/PersonalDetails/personalDetails";
import CollegeDetails from "../../Components/CollegeDetails/collegeDetails";
import ProfileHeader from "../../Components/ProfileHeader/profileHeader";
import ProfileTabs from "../../Components/ProfileTabs/profileTabs";
import UserBio from "../../Components/UserBio/userBio";
import "./userProfile.css";
import "./about.css";
import MainChat from "../Chat/mainChat";
import NavBar from "../NavBar/navBar";
import Highlights from "../../Components/HighLights/highlights";
import { getUserDetails, self } from "../../Services/userService";

const UserProfile = (props) => {
  if (!localStorage.token) {
    alert("Log In!");
    props.history.push("/login");
  }
  if (props.user.userName === null) {
    console.log("HEY");
    props.self();
  }
  let user = props.user;

  const [currentTab, setCurrentTab] = useState(0);

  return (
    <>
      <NavBar />
      <div className="userProfile">
        <div className="profile__section">
          <ProfileHeader user={user} />
          <ProfileTabs setCurrentTab={setCurrentTab} />
          <div className="profile__content">
            <div className="about">
              <UserBio bio={user.bio} />
              <div className="details">
                <PersonalDetails personalDetails={user.personalDetails} />
                <CollegeDetails collegeDetails={user.collegeDetails} />
              </div>
              <Highlights />
            </div>
          </div>
        </div>
        {currentTab === 0 ? (
          <div className="stats">
            <div className="views">
              <p className="number">80</p>
              <p>Views</p>
            </div>
            <div className="search">
              <p className="number">80</p>
              <p>Searches</p>
            </div>
            <div className="popularity">
              <p className="number">9/10</p>
              <p>Popularity Index</p>
            </div>
          </div>
        ) : null}
        <MainChat />
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

const mapDispatchToProps = (dispatch) => {
  return {
    getUserDetails: () => {
      return dispatch(getUserDetails());
    },
    self: () => {
      return dispatch(self());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
