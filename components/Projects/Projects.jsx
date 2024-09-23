import { ProjectCard, SectionContainer } from "../index";
import { motion } from "framer-motion";
import ProjectList from "./projects.json";
import { useRef } from "react";

export default function Projects() {
  const constraintsContainer = useRef(null);

  return (
    <SectionContainer id="projects" bgColor="bg-colorPrimary">
      <h2 className="text-center text-6xl md:text-8xl font-bold tracking-tighter text-colorSecondary">
        Projects.
      </h2>

      <motion.div
        ref={constraintsContainer}
        className="relative flex justify-center my-14 overflow-hidden"
      >
        <motion.ul
          drag="x"
          dragConstraints={constraintsContainer}
          className="flex min-w-fit gap-6 md:gap-8 xl:gap-10"
        >
          {ProjectList.map((project, index) => (
            <ProjectCard
              key={index}
              projectImage={project.projectImage}
              projectTitle={project.projectTitle}
              projectInfo={project.projectInfo}
              projectUrl={project.projectUrl}
            />
          ))}
        </motion.ul>
      </motion.div>
    </SectionContainer>
  );
}
