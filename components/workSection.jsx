import WorkCard from "./ui_components/workCard";
import Project from "../projects.json";
import SkillCard from "./ui_components/skillCard";

export default function Work() {
  return (
    <section
      id="work"
      className="px-8 md:px-16 xl:px-24 py-10 md:py-14 xl:py-20 text-almostblack bg-darkwhite"
    >
      <h2 className="text-center text-xl md:text-2xl xl:text-3xl font-bold">
        My Recent Projects
      </h2>
      <p className="mt-4 text-center text-sm md:text-base xl:text-lg">
        Here are some of my recent frontend projects.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-10 gap-4">
        {Project.map((project, index) => (
          <WorkCard
            key={index}
            projectImage={project.projectImage}
            projectTitle={project.projectTitle}
            projectInfo={project.projectInfo}
            projectUrl={project.projectUrl}
          />
        ))}
      </div>
    </section>
  );
}
