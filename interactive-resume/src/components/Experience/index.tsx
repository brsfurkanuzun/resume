import React from "react";
import "./style.css";
import Icon from "../../assets/experience";

const experienceData = [
  {
    title: "Software Development Specialist",
    company: "@ETIYA",
    year: "Jan 25 - Dec 21",
  },
  {
    title: "Frontend Developer",
    company: "@ConneXio Cloud",
    year: "Mar 22 - Aug 22",
  },
  {
    title: "Game Developer, Level Designer",
    company: "@ConneXio Cloud",
    year: "Mar 22 - Aug 22",
  },
  {
    title: "Internee",
    company: "@Caretta Software",
    year: "Jul 18 - Aug 18",
  },
];

const Experience = () => {
  return (
    <div className="page">
      <div className="title-container">
        <Icon
          primaryColor="var(--icon-color1)"
          secondaryColor="var(--icon-color2)"
        />
        <div>
          <h1 className="title">Places that</h1>
          <h1 className="title">I worked @</h1>
        </div>
      </div>
      <div className="blured-container-bottom">
        {experienceData.map((job, index) => (
          <div className="job-container" key={index}>
            <div className="job-title-container">
              <h3>{job.title}</h3>
              <p>{job.company}</p>
            </div>
            <div className="job-date">
              <p>{job.year}</p>
            </div>
            <div className="job-resp">
              <h4>Responsibilites</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Experience;
