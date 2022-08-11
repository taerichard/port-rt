import React from "react";
import "./styles/projectCardStyles.css";

const ProjectCard = (props) => {
  return (
    <div className="project-card">
      <h3 className="project-card__title">{props.title}</h3>
      <p className="project-card__description">{props.description}</p>
      <div className="project-image-container">
        <img className="project-card__image" src={props.imageSrc} />
      </div>
    </div>
  );
};

export default ProjectCard;
