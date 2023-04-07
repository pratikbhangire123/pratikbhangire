import PBLogo from "../public/logoDark.png";
import Image from "next/image";

export default function Footer() {
  return (
    <section className="flex flex-col relative px-8 md:px-16 xl:px-24 py-10 items-center text-almostblack bg-lightgray">
      <Image src={PBLogo} alt="Logo" width={30} height={30} />
      <p className="mt-4 text-center">Simplicity is my Philosophy.</p>
      <p className="mt-8 text-center text-xs">
        Created by me &#169; twentytwentythree
      </p>
    </section>
  );
}
