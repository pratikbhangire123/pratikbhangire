import { BsEnvelopeFill, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { Button, SectionContainer, SocialHandles } from "../index";
import Link from "next/link";

export default function Contact() {
  return (
    <SectionContainer
      id="contact"
      bgColor="bg-colorPrimary"
      className="flex flex-col items-center justify-center"
    >
      <h2 className="text-center text-6xl md:text-8xl font-bold text-colorSecondary tracking-tighter">
        Let's Connect.
      </h2>

      <Link href="https://cal.com/pratikbhangire" target="_blank">
        <Button variant="primary" className="my-14">
          Schedule a Call
        </Button>
      </Link>

      <p className="text-sm md:text-base xl:text-lg font-light text-colorSecondaryLighter/50">
        Find me elsewhere on web
      </p>

      <SocialHandles variant="light" className="justify-center" />
    </SectionContainer>
  );
}
