import React, { useState } from "react";
import ProjectModal from "./ProjectModal";
import "./styles/projectCardStyles.css";

const BUTTON_WRAPPER_STYLES = {
  position: "relative",
  zIndex: 1,
  border: "2px solid blue",
};

const ProjectCard = (props) => {
  const [isOpen, setIsOpen] = useState(false);

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
        <div className="project-card-button-container">
          <p style={BUTTON_WRAPPER_STYLES} onClick={() => setIsOpen(true)}>
            More
          </p>
          <ProjectModal open={isOpen} onClose={() => setIsOpen(false)}>
            Hello
          </ProjectModal>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
