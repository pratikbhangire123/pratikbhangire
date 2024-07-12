import { H2, ProjectCard, SectionContainer } from "../index";
import ProjectList from "./projects.json";

export default function Projects() {
  return (
    <SectionContainer
      id="projects"
      bgColor="bg-colorSecondaryLighter"
    >
      <H2>My Recent Projects</H2>
      <p className="mt-4 text-center text-sm md:text-base xl:text-lg">
        Here are some of my recent frontend projects.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-10 gap-4">
        {ProjectList.map((project, index) => (
          <ProjectCard
            key={index}
            projectImage={project.projectImage}
            projectTitle={project.projectTitle}
            projectInfo={project.projectInfo}
            projectUrl={project.projectUrl}
          />
        ))}
      </div>
    </SectionContainer>
  );
}
