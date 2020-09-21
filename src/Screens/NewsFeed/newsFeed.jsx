import React from "react";
import NewFeedProfile from "../../Components/NewsFeedProfile/newsFeedProfile";
import CreatePost from "../../Components/CreatePost/createPost";
import "./newsFeed.css";

const NewsFeed = () => {
  return (
    <div className="newsfeed">
      <div className="newsfeed__profile">
        <NewFeedProfile />
      </div>
      <div className="newsfeed__feed">
        <CreatePost />
      </div>
      <div className="newsfeed__chat">
        <h1>Chat</h1>
      </div>
    </div>
  );
};

export default NewsFeed;
