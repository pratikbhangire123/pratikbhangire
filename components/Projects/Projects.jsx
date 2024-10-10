import { motion } from "framer-motion";
import { H2, ProjectCard, SectionContainer } from "../index";
import ProjectList from "./projects.json";

export default function Projects() {
  return (
    <SectionContainer id="projects" bgColor="bg-colorPrimary">
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
      >
        <H2>
          Trust the work,&nbsp;
          <span className="text-colorSecondaryLighter/70">not words</span>!
        </H2>
      </motion.span>

      <div className="my-14 overflow-x-auto overflow-y-clip scrollbar-hide">
        <motion.ul
          initial={{ opacity: 0, transform: "translateY(32px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0)" }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex min-w-fit max-h-[70vh] items-stretch gap-6 md:gap-8 xl:gap-10"
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
      </div>
    </SectionContainer>
  );
}
