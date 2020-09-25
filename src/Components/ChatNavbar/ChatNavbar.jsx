import { ArrowBack } from "@material-ui/icons";
import React from "react";
import "./ChatNavbar.css";

function ChatNavbar(props) {
  return (
      <div className="chat__navbar">
        <div className="chatnavbar__heading">
          {props.currentChat ? <ArrowBack /> : null}
          <p className="navbar__heading">{props.currentChat ? props.currentChat : "MESSAGES"}</p>
        </div>
      </div>
  );
}

export default ChatNavbar;
