import { H4 } from "../index";

export default function SkillCardElement({ elementTitle, elements }) {
  return (
    <div>
      <H4>{elementTitle}</H4>

      <ul className="flex flex-wrap justify-start items-center mt-2 gap-1.5">
        {elements.map((element, index) => (
          <li
            key={index}
            className="px-2 text-sm bg-colorSecondary border-colorPrimaryLight border rounded-full"
          >
            {element}
          </li>
        ))}
      </ul>
    </div>
  );
}
