import { SkillCardElement } from "../index";
import skillsInfo from "./skillsInfo.json";
import { useState } from "react";

export default function SkillCard() {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      id="skills"
      className="relative p-8 text-left bg-colorNeutralLightest border border-b-2 border-b-colorPrimary drop-shadow-md rounded-md"
    >
      <SkillCardElement
        elementTitle="Languages"
        elements={skillsInfo.languages}
      />

      <SkillCardElement
        elementTitle="Libraries & Frameworks"
        elements={skillsInfo.libraries}
      />

      {isExpanded && (
        <div>
          <SkillCardElement
            elementTitle="Other Developer Tools"
            elements={skillsInfo.devtools}
          />

          <SkillCardElement
            elementTitle="Frontend Operations"
            elements={skillsInfo.operations}
          />
        </div>
      )}

      <button
        onClick={handleExpand}
        className="block mt-8 -mb-11 md:-mb-12 mx-auto px-2 py-1 text-xs md:text-sm xl:text-base text-colorSecondary bg-colorPrimary border border-colorNeutral rounded-md"
      >
        {isExpanded ? "Collapse" : "Expand"}
      </button>
    </div>
  );
}
