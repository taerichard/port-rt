import React from "react";
import "./styles/aboutContentStyles.css";
import { Link } from "react-router-dom";
import travelImage from "../../images/home/travel.jpg";

const AboutContent = () => {
  return (
    <div className="aboutContent-container">
      <div className="aboutContent-title">
        <h3>03/</h3>
        <h4>
          ABOUT <br />
          ME
        </h4>
      </div>
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
      <div className="aboutContent-hobbies">
        <div className="aboutContent-hobbies1">
          <h3>travel.</h3>

          <h3>fitness.</h3>
        </div>
        <div className="aboutContent-hobbies2">
          <h3>hiking.</h3>

          <h3>music.</h3>
        </div>
        <div className="aboutContent-active__text">
          <p>
            I like to be active and stay outside when I am not developing. I am
            a fitness enthusiast and a certified trainer. I enjoy going on
            hidden trails with my dogs and looking for food that I've never
            tried.
          </p>
          <h4>
            <Link className="aboutContent-text-2__button" to="about">
              More About Me
            </Link>
          </h4>
        </div>
      </div>
      <div className="aboutContent-image">
        <img src={travelImage} />
      </div>
      <div className="aboutContent-text-1">
        <p>
          I like to be active and stay outside when I am not developing. I am a
          fitness enthusiast and a certified trainer. I enjoy going on hidden
          trails with my dogs and looking for food that I've never tried.
        </p>
        <div className="aboutContent-button">
          <Link className="aboutContent-button__text" to="about">
            More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
