import React from "react";
import "./style.css";
import Memoji from "../../assets/memoji.webp";

const tags = [
  "Clean Code",
  "SOLID Principle",
  "Responsive Design",
  "UI/UX Design",
  "Tailwind",
  "Microservice Architecture",
  "Unit Testing",
  "Backend Collaboration",
  "API Integration",
  "Version Control",
  "Mobile Development",
];
const About = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div className="blured-container-about">
        <div className="blured-container-content-about">
          <div className="title-container-about">
            <div className="img-container">
              <img src={Memoji} alt="Profile" className="about-profile-img" />
            </div>
            <div>
              <h1 className="title">Hello,</h1>
              <h1 className="title">I'm Furkan</h1>
              <h1 className="title">Software developer</h1>
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
              <h3>About me</h3>
              <p>
                Full Stack Software Developer with a Bachelor's degree in
                Computer Engineering and 3+ years of hands-on experience in
                developing modern web and mobile applications. Proficient in
                both frontend and backend technologies, including React,
                TypeScript, Node.js, and microservice architectures. Adept at
                creating clean, minimalist UI designs and delivering scalable,
                maintainable code. Known for being a fast learner with a
                collaborative spirit, and a strong passion for writing robust
                code that solves real-world problems
              </p>
            </div>
            <div className="info-section">
              <h3>My client</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Malesuada dignissim condimentum feugiat nisl. Ultrices libero
                massa enim, tristique turpis egestas cras. Ut quis duis
                consequat augue commodo. Eget arcu, condimentum aliquet fusce
                mauris aliquet massa. Purus dolor euismod porta eget eu. Sodales
                tellus sit quisque nullam nisi sed massa. Turpis ege. Lacus,
                bibendum arcu ornare fames interdum risus. Non bibendum cursus
                enim, venenatis. Nunc egestas in ut massa praesent enim,
                egestas. Platea pellentesque nam odio.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="right-panel-container">
        <div>
          <h2>Furkan Uzun</h2>
          <p>@barisfurkanuzun</p>
          <a href="mailto:barisfurkanuz@gmail.com">barisfurkanuz@gmail.com</a>
        </div>

        <div className="tags-container">
          {tags.map((tag, index) => (
            <div key={index} className="tags-button">
              <p>{tag}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
