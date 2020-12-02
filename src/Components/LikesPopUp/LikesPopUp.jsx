import React, { useEffect } from "react";
import { Modal } from "react-bootstrap";
import { RemoveCircle } from "@material-ui/icons";
import "./LikesPopUp.css";
import { getProfilePhotoForUserName } from "../../Services/feedService";

const LikeCard = ({ userName }) => {
  console.log("In likecard");
  console.log(userName);

  const [profileURL, setProfileURL] = React.useState("");

  useEffect(() => {
    getProfilePhotoForUserName(userName).then((url) => {
      setProfileURL(url);
    });
  }, [userName]);
  return (
    <div className="person__card">
      <div className="person__card__img">
        <img src={profileURL} alt="profile"></img>
      </div>
      <div className="person__card__details">
        <div className="person__card__name">{userName}</div>
      </div>
      <div className="spacer"></div>
      <div className="person__card__options">
        <RemoveCircle className="remove__person" />
      </div>
    </div>
  );
};

const LikesPopUp = (props) => {
  console.log(props);
  return (
    <Modal  show={props.show} onHide={props.handleClose}>
      <Modal.Header
        closeButton
        style={{ fontFamily: "bold", fontSize: 25, alignItems: "center" }}
      >
       <p>Likes</p> 
      </Modal.Header>
      <Modal.Body>
        <div>
          <div className="likes__list">
            {props.users
              ? props.users.map((userName) => {
                  return <LikeCard userName={userName} />;
                })
              : null}
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};
export default LikesPopUp;
