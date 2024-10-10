import { Button, H2, SectionContainer, SocialHandles } from "../index";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <SectionContainer
      id="contact"
      bgColor="bg-colorPrimary"
      className="flex flex-col items-center justify-center rounded-b-[40px] drop-shadow-lg"
    >
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
      >
        <H2>
          <span className="text-colorSecondaryLighter/70">
            Want to collaborate?&nbsp;
          </span>
          Say Hi!
        </H2>
      </motion.span>

      <motion.span
        initial={{ opacity: 0, transform: "translateY(32px)" }}
        whileInView={{ opacity: 1, transform: "translateY(0)" }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Link href="https://cal.com/pratikbhangire" target="_blank">
          <Button variant="primary" className="my-14">
            Schedule a Call
          </Button>
        </Link>
      </motion.span>

      <motion.p
        initial={{ opacity: 0, transform: "translateY(32px)" }}
        whileInView={{ opacity: 1, transform: "translateY(0)" }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-sm md:text-base xl:text-lg font-light text-colorSecondaryLighter/50"
      >
        Find me elsewhere on web
      </motion.p>

      <motion.span
        initial={{ opacity: 0, transform: "translateY(32px)" }}
        whileInView={{ opacity: 1, transform: "translateY(0)" }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <SocialHandles variant="light" className="justify-center" />
      </motion.span>
    </SectionContainer>
  );
}
