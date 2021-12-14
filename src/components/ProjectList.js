import React from "react";
import ProjectItem from "./ProjectItem";

//pass down props = {projects: [{object1}, {object2}] }
// projects: [
//   {
//     id: 1,
//     name: "Reciplease",
//     about: "A recipe tracking app",
//     technologies: ["Rails", "Bootstrap CSS"],
//   },
//   {
//     id: 2,
//     name: "Kibbles N Bitz",
//     about: "Tinder for dogs",
//     technologies: ["React", "Redux"],
//   },
//   {
//     id: 3,
//     name: "Alienwares",
//     about: "Etsy for aliens",
//     technologies: ["React", "Redux", "Rails"],
//   },
// ]

function ProjectList({ projects }) {
  console.log(projects);
  const projectItems = projects.map(project =>  <ProjectItem key={project.id} name={project.name} about={project.about} technologies={project.technologies}/>)

  return (
    <div id="projects">
      <h2>My Projects</h2>
        <div id="project-list">
          {projectItems}
        </div>
    </div>
  );
}

export default ProjectList;
