import React from "react";
import "../styles/secondContentStyles.css";
// codesandbow https://codepen.io/BurmesePotato/pen/qBbqpNB
const SecondContent = () => {
  return (
    <div className="container">
      <section className="profile">
        <h4 className="profile-container">
          <span className="profile-container__title">
            <span className="profile-container__text">0</span>
            <span className="profile-container__text">0</span>
            <span className="profile-container__text">/</span>
          </span>
        </h4>
        <h4 className="profile-intro">
          <span className="profile-intro-text">ABOUT</span>
        </h4>
        <div className="profile-about">
          <span className="profile-about__intro">
            CREATING A RICH USER EXPERIENCE THROUGH USER CENTRIC DESIGN IS MY
            PASSION. I PLAN, DESIGN, AND DEVELOP WITH MODERN TECHNOLOGY,
            CREATING A MOMENT TO ENJOY.
          </span>
        </div>
        <div className="profile-button">
          <span className="profile-button__text">More?</span>
        </div>
      </section>
      <section className="projects-container">
        <h4 className="project-number">
          <span className="project-title">
            <span className="project-title__text">0</span>
            <span className="project-title__text">1</span>
            <span className="project-title__text">/</span>
          </span>
        </h4>
        <h4 className="project-title">
          <span className="project-intro">
            <span className="project-intro-text">PROJECTS</span>
          </span>
        </h4>
      </section>
    </div>
  );
};

export default SecondContent;
