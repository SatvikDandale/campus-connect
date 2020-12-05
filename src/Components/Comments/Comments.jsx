import React, { useEffect, useState } from "react";
import { getProfilePhotoForUserName } from "../../Services/feedService";
import "./Comments.css";
import { MoreHoriz } from '@material-ui/icons';


const Comments = (props) => {
    const [profileURL, setProfileURL] = React.useState("");
useEffect(() => {
  getProfilePhotoForUserName(props.userName).then(
    (url) => {
      setProfileURL(url);
    },
    [props.userName]
  );
});
// console.log("This")
// console.log(props);
  return (
    <div className="single__comment">
      <div className="comment__header">
        <img src={profileURL} alt="profile" />
        <div className="comment__owner">
          <p className="name">
            {props.userName ?  props.userName : null}
          </p>
          <div className="spacer"></div>
          <p className="comment">{props.comment ? props.comment : null}</p>
        </div>
        <div className="spacer"></div>
      </div>
    </div>
  );
};
export default Comments;
