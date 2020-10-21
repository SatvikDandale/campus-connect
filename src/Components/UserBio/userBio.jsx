import { Edit } from "@material-ui/icons";
import React from "react";
import "./userBio.css";

const UserBio = ({ bio, toggleBio }) => {
  return (
    <div className="bio">
      <div className="bio__heading">
        Bio {<Edit onClick={() => toggleBio(true)}></Edit>}
      </div>
      <pre className="bio__content">{bio.trim()}</pre>
    </div>
  );
};

export default UserBio;
