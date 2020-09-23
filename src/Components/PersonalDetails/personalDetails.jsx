import React from "react";

const PersonalDetails = () => {
  return (
    <div className="personal__details details_card">
      <p className="details_heading">Home Town</p>
      <div className="line"></div>
      <p className="details_entry">Buldana, Maharashtra</p>

      <p className="details_heading">Talents</p>
      <div className="line"></div>
      <div className="entries">
        <p className="details_entry entry_card">Guitar</p>
        <p className="details_entry entry_card">Tabla</p>
      </div>

      <p className="details_heading">Achievements</p>
      <div className="line"></div>
      <div className="entries">
        <p className="details_entry entry_card">State Level Badminton</p>
        <p className="details_entry entry_card">State Level Chess</p>
      </div>
    </div>
  );
};

export default PersonalDetails;
