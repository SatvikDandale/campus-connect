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
import {committeeSelf} from '../../Services/committeeService'

import "./newsFeed.css";
import { getNewsFeed } from "../../Services/feedService";
import { setMinimised } from "../../Redux/Actions/chatAction";

const NewsFeed = (props) => {
  console.log("HELLO")

  if (!localStorage.token) {
    // alert("Log In!");
    props.history.push("/login");
  }
  if (props.user.userName === null) {
    props.self().catch((error) => {
      props.committeeSelf().catch(() => {
        props.history.push("/login");
      })
      
    });
  }
  if (props.error.isError) {
    alert(props.error.errorMessage);
    if (props.error.redirect) {
      props.history.push(props.error.redirectPath);
    }
  }

  useEffect(() => {
    if (props.user.userName) props.getNewsFeed(props.user.userName, props.user.isCommittee);
    props.setMinimised(false);
  }, [props.user.userName, props.user.isCommittee]);

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
              return <Post post={post} {...props} />;
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
    getNewsFeed: (userName, isCommittee = false) => {
      return dispatch(getNewsFeed(userName, isCommittee));
    },
    setMinimised: (condition = false) => {
      return dispatch(setMinimised(condition))
    },
    committeeSelf: () => {
      return dispatch(committeeSelf())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed);
