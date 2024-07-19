import { H2, SectionContainer, SocialLink } from "../index";
import socialHandles from "./socialHandles";

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
      <nav className="flex mt-10 md:mt-12 xl:mt-14 items-center text-center gap-4 text-sm md:text-base xl:text-lg">
        {socialHandles.map((social) => (
          <SocialLink
            key={social.alt}
            href={social.href}
            src={social.src}
            alt={social.alt}
          />
        ))}
      </nav>
    </SectionContainer>
  );
}
