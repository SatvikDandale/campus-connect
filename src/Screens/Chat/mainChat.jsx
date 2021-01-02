import { ArrowRight } from "@material-ui/icons";
import React from "react";
import ChatScreen from "./ChatScreen";
import "./mainChat.css";
import openSocket from "socket.io-client";
import { connect } from "react-redux";
import { addMessage, loadConvoList } from "../../Services/chatService";
import { chatServerURL } from "../../Services/apiService";

// const chatServerURL = "https://campus-social-media-chat.herokuapp.com/";
class MainChat extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  socket = openSocket(chatServerURL);

  state = {
    minimised: true,
    toggle: false,
    joined: false,
    intervalId: "",
  };

  sendMessage = (message, to) => {
    console.log(message);
    console.log(to);
    const payload = {
      to: to,
      from: this.props.user.userName,
      message,
      type: "text",
    };
    this.props.addMessage({ ...payload });
    // let payload = {message}
    this.socket.emit("send", payload, (error) => {
      console.log(error);
    });
    console.log(payload);
  };

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

  joinSocket = () => {
    if (!this.state.joined) {
      this.socket.emit(
        "join",
        { userName: this.props.user.userName },
        (error) => {
          console.log(error);
        }
      );
    }
    else {
      clearInterval(this.state.intervalId);
    }
  }

  componentDidMount() {
    // fetch("http://localhost:3100/test");
    this.props.loadConvoList(this.props.user.userName);

    if (this.props.minimised !== undefined) {
      this.setState({
        minimised: this.props.minimised,
      });
    }

    this.socket.on("joined", () => {
      console.log('Joined')
      this.setState({joined: true})
    })

    let intervalId = setInterval(this.joinSocket, 1000);
    this.setState({intervalId})

    this.socket.on("recieve", (newMessage) => {
      console.log(newMessage);
      // var to = newMessage.to;
      // newMessage.to = newMessage.from;
      // newMessage.from = to;
      this.props.addMessage(newMessage, true);
    });

    this.socket.on('disconnect', () => {
      let intervalId = setInterval(this.joinSocket, 5000);
      this.setState({intervalLength: 5000, joined: false, intervalId})
    })
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
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
    user: state.userReducer.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (message, isRecieved = false) => {
      console.log(message);
      return dispatch(addMessage(message, isRecieved));
    },
    loadConvoList: (userName) => {
      return dispatch(loadConvoList(userName));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainChat);
