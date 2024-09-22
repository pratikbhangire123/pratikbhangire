import {
  SiFramer,
  SiNextdotjs,
  SiReact,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";
import { H3 } from "../index";

export default function SkillCard() {
  const icons = [
    { name: "React", icon: <SiReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Redux", icon: <SiRedux /> },
    { name: "TailwindCSS", icon: <SiTailwindcss /> },
    { name: "Framer Motion", icon: <SiFramer /> },
  ];

  return (
    <div id="techstack">
      <H3>My Stack</H3>

      <div className="flex flex-wrap mt-8 ml-2 gap-x-4 md:gap-x-6 text-sm md:text-base xl:text-lg text-colorPrimaryLight">
        {icons.map((icon) => (
          <span className="py-1">
            {icon.name}
          </span>
        ))}
      </div>
    </div>
  );
}
