import React, { useState } from "react";
import seattleImage from "../images/about/pc.jpg";
import "../components/AboutComponents/styles/about.css";
import Accordion from "../components/AboutComponents/accordion/Accordion";
import { accordionData } from "../components/AboutComponents/accordion/accordionData";
import "../components/AboutComponents/styles/accordion.css";
import HobbyButton from "../components/AboutComponents/hobbyButton/HobbyButton";
import { hobbyButtonData } from "../components/AboutComponents/hobbyButton/hobbyButtonData";

const About = () => {
  const [hobbyImage, setHobbyImage] = useState(hobbyButtonData);
  console.log(hobbyImage);
  const handleClick = (event) => {
    setHobbyImage((prevState) => {
      console.log("f", prevState);
    });
    console.log(event.currentTarget.id);
  };

  return (
    <div className="about-container">
      <div className="about-image-container">
        <h4 className="num">01/</h4>
        <span className="title">Ui developer</span>
        <div className="about-image__1">
          {/* <img className="" src={seattleImage} /> */}
          <div></div>
        </div>
        <span className="about-location">
          Located
          <br />
          Seattle,WA
        </span>
        <p>
          I'm a Front end developer with a passion for creating immersive user
          experiences.
          <br />
          <br />
          Recently, graduated with a Bachelor of Applied Science in Mobile
          Application Development. I create web experiences through user-centric
          designs. My projects include collaboration with people and independent
          work.
          <br />
          <br />
          Each project, I take it as an opportunity to learn new concepts and
          create lasting relationships.
        </p>
        <div className="about-image__2">
          <img />
        </div>
      </div>
      <div className="services-container">
        <h4 className="num">02/</h4>
        <span className="title">SERVICES</span>
        <div className="accordion-container">
          {accordionData.map(({ number, title, content }) => {
            return <Accordion title={title} content={content} />;
          })}
        </div>
      </div>
      <div className="personal-container">
        <h4 className="num">03/</h4>
        <span className="title">About</span>
        <div className="personal-hobbies">
          {hobbyButtonData.map((data) => {
            return (
              <HobbyButton
                id={data.title}
                key={data.title}
                onClick={handleClick}
                value={data.title}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
