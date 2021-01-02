import React from "react";
import ChatPersonCard from "../../Components/ChatPerson/ChatPersonCard";
import "./ChatList.css";
import { connect } from "react-redux";
import { CircularProgress } from "@material-ui/core";
function ChatList(props) {
  const getLastMessage = (key) => {
    let tempMessages = props.chatData.messages[key];
    return tempMessages[tempMessages.length - 1];
  };

  const helperMessage = (
    <div className="helper__text">
      {props.chatData.isConvoError ? props.chatData.isConvoError : "Looks like you have not talked to anyone. Feeling shy?"}
    </div>
  )

  return (
    <div className={"chat__list " + (props.people && props.people.length === 0 ? "empty__list" : "")}>
      {props.chatData.isConvoListLoaded ? props.people && props.people.length > 0 
      ? props.people.map((key) => {
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
      })
      : helperMessage
    : <CircularProgress />
    }
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    chatData: state.chatReducer,
  };
};

export default connect(mapStateToProps, null)(ChatList);
