import React, { useState } from "react";
import "./createPost.css";
import profile from "../../Assets/Images/profile_user@2x.png";
import { Image } from "@material-ui/icons";
import CreatePostForm from "./createPostForm";

const CreatePost = (props) => {
  const [postForm, setPostForm] = useState(false);
  const [file, setFile] = useState(null);

  const onPostSubmit = (post) => {
    for (var pair of post.entries()) {
      console.log(pair[0]);
      console.log(pair[1]);
    }
  };

  return (
    <div className="createpost">
      <p>Share Something</p>
      <div className="createpost__main">
        <CreatePostForm
          user={props.user}
          show={postForm}
          file={file}
          handleClose={() => {
            setPostForm(false);
            setFile(null);
          }}
          onPostSubmit={onPostSubmit}
        />
        <img src={props.user.profilePhotoURL || profile} alt="profile" />
        <button
          className="createpost__input"
          onClick={() => {
            setPostForm(true);
          }}
        >
          Something interesting goes here...
        </button>
        <button
          className="icons"
          onClick={() => {
            setFile(true);
            setPostForm(true);
          }}
        >
          <div className="icon">
            <Image />
          </div>
          Photo
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
