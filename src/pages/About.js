import React from "react";
import seattleImage from "../images/about/pc.jpg";
import selfImage from "../images/about/me.jpg";
import "../components/AboutComponents/styles/about.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-image-container">
        <h4>001/</h4>
        <span>Ui developer</span>
        <div className="about-image__1">
          <img className="" src={seattleImage} />
        </div>
        <span className="about-location">
          Located
          <br />
          Seattle,WA
        </span>
        <p>
          I'm a Front-End Developer with a passion for creating immersive user
          experiences.
          <br />
          <br />
          Recently graduated with a Bachelor of Applied Science in Mobile
          Application Development. I create web experiences through user-centric
          designs. My projects include collaboration with people and independent
          work.
          <br />
          <br />
          Each project I take it as an opportunity to learn new concepts and
          create lasting relationships.
        </p>
        <div className="about-image__2">
          <img src={selfImage} />
        </div>
      </div>
      <div className="services-container"></div>
    </div>
  );
};

export default About;
