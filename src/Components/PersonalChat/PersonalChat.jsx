import React from "react";
import "./PersonalChat.css";
import { Scrollbars } from "react-custom-scrollbars";
class PersonalChat extends React.Component {
  state = {
    messageDictonary: [
      {
        sender: "QW",
        reciever: "try",
        message: "Hi",
        time: new Date().toISOString(),
      },
      {
        sender: "try",
        reciever: "Rak",
        message: "Hello",
        time: new Date().toISOString(),
      },
      {
        sender: "xyz",
        reciever: "try",
        message: "Bye1",
        time: new Date().toISOString(),
      },
      {
        sender: "QW",
        reciever: "try",
        message: "Hi",
        time: new Date().toISOString(),
      },
      {
        sender: "try",
        reciever: "Rak",
        message: "Hello",
        time: new Date().toISOString(),
      },
      {
        sender: "xyz",
        reciever: "try",
        message: "Bye1",
        time: new Date().toISOString(),
      },
      {
        sender: "QW",
        reciever: "try",
        message: "Hi",
        time: new Date().toISOString(),
      },
      {
        sender: "try",
        reciever: "Rak",
        message: "Hello",
        time: new Date().toISOString(),
      },
      {
        sender: "xyz",
        reciever: "try",
        message: "Bye1",
        time: new Date().toISOString(),
      },
      {
        sender: "QW",
        reciever: "try",
        message: "Hi",
        time: new Date().toISOString(),
      },
      {
        sender: "try",
        reciever: "Rak",
        message: "Hello",
        time: new Date().toISOString(),
      },
      {
        sender: "xyz",
        reciever: "try",
        message: "Bye1",
        time: new Date().toISOString(),
      },
    ],
  };
  render() {
    console.log(this.props);
    const yourName = "QW";
    return (
      <Scrollbars autoHide>
        <div className="chat__messages">
          {this.state.messageDictonary.map((message) => {
            return (
              <div
                className={
                  yourName !== message.sender
                    ? "message__card"
                    : "message__self__card"
                }
              >
                <p style={{ fontSize: 12 }}>{message.sender}</p>
                <p style={{ fontSize: 15 }}>{message.message}</p>
              </div>
            );
          })}
        </div>
      </Scrollbars>
    );
  }
}

export default PersonalChat;
