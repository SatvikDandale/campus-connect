import { ArrowRight } from "@material-ui/icons";
import React, { useState } from "react";
import ChatScreen from "./ChatScreen";
import "./mainChat.css";

export default function MainChat(props) {
  const [minimised, setMinimised] = useState(
    props.minimised !== undefined ? props.minimised : true
  );
  const [toggle, showToggle] = useState(false);
  return (
    <div className={minimised ? "chat__minimised" : "chat"}>
      <div
        className={`toggle__arrow ${!minimised ? `` : `hidden`}`}
        onMouseEnter={() => showToggle(true)}
        onMouseLeave={() => showToggle(false)}
      >
        <div
          className="arrow__div"
          style={{
            height: "50%",
            display: !minimised ? "flex" : "none",
            color: toggle ? "black" : "transparent",
          }}
          onClick={() => setMinimised(true)}
        >
          <ArrowRight />
        </div>
      </div>
      <ChatScreen minimised={minimised} setMinimised={setMinimised} />
    </div>
  );
}
