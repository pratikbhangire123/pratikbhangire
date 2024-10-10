import { CardTitle, CardParagraph } from "../index";

export default function SpecialityCard({ icon, title, description }) {
  return (
    <li className="grid grid-rows-[0.8fr_0.8fr_1fr] md:w-1/3 xl:w-1/4 p-4 gap-2 bg-colorPrimaryLight/10 border border-colorSecondaryLighter/10 backdrop-blur-md rounded-lg">
      <span className="text-4xl xl:text-5xl text-colorAccent/40">{icon}</span>
      <CardTitle>
        {title}
      </CardTitle>
      <CardParagraph>{description}</CardParagraph>
    </li>
  );
}
