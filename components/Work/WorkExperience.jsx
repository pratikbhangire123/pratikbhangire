import { H2, SectionContainer } from "../index";
import ExperienceList from "./experiences.json";
import { WorkCard } from "../index";

export default function WorkExperience() {
  return (
    <SectionContainer id="work" bgColor="bg-colorSecondaryLight">
      <H2>Work Experience</H2>

      {ExperienceList.map((experience, index) => (
        <WorkCard
          key={index}
          title={experience.title}
          companyName={experience.companyName}
          startDate={experience.startDate}
          endDate={experience.endDate}
          descriptionArray={experience.descriptionArray}
        />
      ))}
    </SectionContainer>
  );
}
