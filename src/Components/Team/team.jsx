import { Edit } from "@material-ui/icons";
import React, { useEffect } from "react";
import ProfilePhoto from "../../Assets/Images/free-profile-photo-whatsapp-4.png";
import { getProfilePhotoForUserName } from "../../Services/feedService";
import "./team.css";
import MemberCard from "./MemberCard";
import { connect } from "react-redux";

function Team(props) {
  let roles = {};
  if (props.team) {
    props.team.forEach((person) => {
      let role = person.role;
      if (roles[role]) {
        roles[role].push(person);
      } else roles[role] = [person];
    });
  }
  console.log(roles);

  return (
    <div className="team__members__card highlights">
      <div className="card__header">
        <p className="highlights__heading">Our Team</p>

        {props.self ? (
          <Edit onClick={() => props.toggleTeam(true)}></Edit>
        ) : null}
      </div>
      <div className="line"></div>
      <div style={{ height: "1.2rem" }}></div>
      <div className={`team__content`}>
        {Object.keys(roles).map((role) => {
          return (
            <div className="highlights__contents committee__team">
              <div className="experience__title committee__members">
                <h5>{role}</h5>
                <div style={{ height: "1rem" }}></div>
                <div className="line faint"></div>
              </div>
              <div className="members__list">
                {roles[role].map((person) => MemberCard(person, props.removeCommitteeMember))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Team;
