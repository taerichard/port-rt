import React, { useState } from "react";
import "../components/AboutComponents/styles/about.css";
import myImage from "../images/about/me2.jpg";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-section-container">
        <h3 className="about-section__title">About</h3>
        <div className="about-section__image">
          <img src={myImage} />
        </div>
        <p>
          My name is Richard Tae. I am a front end developer with a passion for
          web development. Recently, graduated with a bachelors in Mobile
          Application Development.
        </p>
        <br />
        <p>
          Each project I take it as an opportunity to learn new concepts and
          create relationships.
        </p>
      </div>
      <div className="about-services-container"></div>
    </div>
  );
};

export default About;
