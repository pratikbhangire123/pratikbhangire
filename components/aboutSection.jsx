import SkillCard from "./ui_components/skillCard";
import FronendDeveloper from "../public/skill_thumbs/FrontendDeveloper.png";
import UIDesigner from "../public/skill_thumbs/UIDesigner.png";

export default function About() {
  return (
    <section
      id="about"
      className="px-8 md:px-16 xl:px-24 py-10 md:py-14 xl:py-20 text-almostblack bg-shadedwhite"
    >
      <h3 className="-mt-2 md:-mt-6 xl:-mt-10 text-center text-base md:text-lg xl:text-xl font-bold">
        Pratik Bhangire
      </h3>
      <p className="mt-10 mx-2 md:mx-20 xl:mx-40 text-center text-xs md:text-sm xl:text-base font-medium">
        Visuals have always been my passion & strength. Since my graduation
        days, I'm also very curious about the way human-computer interaction
        happens. I think this is the perfect recipe for me to be naturally
        interested in the front-end side of the internet.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-20 gap-4">
        <SkillCard
          src={FronendDeveloper}
          skill="Frontend Web3 Developer"
          experience="Intermediate Level"
          languages="JavaScript, HTML, & CSS"
          techstack={
            <>
              ReactJS <br /> NextJS <br /> TailwindCSS <br /> EthersJS <br />
              VSCode <br /> GitHub <br /> Vercel
            </>
          }
        />
        <SkillCard
          src={UIDesigner}
          skill="UI Designer"
          experience="Learner"
          techstack={
            <>
              Figma <br /> Font Awesome
            </>
          }
        />
      </div>
    </section>
  );
}
