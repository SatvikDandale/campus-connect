import React from "react";
import ChatList from "./ChatList";
import PersonalChat from "./../../Components/PersonalChat/PersonalChat";
import ChatNavbar from "../../Components/ChatNavbar/ChatNavbar";
import ChatTextbox from "../../Components/ChatTextbox/ChatTextbox";
import "./ChatScreen.css";
import ChatSearchBar from "./../../Components/ChatSearchbar/ChatSearchbar";
import ChatMinimised from "../../Components/ChatMinimised/chatMinimised";

class ChatScreen extends React.Component {
  state = {
    currentChat: null,
  };
  getCurrentChat = () => {
    return this.state.currentChat;
  };
  setCurrentChat = (currentChat) => {
    this.setState({
      currentChat: currentChat,
    });
    this.props.setMinimised(false);
  };

  render() {
    return (
      <div
        className={this.props.minimised ? "chat__minimised" : "chat__screen"}
      >
        {!this.props.minimised ? (
          <ChatNavbar
            currentChat={this.state.currentChat}
            changeUser={this.setCurrentChat}
          />
        ) : null}
        {!this.props.minimised ? (
          !this.state.currentChat ? (
            <ChatList changeUser={this.setCurrentChat} />
          ) : (
            <PersonalChat user={this.state.currentChat} />
          )
        ) : (
          <ChatMinimised changeUser={this.setCurrentChat} />
        )}

        {!this.props.minimised ? (
          <div className="chatscreen__bottom">
            {!this.state.currentChat ? (
              <ChatSearchBar />
            ) : (
              <ChatTextbox
                sendMessage={this.props.sendMessage}
                to={this.state.currentChat}
              />
            )}
          </div>
        ) : null}
      </div>
    );
  }
}

export default ChatScreen;
