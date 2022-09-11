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
        <h4>
          Design & <br />
          Development
        </h4>
      </div>
      <div className="aboutContent-title-4">
        <h4>
          ui <br />
          developer
        </h4>
      </div>

      <div className="aboutContent-image">
        <img src={profileImage} />
        <h3 className="aboutContent-image-name">Richard Tae</h3>
      </div>
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
