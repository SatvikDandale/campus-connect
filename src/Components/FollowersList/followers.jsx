import { ExitToApp, RemoveCircle } from "@material-ui/icons";
import React from "react";
import ProfilePhoto from "../../Assets/Images/free-profile-photo-whatsapp-4.png";
import "./followers.css";

export default function FollowersAndFollowingList({ people }) {
  return (
    <div className="followers__list">
      {people.map((follower) => {
        return (
          <div className="person__card">
            <div className="person__card__img">
              <img src={ProfilePhoto} alt="profile"></img>
            </div>
            <div className="person__card__details">
              <div className="person__card__name">{follower}</div>
            </div>
            <div className="spacer"></div>
            <div className="person__card__options">
              <RemoveCircle className="remove__person" />
              <ExitToApp />
            </div>
          </div>
        );
      })}
    </div>
  );
}
