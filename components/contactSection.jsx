import Link from "next/link";
import Image from "next/image";
import Email from "../public/social_icons/email.svg";
import Linkedin from "../public/social_icons/linkedin.svg";
import Twitter from "../public/social_icons/twitter.svg";
import Instagram from "../public/social_icons/instagram.svg";

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col px-8 md:px-16 xl:px-24 py-10 md:py-14 xl:py-20 items-center text-almostwhite bg-almostblack"
    >
      <h2 className="text-center text-xl md:text-2xl xl:text-3xl font-bold">
        Intreseted in working together?
      </h2>
      <p className="mt-4 text-center text-sm md:text-base xl:text-lg">
        Shoot me an DM or Email, and let's discuss it.
      </p>
      <nav className="flex mt-10 md:mt-12 xl:mt-14 items-center text-center text-sm md:text-base xl:text-lg">
        <Link href="https://www.linkedin.com/in/pratik-bhangire/">
          <Image
            src={Linkedin}
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
        <Link href="https://www.instagram.com/pratikbhangirework/">
          <Image
            src={Instagram}
            alt="pratik-bhangire-instagram"
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
    </section>
  );
}
