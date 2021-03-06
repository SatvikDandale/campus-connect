import React from "react";
import ChatList from "./ChatList";
import PersonalChat from "./../../Components/PersonalChat/PersonalChat";
import ChatNavbar from "../../Components/ChatNavbar/ChatNavbar";
import ChatTextbox from "../../Components/ChatTextbox/ChatTextbox";
import "./ChatScreen.css";
import ChatSearchBar from "./../../Components/ChatSearchbar/ChatSearchbar";
import ChatMinimised from "../../Components/ChatMinimised/chatMinimised";
import { setCurrentChat } from "../../Redux/Actions/chatAction";
import { connect } from "react-redux";

class ChatScreen extends React.Component {
  state = {
    currentChat: null,
    isLoaded: false,
    people: []
  };
  // getCurrentChat = () => {
  //   return this.state.currentChat;
  // };
  setCurrentChat = (currentChat) => {
    // this.setState({
    //   currentChat: currentChat,
    // });
    this.props.setCurrentChat(currentChat);
    this.props.setMinimised(false);
  };

  onSearchType = (newQuery) => {
    if (newQuery === "")
      this.setState({
        people: Object.keys(this.props.chatData.messages)
      })
    console.log(newQuery)
    let newPeople = Object.keys(this.props.chatData.messages).filter(person => person.includes(newQuery))
    this.setState({
      people: newPeople
    })
  }

  render() {
    if (!this.state.isLoaded) {
      if (Object.keys(this.props.chatData.messages).length > 0) {
        this.setState({
          people: Object.keys(this.props.chatData.messages),
          isLoaded: true
        })
      }
    }
    return (
      <div
        className={this.props.minimised ? "chat__minimised" : "chat__screen"}
      >
        {!this.props.minimised ? (
          <ChatNavbar
            currentChat={this.props.chatData.currentChat}
            changeUser={this.setCurrentChat}
          />
        ) : null}
        {!this.props.minimised ? (
          !this.props.chatData.currentChat ? (
            <ChatList changeUser={this.setCurrentChat} people={this.state.people}/>
          ) : (
            <PersonalChat currentChat={this.props.chatData.currentChat} />
          )
        ) : (
          <ChatMinimised changeUser={this.setCurrentChat} />
        )}

        {!this.props.minimised ? (
          <div className="chatscreen__bottom">
            {!this.props.chatData.currentChat ? (
              <ChatSearchBar onSearchType={this.onSearchType} />
            ) : (
              <ChatTextbox
                sendMessage={this.props.sendMessage}
                to={this.props.chatData.currentChat}
              />
            )}
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    chatData: state.chatReducer,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentChat: (currentChat) => {
      return dispatch(setCurrentChat(currentChat))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatScreen);
