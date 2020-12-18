import React from "react";
import "./PersonalChat.css";
import { Scrollbars } from "react-custom-scrollbars";
import { connect } from "react-redux";
class PersonalChat extends React.Component {
  scrollbars = React.createRef();
  componentDidMount() {
    this.scrollbars.current.scrollToBottom();
  }
  componentDidUpdate() {
    this.scrollbars.current.scrollToBottom();
  }

  render() {
    // console.log(this.props);
    const yourName = "QW";
    return (
      <Scrollbars autoHide ref={this.scrollbars}>
        {this.props.chatData && this.props.chatData.messages ? (
          <div className="chat__messages">
            {this.props.chatData.messages[this.props.user].map(
              (message, index) => {
                return (
                  <div
                    className={
                      yourName !== message.sender
                        ? "message__card"
                        : "message__self__card"
                    }
                    key={index}
                  >
                    <p style={{ fontSize: 12 }}>{message.sender}</p>
                    <p style={{ fontSize: 15 }}>{message.message}</p>
                  </div>
                );
              }
            )}
          </div>
        ) : null}
      </Scrollbars>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state.chatReducer.message["User123"]);
  return {
    chatData: state.chatReducer,
  };
};

export default connect(mapStateToProps, null)(PersonalChat);
