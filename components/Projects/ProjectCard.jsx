import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ProjectCard(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => setIsOpen((open) => !open)}
      className="aspect-video relative w-full h-full"
    >
      <div
        className={`flex absolute inset-0 items-center justify-center text-xl font-bold text-colorSecondary md:hover:text-opacity-0 bg-colorPrimary bg-opacity-75 md:hover:bg-opacity-100 rounded-2xl`}
      >
        {props.projectTitle}
        <div className="absolute inset-0 p-4 opacity-0 md:hover:opacity-100">
          <TabAndDesktopProjectCard
            projectInfo={props.projectInfo}
            projectUrl={props.projectUrl}
          />
        </div>
      </div>
      <Image
        src={props.projectImage}
        alt={props.projectTitle}
        height={192}
        width={1920}
        className={`${isOpen ? "rounded-t-2xl" : "rounded-2xl"} md:rounded-2xl`}
      />

      {isOpen && (
        <MobileProjectCard
          projectInfo={props.projectInfo}
          projectUrl={props.projectUrl}
        />
      )}
    </div>
  );
}

function MobileProjectCard(props) {
  return (
    <div className="md:hidden flex flex-col w-full p-4 items-center bg-colorSecondary drop-shadow-xl rounded-b-2xl ">
      <p className="text-center text-xs font-light text-colorPrimary">
        {props.projectInfo}
      </p>
      <Link href={props.projectUrl}>
        <p className="mt-4 p-2 text-xs text-colorSecondary font-medium bg-colorPrimary rounded-lg transition ease-in-out delay-150 duration-300 active:translate-y-1 active:scale-75">
          View Website
        </p>
      </Link>
    </div>
  );
}

function TabAndDesktopProjectCard(props) {
  return (
    <div className="max-md:hidden flex flex-col w-full h-full p-4 items-center justify-center">
      <p className="text-center text-xs font-normal text-colorSecondary">
        {props.projectInfo}
      </p>
      <Link href={props.projectUrl}>
        <p className="mt-4 p-2 text-xs font-medium text-colorPrimary bg-colorSecondary rounded-lg transition ease-in-out delay-150 duration-300 hover:-translate-y-1 hover:scale-105 active:translate-y-1 active:scale-75">
          Open Website
        </p>
      </Link>
    </div>
  );
}
