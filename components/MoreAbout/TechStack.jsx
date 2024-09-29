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
      <H3>Tech</H3>

      <ul className="flex flex-wrap mt-8 ml-2 gap-4 md:gap-6 text-sm md:text-base xl:text-lg text-colorPrimary/80">
        {icons.map((icon) => (
          <li className="px-3 py-1 bg-colorSecondaryLight/20 ring-1 ring-colorPrimary/10 rounded-full">
            {icon.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
