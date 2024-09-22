import { LightLogo } from "../public/index";
import Image from "next/image";
import { SectionContainer } from "./index";

export default function Footer() {
  return (
    <section
      id="footer"
      className="flex flex-col p-4 md:p-6 xl:p-8 items-center bg-colorPrimary"
    >
      <Image src={LightLogo} alt="Logo" width={30} height={30} />

      <p className="mt-4 text-sm md:text-base xl:text-lg font-light text-colorSecondaryLighter/90">Simplicity is my Philosophy.</p>

      <span className="flex max-sm:flex-col w-full mt-8 items-center justify-between text-xs font-light text-colorSecondaryLighter/50">
        <p>&copy; 2024</p>

        <p>designed & build by <span className="font-extrabold">me</span>.</p>
      </span>
    </section>
  );
}
