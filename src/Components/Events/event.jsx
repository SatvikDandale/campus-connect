import { Edit } from "@material-ui/icons";
import React from "react";

export default function Event(props) {
  return (
    <div className="post" onClick={() => props.setSelected(true)}>
      <div className="post__header"></div>
      <div className="bio">
        <div className="bio__heading">
          <div className="title">Melange - 2019</div>
          <Edit></Edit>
        </div>
        <pre className="bio__content">{`Description of the event`}</pre>
      </div>
    </div>
  );
}
