import React from "react";
import ProjectItem from "./ProjectItem";

//const project = ProjectItem

function ProjectList({ projects }) {
  //console.log(projects);
  const projs = projects.map(project => 
      <ProjectItem 
      key = {project.id} 
      name = {project.name}
      about = {project.about}
      technologies = {project.technologies}
      /> 
  )
  console.log(projs)
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projs}
        </div>
    </div>
  );
}

export default ProjectList;
