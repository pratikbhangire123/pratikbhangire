import Image from "next/image";
import { SkillCardElement } from "../index";
import { FrontendThumb } from "../../public/index";
import skillsInfo from "./skillsInfo.json";
import { useState } from "react";

export default function SkillCard() {
  const [isExpanded, setIsExpanded] = useState(false);

  // w-16 md:w-20 xl:w-24 h-16 md:h-20 xl:h-24

  return (
    <div className="relative p-8 text-left bg-colorNeutralLightest border drop-shadow-md rounded-md">
      {/* <div className="block w-max -mt-[5.5rem] mx-auto ring-2 ring-colorPrimary bg-colorNeutralLightest rounded-full">
        <Image
          src={FrontendThumb}
          width={70}
          height={70}
          alt="a guy with a laptop"
          className="rounded-full object-cover"
        />
      </div> */}

      <SkillCardElement
        elementTitle="Languages"
        elements={skillsInfo.languages}
      />

      <SkillCardElement
        elementTitle="Libraries & Frameworks"
        elements={skillsInfo.libraries}
      />

      {isExpanded && (
        <>
          <SkillCardElement
            elementTitle="Other Developer Tools"
            elements={skillsInfo.devtools}
          />

          <SkillCardElement
            elementTitle="Frontend Operations"
            elements={skillsInfo.operations}
          />
        </>
      )}

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="block mt-8 -mb-11 md:-mb-12 mx-auto px-2 py-1 text-xs md:text-sm xl:text-base text-colorSecondary bg-colorPrimary border border-colorNeutral rounded-md"
      >
        {isExpanded ? "Collapse" : "Expand"}
      </button>
    </div>
  );
}
