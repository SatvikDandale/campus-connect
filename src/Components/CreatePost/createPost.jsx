import React, { useState } from "react";
import "./createPost.css";
import profile from "../../Assets/Images/profile_user@2x.png";
import { Image } from "@material-ui/icons";
import CreatePostForm from "./createPostForm";
import { createPost } from "../../Services/postService";
import { addOwnPost } from "../../Redux/Actions/feedAction";
import { connect } from "react-redux";

const CreatePost = (props) => {
  const [postForm, setPostForm] = useState(false);
  const [file, setFile] = useState(null);

  const onPostSubmit = async (post) => {
    for (var pair of post.entries()) {
      console.log(pair[0]);
      console.log(pair[1]);
    }
    try {
      let newPost = await createPost(post);
      props.addOwnPost(newPost);
    }
    catch(error) {
      alert(error);
    }
    setPostForm(false);
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

const mapDispatchToProps = (dispatch) => {
  return {
    addOwnPost: (post) => {
      return dispatch(addOwnPost(post))
    }
  }
}

export default connect(null, mapDispatchToProps)(CreatePost);
