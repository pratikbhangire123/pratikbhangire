import { LightLogo } from "../public/index";
import Image from "next/image";

export default function Footer() {
  return (
    <section
      id="footer"
      className="sticky bottom-0 flex flex-col p-4 md:p-6 xl:p-8 max-md:pt-8 items-center"
    >
      <span>
        <Image
          src={LightLogo}
          alt="Logo"
          width={30}
          height={30}
          className="opacity-40"
        />
      </span>

      <p className="mt-4 text-sm md:text-base xl:text-lg font-semibold text-colorSecondaryLighter/40">
        Simplicity is my Philosophy.
      </p>

      <span className="flex w-full mt-8 items-center justify-center md:justify-between text-xs font-light text-colorSecondaryLighter/30">
        <p>&copy; 2024.&nbsp;</p>

        <p>
          Designed & build by <span className="font-extrabold">me</span>.
        </p>
      </span>
    </section>
  );
}
