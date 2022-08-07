import React from "react";
import "./styles/homeIntroStyles.css";
import homeIntroImage from "../../images/intro/me.jpg";

const HomeIntro = () => {
  return (
    <div className="content">
      <div className="content-title">
        <span className="content-title__letter">U</span>
        <span className="content-title__letter">I</span>

        <br />
        <div className="content-title">
          <span className="content-title__letter">D</span>
          <span className="content-title__letter">E</span>
          <span className="content-title__letter">V</span>
          <span className="content-title__letter">E</span>
          <span className="content-title__letter">L</span>
          <span className="content-title__letter">O</span>
          <span className="content-title__letter">P</span>
          <span className="content-title__letter">E</span>
          <span className="content-title__letter">R</span>
        </div>
      </div>
      <div className="image-container">
        <div className="image-first-container">
          <img src={homeIntroImage} />
        </div>
      </div>
      <div className="name">
        <span className="name-first__letter">R</span>
        <span className="name-first__letter">I</span>
        <span className="name-first__letter">C</span>
        <span className="name-first__letter">H</span>
        <span className="name-first__letter">A</span>
        <span className="name-first__letter">R</span>
        <span className="name-first__letter">D</span>
        <br />
        <span className="name-first__letter">T</span>
        <span className="name-first__letter">A</span>
        <span className="name-first__letter">E</span>
      </div>
    </div>
  );
};

export default HomeIntro;
