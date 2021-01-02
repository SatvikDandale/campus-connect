import React, {useEffect} from "react";
import { connect } from "react-redux";
import { getProfilePhotoForUserName } from "../../Services/feedService";
import { CircularProgress } from "@material-ui/core";
import "./chatMinimised.css";

function PersonCardMinimised({chatProfile, changeUser}) {
  const [profileURL, setProfileURL] = React.useState("");

  useEffect(() => {
    getProfilePhotoForUserName(chatProfile.name).then((url) => {
      setProfileURL(url);
    });
  }, [chatProfile.name]);

  console.log(chatProfile);
  return (
    <div style={{marginLeft: 0}} className="person__card" onClick={() => changeUser(chatProfile.name)}>
      <img src={profileURL} alt="" />
    </div>
  );
}

function ChatMinimised(props) {
  const people = Object.keys(props.chatData.messages);
  return (
    <div className="chat__minimised__column">
      {props.chatData.isConvoListLoaded ? people.map((key) => {
        const chatDetails = {
          name: key,
        };
        return <PersonCardMinimised 
          key={key}
          chatProfile={chatDetails}
          changeUser={props.changeUser}
        />
    }) : <CircularProgress />}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    chatData: state.chatReducer,
  };
};

export default connect(mapStateToProps, null)(ChatMinimised);
