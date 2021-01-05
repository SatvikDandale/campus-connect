import React from "react";
import { ExitToApp, RemoveCircle } from "@material-ui/icons";
import ProfilePhoto from "../../Assets/Images/free-profile-photo-whatsapp-4.png";
import "./followers.css";
import { withRouter } from "react-router-dom";

function FollowersAndFollowingList({ people, ...props }) {
  return (
    <div className="followers__list">
      {people
        ? people.map((follower) => {
            return (
              <div className="person__card" onClick={() => props.history.push(`/user/${follower}`)}>
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
          })
        : null}
    </div>
  );
}
export default withRouter(FollowersAndFollowingList);