import React from "react";
import "./style.css";
import Memoji from "../../assets/memoji.webp";
import Icon from "../../assets/miscellaneous";

const techs = [
  "Figma",
  "React",
  "React Native",
  "C#",
  "Java",
  "Python",
  "CSS",
  ".NET Core",
  "Node.js",
  "TypeScript",
  "JavaScript",
  "Docker",
  "ActiveMQ",
  "Next.js",
  "GraphQL",
  "REST API",
  "SQL",
  "MongoDB",
  "Kubernetes",
  "Git",
  "Sass",
  "Webpack",
  "Three.js",
  "Unity",
  "Blender",
  "SketchUp",
  "n8n",
];

const Miscellaneous = () => {
  return (
    <div style={{ height: "100vh", display: "flex" }}>
      <div className="blured-container-misc">
        <div className="blured-container-content-misc">
          <div className="title-container">
            <Icon
              primaryColor="var(--icon-color1)"
              secondaryColor="var(--icon-color2)"
            />
            <div>
              <h1 className="title">Can be</h1>
              <h1 className="title">Miscellaneous</h1>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "5rem",
              paddingLeft: "5vw",
            }}
          >
            <div className="info-section">
              <h3>Education</h3>
              <div>
                <p>2021 | 📍 Istanbul Bilgi University </p>
                <h4>Bachelor's Degree in Computer Engineering</h4>
                <p>
                  I earned my Bachelor's degree in Computer Engineering from
                  Istanbul Bilgi University, where I had the opportunity to
                  combine my technical skills with creativity. For my graduation
                  project, I developed BilgiLife, a fully interactive Unity 3D
                  application that allows students and prospective students to
                  explore the campus in a virtual environment. The campus was
                  carefully modeled in Blender and SketchUp, creating an
                  immersive experience that brings the university to life and
                  allows users to navigate and engage with its facilities as if
                  they were physically there.
                </p>
              </div>
            </div>
            <div className="info-section">
              <h3>Technology</h3>
              <div className="tags-container">
                {techs.map((tech, index) => (
                  <div key={index} className="tags-button">
                    <p>{tech}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right-panel-container">
        <div style={{ flexDirection: "column", display: "flex" }}>
          <h3>My spaces</h3>
          <a target="_blank" href="https://www.instagram.com/barisfurkanuzun/">
            Instagram
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/barisfurkanuzun/"
          >
            LinkedIn
          </a>
          <a target="_blank" href="https://github.com/brsfurkanuzun">
            GitHub
          </a>
          <a target="_blank" href="mailto:barisfurkanuz@gmail.com">
            X
          </a>
        </div>
      </div>
    </div>
  );
};

export default Miscellaneous;
