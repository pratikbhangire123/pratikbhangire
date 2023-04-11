import Header from "./header";
import Image from "next/image";
import PratikBhangire from "../public/PratikBhangire.jpg";
import useScrollToLocation from "../utils/useScrollToLocation";

export default function Hero() {
  return (
    <section className="flex flex-col relative p-8 md:px-16 xl:px-24 pt-4 md:pt-8 xl:pt-12 h-screen text-almostwhite bg-almostblack">
      <Header />
      <div className="flex flex-col py-20 items-center">
        <h1 className="text-center text-3xl md:text-4xl xl:text-5xl font-black">
          Frontend Web3 Developer
        </h1>
        <p className="my-5 text-center md:text-lg xl:text-xl font-extralight">
          I build complex web interfaces in the simplest way possible, and I
          love it!
        </p>
      </div>
      <div className="flex absolute inset-x-0 -bottom-[3%] md:-bottom-[4%] xl:-bottom-[5%] justify-center">
        <div className="relative w-20 md:w-28 xl:w-36 h-20 md:h-28 xl:h-36 rounded-full">
          <Image
            src={PratikBhangire}
            alt="pratik bhangire photo"
            width={150}
            height={150}
            className="border-2 xl:border-4 border-lightgray shadow-lg shadow-almostblack/30 rounded-full"
          />
          <div className="absolute right-[100%] bottom-[55%] w-10 md:w-14 xl:w-20 h-0.5 bg-almostwhite rounded-l-full"></div>
          <div className="absolute left-[50%] bottom-[100%] w-0.5 h-10 md:h-14 xl:h-20 bg-almostwhite rounded-t-full"></div>
          <div className="absolute left-[100%] bottom-[55%] w-10 md:w-14 xl:w-20 h-0.5 bg-almostwhite rounded-r-full"></div>
          <a
            href="#about"
            onClick={useScrollToLocation}
            className="absolute right-[165%] bottom-[42%] md:bottom-[45%] xl:bottom-[47%] text-sm md:text-base xl:text-lg font-semibold transition ease-in-out delay-150 duration-300 hover:-translate-y-1 hover:scale-105 active:translate-y-1 active:scale-75"
          >
            About
          </a>
          <a
            href="#work"
            onClick={useScrollToLocation}
            className="absolute left-[30%] xl:left-[35%] bottom-[160%] text-sm md:text-base xl:text-lg font-semibold transition ease-in-out delay-150 duration-300 hover:-translate-y-1 hover:scale-105 active:translate-y-1 active:scale-75"
          >
            Work
          </a>
          <a
            href="#contact"
            onClick={useScrollToLocation}
            className="absolute left-[165%] bottom-[42%] md:bottom-[45%] xl:bottom-[47%] text-sm md:text-base xl:text-lg font-semibold transition ease-in-out delay-150 duration-300 hover:-translate-y-1 hover:scale-105 active:translate-y-1 active:scale-75"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
