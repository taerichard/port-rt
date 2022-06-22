import React from "react";
import ArrowIcon from "./ArrowIcon";
import "../styles/contentStyles.css";
import SecondContent from "./SecondContent";

const Content = () => {
  return (
    <div>
      <div className="content">
        <div className="content-title">
          <span className="content-title__ui">
            <span className="content-title__letter">U</span>
            <span className="content-title__letter">I</span>
          </span>
          <br />
          <span className="content-title">
            <span className="content-title__letter">D</span>
            <span className="content-title__letter">E</span>
            <span className="content-title__letter">V</span>
            <span className="content-title__letter">E</span>
            <span className="content-title__letter">L</span>
            <span className="content-title__letter">O</span>
            <span className="content-title__letter">P</span>
            <span className="content-title__letter">E</span>
            <span className="content-title__letter">R</span>
          </span>
        </div>
        <div className="image-container">
          <img />
        </div>
        <div className="name">
          <span className="name-first">
            <span className="name-first__letter">R</span>
            <span className="name-first__letter">I</span>
            <span className="name-first__letter">C</span>
            <span className="name-first__letter">H</span>
            <span className="name-first__letter">A</span>
            <span className="name-first__letter">R</span>
            <span className="name-first__letter">D</span>
          </span>
          <br />
          <span className="name-last">
            <span className="name-first__letter">T</span>
            <span className="name-first__letter">A</span>
            <span className="name-first__letter">E</span>
          </span>
        </div>
        <div className="arrow-container">
          <ArrowIcon className="arrow_animation" />
        </div>
      </div>
      <div className="second-content">
        <SecondContent />
      </div>
    </div>
  );
};

export default Content;
