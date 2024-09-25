export default function SpecialityCard({ icon, title, description }) {
  return (
    <li className="grid grid-rows-[0.8fr_0.8fr_1fr] md:w-1/3 xl:w-1/4 p-4 gap-2 bg-colorPrimaryLight/10 border border-colorSecondaryLighter/10 backdrop-blur-md rounded-lg">
      <span className="text-4xl xl:text-5xl text-colorAccent/40">{icon}</span>
      <p className="text-lg md:text-xl xl:text-2xl text-colorSecondaryLight">{title}</p>
      <p className="text-xs md:text-sm xl:text-base font-extralight text-colorSecondaryLighter/70 leading-5">
        {description}
      </p>
    </li>
  );
}
