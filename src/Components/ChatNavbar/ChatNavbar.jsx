import { ArrowBack } from "@material-ui/icons";
import React from "react";
import "./ChatNavbar.css";

function ChatNavbar(props) {
  return (
      <div className="chat__navbar">
        <div className="chatnavbar__heading">
        <div className="back__arrow" onClick={()=>props.changeUser("")}>{props.currentChat ? <ArrowBack /> : null}</div>
          <p className="chatnavbar__name">{props.currentChat ? props.currentChat : "MESSAGES"}</p>
        </div>
      </div>
  );
}

export default ChatNavbar;
