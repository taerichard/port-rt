import React from "react";
import "./styles/projectCardStyles.css";

const ProjectCard = (props) => {
  return (
    <div className="project-card-container">
      <div className="project-card">
        <h3 className="project-card__title">{props.title}</h3>
      </div>
      <div className="project-description-container">
        <p className="project-card__description">{props.description}</p>
      </div>
      <div className="project-image-container">
        <img className="project-card__image" src={props.imageSrc} />
      </div>
    </div>
  );
};

export default ProjectCard;
