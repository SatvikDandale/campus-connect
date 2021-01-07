import { Comment, Favorite, MoreHoriz, Send } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
// import profile from "../../Assets/Images/free-profile-photo-whatsapp-4.png";
import "./post.css";
import { getProfilePhotoForUserName } from "../../Services/feedService";
import { addComment, addLike } from "../../Services/postService";
import { connect } from "react-redux";
import {
  removeLike,
  getAllCommentsFromPost,
} from "./../../Services/postService";
import LikesPopUp from "./../LikesPopUp/LikesPopUp";
import Accordion from "react-bootstrap/Accordion";
import { Button } from "react-bootstrap";
import Comments from "./../Comments/Comments";
import moment from "moment";

var name = "Name Unknown";
var time = "Time Unknown";

const Post = (props) => {
  const [profileURL, setProfileURL] = React.useState("");
  const [likes, setLikes] = React.useState([]);

  useEffect(() => {
    getProfilePhotoForUserName(props.post.userName).then((url) => {
      setProfileURL(url);
    });
    setLikes(props.post.likes);
  }, [props.post.likes, props.post.userName]);

  const [showLikes, toggleLikes] = useState(false);

  const handleClose = () => {
    toggleLikes(false);
  };
  const [getComment, setComment] = useState("");

  const handleComment = (e) => {
    setComment(e.target.value);
  };

  const [hide, setHide] = useState(false);

  const handleToggle = () => {
    if (hide === true) setHide(false);
    else setHide(true);
  };

  const getRelativeTime = (timeStamp) => {
    return moment(timeStamp).fromNow();
  };

  return (
    <div className="post">
      <div className="post__header">
        <LikesPopUp
          show={showLikes}
          handleClose={handleClose}
          users={props.post.likes}
        />

        <img src={profileURL} alt="profile" />
        <div className="post__owner">
          <p
            className="name"
            onClick={() => props.history.push(`/user/${props.post.userName}`)}
          >
            {props.post ? "@" + props.post.userName : name}
          </p>
          <div className="spacer"></div>
          <p className="time">
            {props.post ? getRelativeTime(props.post.timeStamp) : time}
          </p>
        </div>
        <div className="spacer"></div>
        <MoreHoriz />
      </div>
      <div className="post__contents">
        {props.post.url ? <img src={props.post.url} alt="post" /> : null}
        <p className="caption">
          {props.post
            ? props.post.caption
            : `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.`}
        </p>
      </div>
      <div className="line"></div>
      <div className="reach">
        <div className="likes">
          <Favorite
            onClick={() => {
              if (likes && likes.includes(props.userName)) {
                props.removeLike(props.post.postID, props.userName).then(() => {
                  setLikes([...likes]);
                });
              } else {
                props.addLike(props.post.postID, props.userName).then(() => {
                  if (likes) setLikes([...likes, props.userName]);
                  else setLikes([props.userName]);
                });
              }
            }}
            style={{
              color: likes && likes.includes(props.userName) ? "red" : "black",
            }}
          />
          <p className="like__count" onClick={() => toggleLikes(true)}>
            {likes ? likes.length : 0}
          </p>
        </div>
        <div className="comments">
          <Comment
            onClick={() => {
              props.getAllCommentsFromPost(props.post.postID).then(() => {
                handleToggle();
              });
            }}
          />
          <p>25</p>
        </div>
      </div>

      {hide && (
        <div className="comment">
          <div className="comments__list">
            {props.post.comments
              ? props.post.comments.map((comment) => {
                  console.log(comment);
                  return (
                    <Comments
                      comment={comment.comment}
                      userName={comment.userName}
                    />
                  );
                })
              : null}
          </div>
          <div className="input__comment">
            <input
              placeholder="Write a comment"
              onChange={handleComment}
              value={getComment}
            ></input>
            <Send
              onClick={() => {
                const commentObj = {
                  postID: props.post.postID,
                  comment: getComment,
                  userName: props.userName,
                };
                props.addComment(commentObj);
                setComment("");
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userName: state.userReducer.user.userName,
    comments: state.feedReducer.feed.comments,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addLike: (postID, userName) => {
      return dispatch(addLike(postID, userName));
    },
    removeLike: (postID, userName) => {
      console.log("In map");
      return dispatch(removeLike(postID, userName));
    },
    addComment: (commentObj) => {
      return dispatch(addComment(commentObj));
    },
    getAllCommentsFromPost: (postID) => {
      return dispatch(getAllCommentsFromPost(postID));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
