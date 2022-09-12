import React from "react";
import "./styles/aboutContentStyles.css";
import { Link } from "react-router-dom";
import travelImage from "../../images/home/travel.jpg";
import profileImage from "../../images/home/meSpain.jpg";

const AboutContent = () => {
  return (
    <div className="aboutContent-container">
      <h3 className="aboutContent-title-1">03/</h3>
      <h4 className="aboutContent-title-2">ABOUT</h4>
      <div className="aboutContent-title-3">
        <h4>Design & Development</h4>
      </div>
      <div className="aboutContent-title-4">
        <h4>ui developer</h4>
      </div>
      <div className="aboutContent-image">
        <img src={profileImage} />
        <div className="aboutContent-image-header">
          <h3 className="aboutContent-image-name">
            <span>Ui</span>
            <br />
            <span>developer</span>
          </h3>
        </div>
        <div className="aboutContent-image-skills">
          <h4>Web Experiences</h4>
          <h4>Design & Development</h4>
          <h4>User Centric Design</h4>
        </div>
        <div className="aboutContent-image-message">
          <h3>I design, develop, and test front-end applications.</h3>
        </div>
        <h3 className="abountContent-signature">Richard Tae</h3>
      </div>

      <div className="aboutContent-button">
        <Link className="aboutContent-button__text" to="about">
          More
        </Link>
      </div>
      <div className="aboutContent-bio">
        <p>
          Hello, my name is Richard Tae, located in the Greater Seattle Area.
          Creating web designs and experiences are my passions. I design,
          develop, and test front end applications.
        </p>
      </div>
      <h4 className="aboutContent-large-button">
        <Link className="aboutContent-text-2__button" to="about">
          More About Me
        </Link>
      </h4>
    </div>
  );
};

export default AboutContent;

{
  /* <h4>
<Link className="aboutContent-text-2__button" to="about">
  More About Me
</Link>
</h4> */
}

// <div className="aboutContent-button">
// <Link className="aboutContent-button__text" to="about">
//   More
// </Link>
// </div>
