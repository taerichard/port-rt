import React from "react";
import ProjectCard from "./ProjectCard";
import { ProjectData } from "./ProjectData";

const ProjectList = () => {
  console.log(ProjectData);
  return (
    <div>
      {ProjectData.map((project) => (
        <ProjectCard title={project.title} description={project.description} />
      ))}
    </div>
  );
};

export default ProjectList;
