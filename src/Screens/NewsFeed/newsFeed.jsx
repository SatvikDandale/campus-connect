import React from "react";
import NewFeedProfile from "../../Components/NewsFeedProfile/newsFeedProfile";
import CreatePost from "../../Components/CreatePost/createPost";
import "./newsFeed.css";
import Post from "../../Components/Post/post";
import PostPhoto1 from "../../Assets/smoke-colors-abstract-qo-1536x864.png";
import PostPhoto2 from "../../Assets/abstract-dark-geometry-8k-n5-1536x864.png";
import ChatScreen from "../Chat/ChatScreen";

const NewsFeed = () => {
  return (
    <div className="newsfeed">
      <div className="newsfeed__profile">
        <NewFeedProfile />
      </div>
      <div className="newsfeed__feed">
        <CreatePost />
        <Post media={PostPhoto1} />
        <Post />
        <Post media={PostPhoto2} />
      </div>
      <div className="newsfeed__chat">
        <ChatScreen/>
      </div>
    </div>
  );
};

export default NewsFeed;
