import React from "react";
import "./chatMinimised.css";

export default function ChatMinimised(props) {
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
    Monika: {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pierre-Person.jpg/1200px-Pierre-Person.jpg",
      name: "Monika",
      lastMessage: "Hi",
    },
  };
  return (
    <div className="chat__minimised__column">
      {Object.keys(messageDictionary).map((key, index) => (
        <img
          key={index}
          src={messageDictionary[key]["image"]}
          alt="person"
          onClick={() => props.changeUser(messageDictionary[key]["name"])}
        />
      ))}
    </div>
  );
}
