import React from "react";
import { Scrollbars } from "react-custom-scrollbars";
import NewFeedProfile from "../../Components/NewsFeedProfile/newsFeedProfile";
import CreatePost from "../../Components/CreatePost/createPost";
import "./newsFeed.css";
import Post from "../../Components/Post/post";
import PostPhoto1 from "../../Assets/Images/smoke-colors-abstract-qo-1536x864.png";
import PostPhoto2 from "../../Assets/Images/abstract-dark-geometry-8k-n5-1536x864.png";
import MainChat from "../Chat/mainChat";
import NavBar from "../NavBar/navBar";

const NewsFeed = () => {
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
        <MainChat />
      </div>
    </>
  );
};

export default NewsFeed;
