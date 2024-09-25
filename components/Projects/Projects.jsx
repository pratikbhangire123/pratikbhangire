import { ProjectCard, SectionContainer } from "../index";
import ProjectList from "./projects.json";

export default function Projects() {
  return (
    <SectionContainer id="projects" bgColor="bg-colorPrimary">
      <h2 className="text-center text-6xl md:text-8xl font-bold tracking-tighter text-colorSecondary">
        Projects.
      </h2>

      <div className="my-14 overflow-x-auto overflow-y-clip scrollbar-hide">
        <ul className="flex min-w-fit max-h-[70vh] items-stretch gap-6 md:gap-8 xl:gap-10">
          {ProjectList.map((project, index) => (
            <ProjectCard
              key={index}
              projectImage={project.projectImage}
              projectTitle={project.projectTitle}
              projectInfo={project.projectInfo}
              projectUrl={project.projectUrl}
            />
          ))}
        </ul>
      </div>
    </SectionContainer>
  );
}
