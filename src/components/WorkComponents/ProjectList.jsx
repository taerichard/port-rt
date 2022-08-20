import React from "react";
import ProjectCard from "./ProjectCard";
import { ProjectData } from "./ProjectData";

const ProjectList = () => {
  console.log(ProjectData);
  return (
    <div className="work-projectList">
      {ProjectData.map((project) => {
        return (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
          />
        );
      })}
    </div>
  );
};

export default ProjectList;
