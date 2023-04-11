import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function WorkCard(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => setIsOpen((open) => !open)}
      className="aspect-video relative w-full h-full"
    >
      <div
        className={`flex absolute inset-0 items-center justify-center text-xl font-bold text-almostwhite md:hover:text-opacity-0 bg-almostblack bg-opacity-75 md:hover:bg-opacity-100 rounded-2xl`}
      >
        {props.projectTitle}
        <div className="absolute inset-0 p-4 opacity-0 md:hover:opacity-100">
          <TabAndDesktopWorkCard
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
        <MobileWorkCard
          projectInfo={props.projectInfo}
          projectUrl={props.projectUrl}
        />
      )}
    </div>
  );
}

function MobileWorkCard(props) {
  return (
    <div className="md:hidden flex flex-col w-full p-4 items-center bg-almostwhite drop-shadow-xl rounded-b-2xl ">
      <p className="text-center text-xs font-light text-alomstblack">
        {props.projectInfo}
      </p>
      <Link href={props.projectUrl}>
        <p className="mt-4 p-2 text-xs text-almostwhite font-medium bg-almostblack rounded-lg transition ease-in-out delay-150 duration-300 active:translate-y-1 active:scale-75">
          View Website
        </p>
      </Link>
    </div>
  );
}

function TabAndDesktopWorkCard(props) {
  return (
    <div className="max-md:hidden flex flex-col w-full h-full p-4 items-center justify-center">
      <p className="text-center text-xs font-normal text-almostwhite">
        {props.projectInfo}
      </p>
      <Link href={props.projectUrl}>
        <p className="mt-4 p-2 text-xs font-medium text-almostblack bg-almostwhite rounded-lg transition ease-in-out delay-150 duration-300 hover:-translate-y-1 hover:scale-105 active:translate-y-1 active:scale-75">
          View Website
        </p>
      </Link>
    </div>
  );
}
