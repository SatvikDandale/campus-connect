import React from "react";
import ChatPersonCard from "../../Components/ChatPerson/ChatPersonCard";
import "./ChatList.css";
function ChatList(props) {
  var messageDictionary = {
    User0: {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pierre-Person.jpg/1200px-Pierre-Person.jpg",
      name: "User0",
      lastMessage: "Hi",
    },
    User123: {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pierre-Person.jpg/1200px-Pierre-Person.jpg",
      name: "User123",
      lastMessage: "Hi",
    },
    satvik: {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pierre-Person.jpg/1200px-Pierre-Person.jpg",
      name: "satvik",
      lastMessage: "Hi",
    },
  };

  return (
    <div className="chat__list">
      {Object.keys(messageDictionary).map((key) => (
        <ChatPersonCard
          key={key}
          chatProfile={messageDictionary[key]}
          changeUser={props.changeUser}
        />
      ))}
    </div>
  );
}

export default ChatList;
