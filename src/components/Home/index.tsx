import React from "react";
import "./style.css";
import Memoji from "../../assets/memoji.webp";
import CircularText from "../CircularText";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <CircularText
          text="Software Developer • Software Developer • "
          spinDuration={40}
          onHover="pause"
        >
          <div className="img-container-home">
            <img src={Memoji} alt="Profile" className="home-profile-img" />
          </div>
        </CircularText>
        <h1 className="home-name">Furkan Uzun</h1>
        <p className="home-username">@furkanuzun</p>
        {/* <p className="home-job">Software Developer</p> */}
        <div className="scroll-container">
          <div className="mouse" />
          <h5>SCROLL DOWN</h5>
        </div>
      </div>
    </>
  );
};

export default Home;
