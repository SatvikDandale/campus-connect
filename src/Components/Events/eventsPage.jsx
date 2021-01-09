import React, { useState } from "react";
import ViewQuiltIcon from "@material-ui/icons/ViewQuilt";
import SubjectIcon from "@material-ui/icons/Subject";
import Event from "./event";
import './events.css'
import PastEvents from "./pastEvents";
import UpcomingEvents from "./upcomingEvents";
import SingleEventPage from "./singleEventPage";

export default function EventsPage(props) {
  const [current, setCurrent] = useState(0);

  return (
    <div className="events__screen">
      <div className="photos__tabs">
        <div
          className={`tab__item ${current === 0 ? "active" : ""}`}
          onClick={() => {
            setCurrent(0);
          }}
        >
          <ViewQuiltIcon />
          Past
        </div>
        <div
          className={`tab__item ${current === 1 ? "active" : ""}`}
          onClick={() => {
            setCurrent(1);
          }}
        >
          <SubjectIcon />
          Upcoming
        </div>
      </div>
      {current === 0 && <PastEvents user={props.user}/>}
      {current === 1 && <UpcomingEvents user={props.user}/>}
      
    </div>
  );
}
