import React from "react";
import Profile from "../../Components/Profile/profile";
import CreatePost from "../../Components/CreatePost/createPost";
import "./newsFeed.css";

const NewsFeed = () => {
  return (
    <div className="newsfeed">
      <Profile />
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
