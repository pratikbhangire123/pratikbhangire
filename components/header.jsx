import PBLogo from "../public/logoLight.png";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex max-md:pt-4 items-center justify-center">
      <Image src={PBLogo} alt="Logo" width={30} height={30} />
      {/* <button className="px-4 py-3 text-xs md:text-sm xl:text-lg font-bold text-almostblack bg-almostwhite rounded-full transition ease-in-out delay-150 duration-300 hover:-translate-y-1 hover:scale-105 active:translate-y-1 active:scale-75">
        Download CV
      </button> */}
    </header>
  );
}
