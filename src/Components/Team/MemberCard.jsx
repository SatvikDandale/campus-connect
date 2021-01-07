import { RemoveCircle } from "@material-ui/icons";
import React, { useEffect } from "react";
import { getProfilePhotoForUserName } from "../../Services/feedService";

export default function MemberCard(user, removeCommitteeMember) {
  const [profileURL, setProfileURL] = React.useState("");

  useEffect(() => {
    getProfilePhotoForUserName(user.userName).then((url) => {
      setProfileURL(url);
    });
  });

  return (
    <div className="member">
      <div className="member__card__img">
        <img src={profileURL} alt="profile"></img>
      </div>
      <div className="member__name">{user.userName}</div>
      {removeCommitteeMember && (
        <div className="person__card__options">
          <RemoveCircle className="remove__person" onClick={() => removeCommitteeMember(user)}/>
        </div>
      )}
    </div>
  );
}
