import { ArrowRight } from "@material-ui/icons";
import React, { useState } from "react";
import ChatScreen from "./ChatScreen";
import "./mainChat.css";
import openSocket from "socket.io-client";
import {connect} from "react-redux"

const chatServerURL = "http://127.0.0.1:3100";

class MainChat extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  socket = openSocket(chatServerURL);

  state = {
    minimised: true,
    toggle: false,
  };

  sendMessage = (message) => {
      console.log(message);
      const payload = {
    
    "to": "satvik",
    "from": "User123",
    message,
    "type": "text"
}


      // let payload = {message}
      this.socket.emit('send',payload, (error)=> {
        console.log(error);
      })
  }

  setMinimised = (condition) => {
    this.setState({
      minimised: condition,
    });
  };

  showToggle = (condition) => {
    this.setState({
      toggle: condition,
    });
  };

  componentDidMount() {
    // fetch("http://localhost:3100/test");

    if (this.props.minimised !== undefined) {
      this.setState({
        minimised: this.props.minimised,
      });
    }

    this.socket.emit('join', {userName: this.props.user.userName},(error)=>{
      console.log(error);
    })

    this.socket.on('recieveMessage', (newMessage)=>{
      console.log(newMessage);
    })
  }

  render() {
    return (
      <div className={this.state.minimised ? "chat__minimised" : "chat"}>
        <div
          className={`toggle__arrow ${!this.state.minimised ? `` : `hidden`}`}
          onMouseEnter={() => this.showToggle(true)}
          onMouseLeave={() => this.showToggle(false)}
        >
          <div
            className="arrow__div"
            style={{
              height: "50%",
              display: !this.state.minimised ? "flex" : "none",
              color: this.state.toggle ? "black" : "transparent",
            }}
            onClick={() => this.setMinimised(true)}
          >
            <ArrowRight />
          </div>
        </div>
        <ChatScreen
          minimised={this.state.minimised}
          setMinimised={this.setMinimised}
          sendMessage={this.sendMessage}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user
  }
}


export default connect(mapStateToProps,null)(MainChat);
