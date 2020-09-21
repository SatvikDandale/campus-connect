import React from "react";
import "./createPost.css";
import profile from "../../Assets/profile_user@2x.png";
import { CheckBox, PermMedia } from "@material-ui/icons";

const CreatePost = () => {
  return (
    <div className="createpost">
      <p>Share Something</p>
      <div className="createpost__main">
        <img src={profile} alt="profile" />
        <input
          className="createpost__input"
          placeholder="Something interesting goes here..."
        ></input>
        <div className="icons">
          <div>
            <PermMedia />
          </div>
          <div>
            <CheckBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
