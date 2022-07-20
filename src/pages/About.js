import React, { useState } from "react";
import seattleImage from "../images/about/pc.jpg";
import "../components/AboutComponents/styles/about.css";
import Accordion from "../components/AboutComponents/accordion/Accordion";
import { accordionData } from "../components/AboutComponents/accordion/accordionData";
import "../components/AboutComponents/styles/accordion.css";
import HobbyButton from "../components/AboutComponents/hobbyButton/HobbyButton";
import { hobbyButtonData } from "../components/AboutComponents/hobbyButton/hobbyButtonData";

const About = () => {
  const [selectedImgSrc, setSelectedImgSrc] = useState([hobbyButtonData.src]);
  console.log(selectedImgSrc);

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
          {accordionData.map(({ title, content }) => {
            return <Accordion title={title} content={content} />;
          })}
        </div>
      </div>
      <div className="personal-container">
        <h4 className="num">03/</h4>
        <span className="title">About</span>
        {hobbyButtonData.map((img) => (
          <HobbyButton
            title={img.title}
            key={img.title}
            event={img.event}
            onClick={() => setSelectedImgSrc(img.src)}
          />
        ))}
        <div>{selectedImgSrc}</div>
      </div>
    </div>
  );
};

export default About;

{
  /* <div className="personal-hobbies">
<HobbyButton title="Fitness" />
<HobbyButton title="Travelling" />
<HobbyButton onClick={showDogImage} title="Hanging with my dawg" />
</div> */
}
