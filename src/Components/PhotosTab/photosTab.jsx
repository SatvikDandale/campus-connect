import React, { useState } from "react";
import ViewQuiltIcon from "@material-ui/icons/ViewQuilt";
import SubjectIcon from "@material-ui/icons/Subject";
import "./photosTab.css";
import Post from "../Post/post";
import PhotoPost from "../PhotoPost/photoPost";
import { connect } from "react-redux";
import {
  getPostsByUserName,
  getPostsForOtherUser,
} from "../../Services/postService";
import { useEffect } from "react";

function PhotosTab(props) {
  const [current, setCurrent] = useState(0);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (props.self) {
      props.getPostsByUserName(props.userName).then((newPosts) => {
        setPosts(newPosts);
      });
    } else {
      props.getPostsForOtherUser(props.userName).then((newPosts) => {
        setPosts(newPosts);
      });
    }
  }, []);

  return (
    <div className="photos__section">
      <div className="photos__tabs">
        <div
          className={`tab__item ${current === 0 ? "active" : ""}`}
          onClick={() => {
            setCurrent(0);
          }}
        >
          <ViewQuiltIcon />
          Photos
        </div>
        <div
          className={`tab__item ${current === 1 ? "active" : ""}`}
          onClick={() => {
            setCurrent(1);
          }}
        >
          <SubjectIcon />
          Scribbles
        </div>
      </div>
      {current === 0 ? (
        <div className="photos">
          {posts.map((post) => {
            // if (post.url) return <PhotoPost post={post} />;
            return post.url ? <PhotoPost post={post} /> : null;
          })}
        </div>
      ) : (
        <div className="scribbles">
          {posts.map((post) => {
            // if (!post.url) return <Post post={post} />;
            return !post.url ? (
              <Post
                post={post}
                user={props.self ? props.user : props.otherUser}
              />
            ) : null;
          })}
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
    otherUser: state.userReducer.otherUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPostsByUserName: (userName) => {
      return dispatch(getPostsByUserName(userName));
    },
    getPostsForOtherUser: (userName) => {
      return dispatch(getPostsForOtherUser(userName));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotosTab);
