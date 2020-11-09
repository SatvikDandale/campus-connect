import { Edit } from "@material-ui/icons";
import React from "react";

const PersonalDetails = ({ personalDetails, togglePersonal }) => {
  return (
    <div className="personal__details details_card">
      <div className="details_heading">
        Home Town{" "}
        {togglePersonal ? <Edit onClick={() => togglePersonal(true)} /> : null}
      </div>
      <div className="line"></div>
      <p className="details_entry">
        {personalDetails ? personalDetails.homeTown : ""}
      </p>

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
