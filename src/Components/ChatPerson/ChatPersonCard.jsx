import React from "react";
import "./ChatPersonCard.css";
function ChatPersonCard({ chatProfile, changeUser }) {
  // console.log(chatProfile.name);
  return (
    <div className="person__card" onClick={() => changeUser(chatProfile.name)}>
      <img src={chatProfile.image} alt="" />
      <div className="card__message">
        <p style={{ fontSize: 20 }}>{chatProfile.name}</p>
        <p style={{ color: "gray" }}>{chatProfile.lastMessage}</p>
      </div>
    </div>
  );
}

export default ChatPersonCard;
