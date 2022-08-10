import React from "react";
import { Link } from "react-router-dom";
import "./styles/projectContentStyles.css";

const ProjectContent = () => {
  return (
    <div className="project-container">
      <div className="project-title">
        <h4>02/</h4>
      </div>
      <div className="project-title-2">
        <h4>Recent Projects</h4>
      </div>
      <div className="project-title-3">
        <h4>UI Developer</h4>
      </div>
      <div className="project-1">
        <h4 className="project-1__title">Konbini</h4>
        <h3 className="project-1__role">App Design & Development</h3>
        <h3 className="project-1__button">
          <Link className="project-1__link" to="work">
            More Projects
          </Link>
        </h3>
      </div>
      <div className="project-img-container">
        <img />
      </div>
      <div className="project-button">
        <Link className="project-button__text" to="work">
          More
        </Link>
      </div>
    </div>
  );
};

export default ProjectContent;
