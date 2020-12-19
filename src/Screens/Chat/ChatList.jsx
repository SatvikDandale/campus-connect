import React from "react";
import ChatPersonCard from "../../Components/ChatPerson/ChatPersonCard";
import "./ChatList.css";
import { connect } from "react-redux";
function ChatList(props) {
  const getLastMessage = (key) => {
    let tempMessages = props.chatData.messages[key];
    return tempMessages[tempMessages.length - 1];
  };
  return (
    <div className="chat__list">
      {Object.keys(props.chatData.messages).map((key) => {
        const chatDetails = {
          name: key,
          lastMessage: getLastMessage(key),
        };
        return (
          <ChatPersonCard
            key={key}
            chatProfile={chatDetails}
            changeUser={props.changeUser}
          />
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    chatData: state.chatReducer,
  };
};

export default connect(mapStateToProps, null)(ChatList);
