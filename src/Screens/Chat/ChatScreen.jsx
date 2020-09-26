import React from "react";
import ChatPeople from "./ChatPeople";
import PersonalChat from "./../../Components/PersonalChat/PersonalChat";
import ChatNavbar from "../../Components/ChatNavbar/ChatNavbar";
import ChatTextbox from "../../Components/ChatTextbox/ChatTextbox";
import "./ChatScreen.css";
import ChatSearchbar from './../../Components/ChatSearchbar/ChatSearchbar';

class ChatScreen extends React.Component {
  state = {
    currentChat: "QW",
  };
  getCurrentChat = ()=>{
    return this.state.currentChat;
  }
  setCurrentChat = (currentChat) =>{
    this.setState({
      currentChat: currentChat
    });
  }
  render() {
    return (
      <div className="chat__screen">
        <ChatNavbar currentChat={this.state.currentChat} changeUser = {this.setCurrentChat}/>
        {!this.state.currentChat ? (
          <ChatPeople changeUser = {this.setCurrentChat} />
        ) : (
          <PersonalChat user={this.state.currentChat} />
        )}
        <div className="chatscreen__bottom">
          {!this.state.currentChat ? <ChatSearchbar/> : <ChatTextbox />}
        </div>
      </div>
    );
  }
}

export default ChatScreen;
