import React from "react";
import "./highlights.css";

const experiences = [
  {
    title: "General Secretary",
    place: "Vishwakarma Institute of Technology, Pune",
    organization: "EPEC",
    from: "Aug 2019",
    to: "Present",
    duration: "1 year 3 months",
  },
  {
    title: "SDE Intern",
    place: "California, USA",
    organization: "Google",
    from: "Aug 2018",
    to: "Jun 2019",
    duration: "1 year 3 months",
  },
  {
    title: "Function Execution Secretary",
    place: "Vishwakarma Institute of Technology, Pune",
    organization: "EPEC",
    from: "Aug 2017",
    to: "Jun 2018",
    duration: "1 year 3 months",
  },
  {
    title: "Function Execution Secretary",
    place: "Vishwakarma Institute of Technology, Pune",
    organization: "EPEC",
    from: "Aug 2017",
    to: "Jun 2018",
    duration: "1 year 3 months",
  },
];

function ExperienceCard({ experience }) {
  return (
    <div className="experience__card">
      <div className="experience__card__left">
        <div className="experience__title">
          <h5>{experience.title}</h5>
          <div className="separator"></div>
          <h6 className="experience__org">{experience.organization}</h6>
        </div>
        <p className="experience__place">{experience.place}</p>
      </div>
      <div className="experience__card__right">
        <p className="experience__duration">{experience.duration}</p>
        <h6 className="experience__date">
          {experience.from} - {experience.to}
        </h6>
      </div>
    </div>
  );
}

export default function Highlights() {
  console.log(experiences.length);
  return (
    <div className="highlights">
      <p className="highlights__heading">Highlights</p>
      <div className="line"></div>
      <div className="highlights__contents">
        <div className="highlights__cards">
          {experiences.map((experience, index) => {
            console.log(index);
            return (
              <div className="highlight__card__single">
                <div className="highlights__left">
                  <div
                    className={"bullet__line " + (index === 0 ? "del" : "")}
                  ></div>
                  <div
                    className={`bullet__circle ${
                      experience.organization === "Google" ? "active" : ""
                    }`}
                  ></div>
                  <div
                    className={
                      "bullet__line " +
                      (index === experiences.length - 1 ? "del" : "")
                    }
                  ></div>
                </div>

                <ExperienceCard experience={experience} />
                <div className="line"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
