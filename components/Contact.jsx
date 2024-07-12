import Link from "next/link";
import Image from "next/image";
import { H2, SectionContainer } from "./index";
import { Email, LinkedIn, Twitter } from "../public/index";

export default function Contact() {
  return (
    <SectionContainer
      id="contact"
      bgColor="bg-colorPrimary"
      className="flex flex-col items-center text-colorSecondary"
    >
      <H2 className="text-center text-xl md:text-2xl xl:text-3xl font-bold">
        Intreseted in working together?
      </H2>
      <p className="mt-4 text-center text-sm md:text-base xl:text-lg">
        Shoot me an DM or Email, and let's discuss it.
      </p>
      <nav className="flex mt-10 md:mt-12 xl:mt-14 items-center text-center text-sm md:text-base xl:text-lg">
        <Link href="https://www.linkedin.com/in/pratik-bhangire/">
          <Image
            src={LinkedIn}
            alt="pratik-bhangire-linkedin"
            width={25}
            height={25}
            className="mx-4 transition ease-in-out delay-150 duration-300 hover:-translate-y-1 hover:scale-105 active:translate-y-1 active:scale-75"
          />
        </Link>
        <Link href="https://twitter.com/PratikBhangire">
          <Image
            src={Twitter}
            alt="pratik-bhangire-twitter"
            width={25}
            height={25}
            className="mx-4 transition ease-in-out delay-150 duration-300 hover:-translate-y-1 hover:scale-105 active:translate-y-1 active:scale-75"
          />
        </Link>
        <Link href="mailto:pratikbhangire@gmail.com">
          <Image
            src={Email}
            alt="email"
            width={25}
            height={25}
            className="mx-4 transition ease-in-out delay-150 duration-300 hover:-translate-y-1 hover:scale-105 active:translate-y-1 active:scale-75"
          />
        </Link>
      </nav>
    </SectionContainer>
  );
}
