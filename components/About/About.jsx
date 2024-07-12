import { H3, SectionContainer, SkillCard } from "../index";

export default function About() {
  
  return (
    <SectionContainer id="about" bgColor="bg-colorSecondary">
      <h3 className="mt-2 md:-mt-2 xl:-mt-6 text-center text-base md:text-lg xl:text-xl font-bold">
        Pratik Bhangire
      </h3>
      <p className="mt-10 mx-2 md:mx-20 xl:mx-40 text-center text-xs md:text-sm xl:text-base font-medium">
        Visuals have always been my passion & strength. Since my graduation
        days, I'm very curious about the way human-computer interaction happens.
        I think this is the perfect recipe for me to be naturally interested in
        the front-end side of the internet.
      </p>
      <div className="mt-20 text-center space-y-8">
        <H3>Skills I'm Proficient in...</H3>
        <SkillCard />
      </div>
    </SectionContainer>
  );
}
