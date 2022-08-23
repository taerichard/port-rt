import React, { useState } from "react";
import "../components/AboutComponents/styles/about.css";
import myImage from "../images/about/me2.jpg";
import mainImage from "../images/about/main.jpg";
import { aboutServiceData } from "../components/AboutComponents/aboutServicesCard/aboutServiceData";
import AboutServiceCard from "../components/AboutComponents/aboutServicesCard/AboutServiceCard";
import ContactContent from "../components/HomeComponents/ContactContent";
import "../components/HomeComponents/styles/contactContentStyles.css";
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
          Seattle
          <br />
          Washington
        </h3>
        <p className="about-section1__name">My name is Richard Tae.</p>
        <br />
        <p className="about-section1__bio">
          I am a front end developer with a passion for web design. Recently,
          graduated with a bachelors in Software Development. My projects
          include personal and client work. I have experience in team
          collaboration.
        </p>
        <br />
        <p className="about-section1__bio2">
          I take each project as an opportunity to learn new concepts and create
          relationships.
        </p>
        <div className="about-section1-imageContainer2">
          <img src={myImage} />
        </div>
      </div>
      <div className="about-section2">
        <h4 className="about-section2-number">02/</h4>
        <h3 className="about-section2-title">services</h3>
        {/* <p>
          I plan, design, and test front end applications. I deliver strong and
          user-friendly designs.
        </p> */}
        <div className="about-section2-services"></div>
        <div className="about-section2__serviceCards">
          {aboutServiceData.map(({ title, description }) => {
            return <AboutServiceCard title={title} description={description} />;
          })}
        </div>
      </div>
      <div className="about-section3">
        <h3 className="about-section3-number">03/</h3>
        <h4 className="about-section3-title">contact me</h4>
        <h4 className="about-section3-title2">design & development</h4>
        <h3 className="about-section3-email">
          tae
          <br />
          richard@
          <br />
          gmail.com
        </h3>
      </div>
    </div>
  );
};

export default About;
