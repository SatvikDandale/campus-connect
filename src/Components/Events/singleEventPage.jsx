import React from "react";

export default function SingleEventPage() {
  return (
    <div className="single__event">
      <div className="event__cover">
        <div className="event__title">Melange -2020</div>
      </div>
      <div className="post events__post">
      <div className="post__header"></div>
      <div className="bio">
        <div className="bio__heading">
          <div className="title">Description</div>
          {/* <Edit></Edit> */}
        </div>
        <pre className="bio__content">{`Mélange is organized every year, during the month of either February or March. It is a 4-5 day event`}</pre>
      </div>
    </div>
    </div>
  );
}
