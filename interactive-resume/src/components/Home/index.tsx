import React from "react";
import './style.css';

const Home = () => {
  return (
    <div className="home-container">
        <div className="img-container"><img
        src="https://via.placeholder.com/150"
        alt="Profile"
        className="home-profile-img"
      /></div>
      
      <h1 className="home-name">Furkan Uzun</h1>
      <p className="home-username">@furkanuzun</p>
      <p className="home-job">Software Developer</p>
    </div>
  );
};

export default Home;
