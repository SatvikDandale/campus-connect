import { Edit } from "@material-ui/icons";
import React from "react";
import "./userBio.css";

const UserBio = ({ bio, toggleBio, committee }) => {
  return (
    <div className="bio">
      <div className="bio__heading">
        {committee ? "About Us" : "Bio"} {toggleBio ? <Edit onClick={() => toggleBio(true)}></Edit> : null}
      </div>
      <pre className="bio__content">{bio}</pre>
    </div>
  );
};

export default UserBio;
