import { H3 } from "../index";

export default function WorkCard({
  title,
  companyName,
  startDate,
  endDate,
  descriptionArray,
}) {
  return (
    <div className="mt-8 p-8 bg-colorNeutralLightest border drop-shadow-md rounded-md">
      <div className="flex items-start justify-between gap-4">
        <div>
          <H3>{title}</H3>

          <H3>{companyName}</H3>
        </div>

        <p className="mt-4 italic text-colorPrimaryLight">{`${startDate} - ${endDate}`}</p>
      </div>

      <ul className="mt-4 px-8">
        {descriptionArray.map((point, index) => (
          <li key={index} className="list-disc">{point}</li>
        ))}
      </ul>
    </div>
  );
}
