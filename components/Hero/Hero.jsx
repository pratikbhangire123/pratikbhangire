import { SectionContainer, Button, Available } from "../index";

export default function Hero() {
  return (
    <SectionContainer
      id="hero"
      className="flex flex-col h-[90vh] justify-center text-colorSecondary"
      bgColor="bg-colorPrimary"
    >
      <div className="flex flex-col items-center justify-center">
        <Available />

        <h1 className="mb-6 md:mb-7 xl:mb-8 text-center text-5xl md:text-6xl xl:text-8xl font-semibold text-colorSecondary tracking-tighter">
          Pratik Bhangire
        </h1>

        <p className="md:w-1/2 mb-12 md:mb-14 xl:mb-16 text-center text-base md:text-lg xl:text-xl font-extralight text-colorSecondaryLighter/90">
          I design and build purposeful web interfaces that fuel business growth
          and spark deep user engagement.
        </p>

        <a href="#contact">
          <Button variant="primary">Get in Touch</Button>
        </a>
      </div>

      {/* <Profile /> */}
    </SectionContainer>
  );
}
