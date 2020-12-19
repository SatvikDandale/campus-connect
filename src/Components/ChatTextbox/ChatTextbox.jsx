import React, { useState } from "react";
import SendIcon from "@material-ui/icons/Send";
import "./ChatTextbox.css";

function ChatTextbox(props) {
  const [message, setMessage] = useState("");
  return (
    <div className="chat__input">
      <input
        type="text"
        value={message}
        placeholder="Write a Message"
        onChange={(event) => {
          setMessage(event.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            props.sendMessage(message, props.to);
            setMessage("");
          }
        }}
      />
      <SendIcon
        onClick={() => {
          props.sendMessage(message, props.to);
          setMessage("");
        }}
      />
    </div>
  );
}

export default ChatTextbox;
