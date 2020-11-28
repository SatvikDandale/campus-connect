import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import Picker from "emoji-picker-react";
import "./createPostForm.css";
import { EmojiEmotions } from "@material-ui/icons";

export default function CreatePostForm(props) {
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [showEmoji, setShowEmoji] = useState(false);
  const [postText, setPostText] = useState("");
  const [image, setImage] = React.useState("");
  const imageRef = React.useRef(null);

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject.emoji);
    setPostText(postText + emojiObject.emoji);
  };

  const generatePost = () => {
    if (postText.length === 0) {
      alert("Enter some caption");
      return;
    }

    var data = new FormData();
    if (image) {
      data.append("file", image);
    }
    data.append("caption", postText);

    props.onPostSubmit(data).then(() => {
      setPostText("");
      setImage(null);
    });
  };

  return (
    <Modal
      show={props.show}
      onHide={() => {
        setPostText("");
        setImage(null);
        props.handleClose();
      }}
    >
      <Modal.Header closeButton>Create a new Post</Modal.Header>
      <Modal.Body>
        <div className="post__header">
          <img src={props.user.profilePhotoURL} alt="profile"></img>
          <div className="post__owner">
            <p className="name">
              {props.user.firstName + " " + props.user.lastName}
            </p>
            <div className="spacer"></div>
            <p className="time">{new Date().toLocaleString()}</p>
          </div>
        </div>
        {props.file && (
          <div>
            <div className="file__section">
              <div className="file-select">
                <div className="file-select-button">Choose File</div>
                <input
                  type="file"
                  name="file"
                  accept="image/*"
                  className="select__file"
                  onChange={(event) => {
                    setImage(event.target.files[0]);
                  }}
                ></input>

                <div className="file-select-name" id="noFile">
                  {!image ? "No file chosen" : image.name}
                </div>
              </div>
              {image && (
                <>
                  <div className="spacer"></div>
                  <button
                    className="close__button"
                    onClick={() => {
                      setImage(null);
                    }}
                  >
                    X
                  </button>
                </>
              )}
            </div>
            {image && (
              <div>
                <img
                  className="img__upload__preview"
                  src={URL.createObjectURL(image)}
                  alt="upload"
                ></img>
              </div>
            )}
          </div>
        )}
        <textarea
          className="editor"
          placeholder="Say something here."
          spellCheck="false"
          value={postText}
          onChange={(event) => {
            setPostText(event.target.value);
          }}
        ></textarea>
        <div className="post__footer">
          {!showEmoji && (
            <div
              className="emoji__section"
              onClick={() => {
                setShowEmoji(true);
              }}
            >
              <EmojiEmotions /> Emoji
            </div>
          )}
          {showEmoji && (
            <div className="emoji__picker__section">
              <Picker onEmojiClick={onEmojiClick}></Picker>
              <button
                className="close__button"
                onClick={() => {
                  setShowEmoji(false);
                }}
              >
                X
              </button>
            </div>
          )}
          <button className="submit__new__post" onClick={generatePost}>
            Submit
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
}
