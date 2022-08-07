import React, { useState } from "react";
import "./styles/introContentStyles.css";
import { Link } from "react-router-dom";

const IntroContent = () => {
  return (
    <div className="intro-container">
      <div className="title intro-title">
        <h4>01/</h4>
      </div>
      <div className="intro-message-1">
        <p className="intro-message-1__text">
          creating a rich user experience through user centric design is my
          passion. I plan, design, and develop with modern technology, creating
          a momemt to enjoy.
        </p>
        <p className="intro-message-1__text">
          outside of web development, I'm either doing some kind of fitness or
          hanging with my dog.
        </p>
      </div>
      <div className="intro-message-2__title">
        <h4>UI Design & Development</h4>
      </div>
      <div className="intro-message-2">
        <p className="intro-message-2__text">
          Recently, graduated with a Bachelors of Applied Science in Mobile
          Application Development. I create web experiences through user-centric
          designs. My projects include collaboration with people and independent
          work.
        </p>
        <p className="intro-message-2__text">
          With my UI experience, I build strong and user-friendly web designs
          and applications. I build scalable websites from scratch that fit
          seamlessly with design.
        </p>
        <h4 className="intro-button-large__text">
          <Link className="intro-button__text" to="about">
            More about services
          </Link>
        </h4>
      </div>
      <div className="intro-button-container">
        <div className="intro-button">
          <Link className="intro-button__text" to="about">
            More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IntroContent;
