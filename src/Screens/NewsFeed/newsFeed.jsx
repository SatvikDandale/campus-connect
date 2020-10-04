import React, { useState } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import NewFeedProfile from "../../Components/NewsFeedProfile/newsFeedProfile";
import CreatePost from "../../Components/CreatePost/createPost";
import "./newsFeed.css";
import Post from "../../Components/Post/post";
import PostPhoto1 from "../../Assets/smoke-colors-abstract-qo-1536x864.png";
import PostPhoto2 from "../../Assets/abstract-dark-geometry-8k-n5-1536x864.png";
import ChatScreen from "../Chat/ChatScreen";
import { ArrowRight } from "@material-ui/icons";
import MainChat from "../Chat/mainChat";

const NewsFeed = () => {
  const [minimised, setMinimised] = useState(true);

  const [toggle, showToggle] = useState(true);
  return (
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
  );
};

export default NewsFeed;
