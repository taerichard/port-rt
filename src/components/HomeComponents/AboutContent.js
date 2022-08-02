import React from "react";
import "./styles/aboutContentStyles.css";
import { Link } from "react-router-dom";

const AboutContent = () => {
  return (
    <div className="aboutContent-container">
      <div className="aboutContent-title">
        <h4>03/</h4>
      </div>
      <div className="aboutContent-title-2">
        <h4>ABOUT</h4>
      </div>
      <div className="aboutContent-hobbies">
        <h3>fitness.</h3>
        <div className="aboutContent-image">
          <img />
        </div>
        <h3>music.</h3>
        <h3>travel.</h3>
        <h3>reading.</h3>
        <h3>hiking.</h3>
      </div>
      <div className="aboutContent-text">
        <p>
          When I am not web designing, I usually watch football cheering for the
          Seattle, Seahawks, hanging out with my dog, or skipping rocks in the
          lake. I backpack in the mountains when my wife forces me.
        </p>
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
