import { Header, Profile } from "../index";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col px-8 md:px-16 xl:px-24 pt-4 md:pt-8 xl:pt-12 h-[90vh] md:h-screen text-colorSecondary bg-colorPrimary"
    >
      <Header />

      <div className="flex flex-col mb-10 md:mb-20 h-full items-center justify-center">
        <h1 className="text-center text-3xl md:text-4xl xl:text-5xl font-black">
          Frontend Web Developer
        </h1>

        <p className="my-5 text-center md:text-lg xl:text-xl font-extralight">
          I build complex web interfaces in the simplest way possible, and I
          love it!
        </p>
      </div>

      <Profile />
    </section>
  );
}
