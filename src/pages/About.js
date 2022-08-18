import React, { useState } from "react";
import "../components/AboutComponents/styles/about.css";
import myImage from "../images/about/me2.jpg";
import mainImage from "../images/about/main.jpg";
import ServiceCard from "../components/AboutComponents/aboutCard/AboutCard.js";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-section1">
        <h4 className="about-section1-number">01/</h4>
        <h3 className="about-section1-title">
          ui <br />
          developer
        </h3>
        <div className="about-section1-imageContainer1">
          <img src={mainImage} />
        </div>
        <h3 className="about-section1-city">
          Seattle,
          <br />
          Washington
        </h3>
        <p>My name is Richard Tae.</p>
        <br />
        <p>
          I am a front end developer with a passion for web design. Recently,
          graduated with a bachelors in Mobile Application Development. My
          projects include collaboration, client, and personal work.
        </p>
        <br />
        <p>
          Each project I take it as an opportunity to learn new concepts and
          create relationships
        </p>
        <div className="about-section1-imageContainer2">
          <img src={myImage} />
        </div>
      </div>
      <div className="about-section2">
        <h4 className="about-section2-number">02/</h4>
        <h3 className="about-section2-title">services</h3>
        <p>
          I plan, design, and test front end applications. I deliver strong and
          user-friendly designs.
        </p>
        <div className="about-section2__serviceCards">
          <ServiceCard />
        </div>
      </div>
      <div className="about-section3">
        <h4>contact me</h4>
        <h4>design & development</h4>
        <h3>taerichard@gmail.com</h3>
      </div>
    </div>
  );
};

export default About;
