import React from "react";
import { Scrollbars } from "react-custom-scrollbars";
import NewFeedProfile from "../../Components/NewsFeedProfile/newsFeedProfile";
import CreatePost from "../../Components/CreatePost/createPost";
import "./newsFeed.css";
import Post from "../../Components/Post/post";
import PostPhoto1 from "../../Assets/Images/smoke-colors-abstract-qo-1536x864.png";
import PostPhoto2 from "../../Assets/Images/abstract-dark.png";
import MainChat from "../Chat/mainChat";
import NavBar from "../NavBar/navBar";
import { connect } from "react-redux";
import { getUserDetails, self } from "../../Services/userService";

const NewsFeed = (props) => {
  if (!localStorage.token) {
    alert("Log In!");
    props.history.push("/login");
  }
  if (props.user.userName === null) {
    console.log("HEY");
    props.self();
  }

  return (
    <>
      <NavBar />
      <div className="newsfeed">
        <div className="newsfeed__profile">
          <NewFeedProfile />
        </div>
        <div className="newsfeed__feed">
          <Scrollbars autoHide>
            <CreatePost />
            <Post media={PostPhoto1} />
            <Post />
            <Post media={PostPhoto2} />
          </Scrollbars>
        </div>
        <MainChat minimised={false} />
      </div>
    </>
  );
};

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

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed);
