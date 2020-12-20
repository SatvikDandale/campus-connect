import React from "react";

const CollegeDetails = ({ collegeDetails }) => {
  return (
    <div className="college__details details_card">
      <p className="details_heading">College</p>
      <div className="line"></div>
      <p className="details_entry">{collegeDetails.collegeName}</p>

      <p className="details_heading">Year</p>
      <div className="line"></div>
      <div className="entries">
        <p className="details_entry entry_card">{collegeDetails.year}</p>
      </div>
      <p className="details_heading">Branch</p>
      <div className="line"></div>
      <div className="entries">
        <p className="details_entry entry_card">{collegeDetails.branch}</p>
      </div>
    </div>
  );
};

export default CollegeDetails;
