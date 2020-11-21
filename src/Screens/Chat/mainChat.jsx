import { ArrowRight } from "@material-ui/icons";
import React, { useState } from "react";
import ChatScreen from "./ChatScreen";
import "./mainChat.css";
import openSocket from "socket.io-client";

const chatServerURL = "http://127.0.0.1:3100";

class MainChat extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  // socket = openSocket(chatServerURL);

  state = {
    minimised: true,
    toggle: false,
  };

  setMinimised = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        minimised: !prevState.minimised,
      };
    });
  };

  showToggle = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        toggle: !prevState.toggle,
      };
    });
  };

  componentDidMount() {
    // fetch("http://localhost:3100/test");

    if (this.props.minimised !== undefined) {
      this.setState({
        minimised: this.props.minimised,
      });
    }
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
        />
      </div>
    );
  }
}

export default MainChat;
