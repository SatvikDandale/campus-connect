import React from "react";
import "./photoPost.css";

export default function PhotoPost(props) {
  return (
    <div className="photo__post">
      <img src={props.post.url} alt="post"></img>
    </div>
  );
}
