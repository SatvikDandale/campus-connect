import React, { useEffect } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import LoadingOverlay from "react-loading-overlay";

import NewFeedProfile from "../../Components/NewsFeedProfile/newsFeedProfile";
import CreatePost from "../../Components/CreatePost/createPost";
import Post from "../../Components/Post/post";
import PostPhoto1 from "../../Assets/Images/smoke-colors-abstract-qo-1536x864.png";
import PostPhoto2 from "../../Assets/Images/abstract-dark.png";
import MainChat from "../Chat/mainChat";
import NavBar from "../NavBar/navBar";

import { connect } from "react-redux";
import { getUserDetails, self } from "../../Services/userService";

import "./newsFeed.css";
import { getNewsFeed } from "../../Services/feedService";

const NewsFeed = (props) => {
  // console.log()

  if (!localStorage.token) {
    // alert("Log In!");
    props.history.push("/login");
  }
  if (props.user.userName === null) {
    props.self();
  }
  if (props.error.isError) {
    alert(props.error.errorMessage);
    if (props.error.redirect) {
      props.history.push(props.error.redirectPath);
    }
  }

  useEffect(() => {
    if (props.user.userName) props.getNewsFeed(props.user.userName);
  }, [props.user.userName]);

  return !props.user.userName ? (
    <LoadingOverlay
      active={true}
      spinner
      text="Loading..."
      className="overlay"
    ></LoadingOverlay>
  ) : (
    <>
      <NavBar {...props} />
      <div className="newsfeed">
        <div className="newsfeed__profile">
          <NewFeedProfile />
        </div>
        <div className="newsfeed__feed">
          <Scrollbars autoHide>
            <CreatePost user={props.user} />
            {props.feed.map((post) => {
              return <Post post={post} />;
            })}
          </Scrollbars>
        </div>
        <MainChat minimised={false} />
      </div>{" "}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
    error: state.errorReducer,
    feed: state.feedReducer.feed,
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
    getNewsFeed: (userName) => {
      return dispatch(getNewsFeed(userName));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed);
