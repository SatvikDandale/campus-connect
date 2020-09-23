import React from "react";

const CollegeDetails = () => {
  return (
    <div className="college__details details_card">
      <p className="details_heading">College</p>
      <div className="line"></div>
      <p className="details_entry">Vishwakarma Institute of Technology, Pune</p>

      <p className="details_heading">Year</p>
      <div className="line"></div>
      <div className="entries">
        <p className="details_entry entry_card">Final Year</p>
      </div>
      <p className="details_heading">Branch</p>
      <div className="line"></div>
      <div className="entries">
        <p className="details_entry entry_card">Computer Engineering</p>
      </div>
    </div>
  );
};

export default CollegeDetails;
