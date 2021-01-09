import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import MainChat from "../Chat/mainChat";
import ProfileHeader from "../../Components/ProfileHeader/profileHeader";
import { setMinimised } from "../../Redux/Actions/chatAction";
import { updateUserAbout } from "../../Services/userService";
import ProfileTabs from "../../Components/ProfileTabs/profileTabs";
import UserBio from "../../Components/UserBio/userBio";
import BioForm from "../../Components/AboutPageModals/bioForm";
import Team from "../../Components/Team/team";
import FollowersAndFollowingList from "../../Components/FollowersList/followers";
import PhotosTab from "../../Components/PhotosTab/photosTab";
import Events from "../../Components/Events/event";
import EventsPage from "../../Components/Events/eventsPage";

const OtherCommittee = (props) => {
  let user = props.user;

  useEffect(() => {
    props.setMinimised(true);
  });

  const [currentTab, setCurrentTab] = useState(0);

  return (
    <div className="userProfile">
      <div className="profile__section">
        <ProfileHeader
          user={user}
          committee={true}
          currentUser={props.currentUser}
        />
        <ProfileTabs setCurrentTab={setCurrentTab} committee={true} />
        <div className="profile__content">
          {currentTab === 0 ? (
            <div className="about">
              <UserBio bio={user.bio} committee={true}></UserBio>

              <Team />
            </div>
          ) : null}

          {currentTab === 1 ? <PhotosTab userName={user.userName} /> : null}
          {currentTab === 2 ? (
            <FollowersAndFollowingList people={user.followers} />
          ) : null}
          {currentTab === 3 ? <EventsPage user={user}/> : null}
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
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUserAbout: (updatedUserDetails) => {
      return dispatch(updateUserAbout(updatedUserDetails));
    },
    setMinimised: (condition = false) => {
      return dispatch(setMinimised(condition));
    },
  };
};
export default connect(null, mapDispatchToProps)(OtherCommittee);
