import { Comment, Favorite, MoreHoriz } from "@material-ui/icons";
import React from "react";
import profile from "../../Assets/Images/free-profile-photo-whatsapp-4.png";
import "./post.css";

var name = "Captain America";
var time = "12 Apr at 9 PM";

const Post = (props) => {
  let media = props.media;
  return (
    <div className="post">
      <div className="post__header">
        <img
          src={props.user ? props.user.profilePhotoURL : profile}
          alt="profile"
        />
        <div className="post__owner">
          <p className="name">
            {props.user
              ? props.user.firstName + " " + props.user.lastName
              : name}
          </p>
          <div className="spacer"></div>
          <p className="time">{props.post ? props.post.timeStamp : time}</p>
        </div>
        <div className="spacer"></div>
        <MoreHoriz />
      </div>
      <div className="post__contents">
        {media ? <img src={media} alt="post" /> : null}
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
          <Favorite />
          <p>1.2k</p>
        </div>
        <div className="comments">
          <Comment />
          <p>25</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
