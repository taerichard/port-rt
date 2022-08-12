import React from "react";
import ProjectList from "../components/WorkComponents/ProjectList";
import { ProjectData } from "../components/WorkComponents/ProjectData";
import ProjectCard from "../components/WorkComponents/ProjectCard";
import "../components/WorkComponents/styles/workStyles.css";
import ContactContent from "../components/HomeComponents/ContactContent";

const Work = () => {
  return (
    <div className="work-container">
      <div className="work-title-1">
        <h4>01/</h4>
      </div>
      <div className="work-title-2">
        <h3>projects</h3>
        <h4>02/</h4>
      </div>
      <div className="work-content-title">
        <h4>projects</h4>
        <p>
          Selected projects consisted of collaborative and personal work. These
          are from clients, personal, and collaborative work.
        </p>
      </div>
      <div className="work-projectList">
        {ProjectData.map((project) => {
          return (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
            />
          );
        })}
      </div>
      <div className="work-contact-container">
        <ContactContent />
      </div>
    </div>
  );
};

export default Work;
