import React from "react";
import ProfilePhoto from "../../Assets/Images/free-profile-photo-whatsapp-4.png";
import "./team.css";

export default function Team() {

    const MemberCard = (
        <div className="member">
            <div className="member__card__img">
                <img src={ProfilePhoto} alt="profile"></img>
            </div>
            <div className="member__name">John Doe</div>
        </div>
    );

  return (
    <div className="team__members__card highlights">
      <p className="highlights__heading">Our Team</p>
      <div className="line"></div>
      <div style={{ height: "1.2rem" }}></div>
      <div className="team__content">
      <div className="highlights__contents committee__team">
        <div className="experience__title committee__members">
          <h5>General Secretary</h5>
          <div style={{ height: "1rem" }}></div>
          <div className="line faint"></div>
        </div>
        <div className="members__list">
            {MemberCard}
            {MemberCard}
            {MemberCard}
            {MemberCard}
            {MemberCard}
            {MemberCard}
            {MemberCard}
            {MemberCard}
            {MemberCard}
            {MemberCard}
            {MemberCard}
        </div>
      </div>
      <div className="highlights__contents committee__team">
        <div className="experience__title committee__members">
          <h5>Core Team</h5>
          <div style={{ height: "1rem" }}></div>
          <div className="line faint"></div>
        </div>
        <div className="members__list">
            {MemberCard}
            {MemberCard}
            {MemberCard}
            {MemberCard}
            {MemberCard}
            {MemberCard}
            {MemberCard}
            {MemberCard}
            {MemberCard}
            {MemberCard}
            {MemberCard}
        </div>
      </div>
    
      </div>
      </div>
  );
}
