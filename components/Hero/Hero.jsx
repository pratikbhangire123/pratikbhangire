import { delay, easeIn, motion, transform } from "framer-motion";
import { SectionContainer, Button, Available } from "../index";
import { useEffect, useState } from "react";

export default function Hero() {
  return (
    <SectionContainer
      id="hero"
      className="flex flex-col h-[90vh] justify-center text-colorSecondary"
      bgColor="bg-colorPrimary"
    >
      <div className="flex flex-col items-center justify-center">
        <motion.span
          initial={{ opacity: 0, transform: "translateY(16px)" }}
          animate={{ opacity: 1, transform: "translateY(0)" }}
          transition={{ duration: 2, delay: 5 }}
        >
          <Available />
        </motion.span>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 4, delay: 3.7 }}
          className="mb-6 md:mb-7 xl:mb-8 text-center text-5xl md:text-6xl xl:text-8xl font-semibold text-colorSecondary tracking-tighter"
        >
          Pratik Bhangire
        </motion.h1>

        <TextReveal
          text="I design and build purposeful web interfaces that fuel business growth
          and spark deep user engagement."
        />

        <motion.a
          initial={{ opacity: 0, transform: "translateY(16px)" }}
          animate={{ opacity: 1, transform: "translateY(0)" }}
          transition={{ duration: 2, delay: 5 }}
          href="#contact"
        >
          <Button variant="primary">Get in Touch</Button>
        </motion.a>
      </div>

      {/* <Profile /> */}
    </SectionContainer>
  );
}

const TextReveal = ({ text }) => {
  const charVariants = {
    hidden: { opacity: 0.3 },
    reveal: { opacity: 1 },
  };
  const textChars = text.split("");

  return (
    <motion.p
      initial="hidden"
      animate="reveal"
      transition={{ staggerChildren: 0.03 }}
      className="md:w-1/2 mb-12 md:mb-14 xl:mb-16 text-center text-base md:text-lg xl:text-xl font-extralight text-colorSecondaryLighter/90"
    >
      {textChars.map((char) => (
        <motion.span
          key={char}
          transition={{ duration: 0.35 }}
          variants={charVariants}
        >
          {char}
        </motion.span>
      ))}
    </motion.p>
  );
};
