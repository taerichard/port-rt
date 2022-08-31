import React from "react";
import "./styles/projectModalStyles.css";
import ReactDom from "react-dom";

const ProjectModal = ({
  onClose,
  open,
  title,
  description,
  role,
  technology,
}) => {
  if (!open) return null;
  return ReactDom.createPortal(
    <div className="projectModal-container">
      <h3 className="projectModal-title">{title}</h3>
      <span className="projectModal-button" onClick={onClose}>
        <h3>close</h3>
      </span>
      <div className="projectModal-desc-container">
        <p className="projectModal-desc">{description}</p>
      </div>
      <div className="projectModal-information">
        <h2 className="projectModal-desc__title">Project Information</h2>
        <div className="projectModal-information__role">
          <h4>Role</h4>
          <h4>{role}</h4>
        </div>
        <div className="projectModal-information__tech">
          <h4>Technology Stack</h4>
          <h4>{technology}</h4>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default ProjectModal;
