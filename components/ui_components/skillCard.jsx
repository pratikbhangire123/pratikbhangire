import Image from "next/image";

export default function SkillCard(props) {
  return (
    <div className="flex flex-col p-8 items-center bg-almostwhite shadow-md rounded-2xl">
      <div className="w-16 md:w-20 xl:w-24 h-16 md:h-20 xl:h-24 p-1 bg-white border-2 border-almostblack rounded-full">
        <Image
          src={props.src}
          width={100}
          height={100}
          className="rounded-full"
        />
      </div>
      <h3 className="mt-4 text-base md:text-lg xl:text-xl font-bold">
        {props.skill}
      </h3>
      <p className="mt-4 text-sm md:text-base xl:text-lg font-medium">
        {props.experience}
      </p>
      {props.skill !== "UI Designer" && (
        <p className="mt-4 text-sm md:text-base xl:text-lg font-bold">
          Languages
        </p>
      )}
      {props.skill !== "UI Designer" && (
        <p className="mt-1 text-sm md:text-base xl:text-lg">
          {props.languages}
        </p>
      )}
      <p className="mt-4 text-sm md:text-base xl:text-lg font-bold">
        Tech Stack
      </p>
      <p className="mt-1 text-center text-sm md:text-base xl:text-lg">
        {props.techstack}
      </p>
    </div>
  );
}
