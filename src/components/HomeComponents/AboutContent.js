import React from "react";
import "./styles/aboutContentStyles.css";
import { Link } from "react-router-dom";
import travelImage from "../../images/home/travel.jpg";

const AboutContent = () => {
  return (
    <div className="aboutContent-container">
      <div className="aboutContent-title">
        <h4>03/</h4>
      </div>
      <div className="aboutContent-title-2">
        <h4>ABOUT</h4>
      </div>
      <div className="aboutContent-title-3">
        <h4>Design & Development</h4>
      </div>
      <div className="aboutContent-hobbies">
        <h3>travel.</h3>
        <div className="aboutContent-image">
          <img src={travelImage} />
        </div>
        <h3>fitness.</h3>
        <br />
        <h3>hiking.</h3>
      </div>
      <div className="aboutContent-text">
        <div className="aboutContent-text-1">
          <p>
            When I am not web designing, I usually play sports, hang out with my
            dogs, or skip rocks at the lake to beat the world record.
          </p>
        </div>
        <div className="aboutContent-text-2">
          <h3>
            <Link className="aboutContent-text-2__button" to="about">
              More About Me
            </Link>
          </h3>
        </div>
      </div>
      <div className="aboutContent-button">
        <Link className="aboutContent-button__text" to="about">
          More
        </Link>
      </div>
    </div>
  );
};

export default AboutContent;
