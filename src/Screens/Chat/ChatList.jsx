import React from "react";
import ChatPersonCard from "../../Components/ChatPerson/ChatPersonCard";
import "./ChatList.css";
function ChatList(props) {
  var messageDictionary = {
    Pierre: {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pierre-Person.jpg/1200px-Pierre-Person.jpg",
      name: "Pierre",
      lastMessage: "Hi",
    },
    Jane: {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pierre-Person.jpg/1200px-Pierre-Person.jpg",
      name: "Jane",
      lastMessage: "Hi",
    },
    Monica: {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pierre-Person.jpg/1200px-Pierre-Person.jpg",
      name: "Monica",
      lastMessage: "Hi",
    },
  };

  return (
    <div className="chat__list">
      {Object.keys(messageDictionary).map((key) => (
        <ChatPersonCard
          chatProfile={messageDictionary[key]}
          changeUser={props.changeUser}
        />
      ))}
    </div>
  );
}

export default ChatList;
