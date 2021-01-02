import React, { useEffect } from "react";
import "./ChatPersonCard.css";
import { getProfilePhotoForUserName } from "../../Services/feedService";

function ChatPersonCard({ chatProfile, changeUser }) {
  const [profileURL, setProfileURL] = React.useState("");

  useEffect(() => {
    getProfilePhotoForUserName(chatProfile.name).then((url) => {
      setProfileURL(url);
    });
  }, [chatProfile.name]);

  console.log(chatProfile);
  return (
    <div className="person__card" onClick={() => changeUser(chatProfile.name)}>
      <img src={profileURL} alt="" />
      <div className="card__message">
        <p style={{ fontSize: 20 }}>{chatProfile.name}</p>
        {/* <p style={{ color: "gray" }}>{chatProfile.lastMessage["message"]}</p> */}
      </div>
    </div>
  );
}

export default ChatPersonCard;
