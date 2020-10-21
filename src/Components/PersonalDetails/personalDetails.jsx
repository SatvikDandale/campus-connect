import React from "react";

const PersonalDetails = ({ personalDetails }) => {
  return (
    <div className="personal__details details_card">
      <p className="details_heading">Home Town</p>
      <div className="line"></div>
      <p className="details_entry">{"Pune, India"}</p>

      <p className="details_heading">Talents</p>
      <div className="line"></div>
      <div className="entries">
        {personalDetails.talents.length > 0 ? (
          personalDetails.talents.map((talent) => (
            <p className="details_entry entry_card">{talent}</p>
          ))
        ) : (
          <p className="details_entry entry_card">No talents Added</p>
        )}
      </div>

      <p className="details_heading">Achievements</p>
      <div className="line"></div>
      <div className="entries">
        {personalDetails.achievements.length > 0 ? (
          personalDetails.achievements.map((achievement) => (
            <p className="details_entry entry_card">{achievement}</p>
          ))
        ) : (
          <p className="details_entry entry_card">No achievements added</p>
        )}
      </div>
    </div>
  );
};

export default PersonalDetails;
